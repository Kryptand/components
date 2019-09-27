import {
  css,
  customElement,
  eventOptions,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import './../event/create-event.form';
import { addEvent, overlayStateChange } from '../+state/event/event.action';
import { store, RootState } from '../+state/store';
import { displayNotification } from '../utility/notification';
import { isNullOrUndefined } from '../utility/throw-if-null-or-undefined';
import { getOverlayStateSelector } from '../+state/event/event.reducer';
import { PaperDialogElement } from '@polymer/paper-dialog/paper-dialog';

@customElement('calrum-event-form-overlay')
export class CalrumRootComponent extends connect(store)(LitElement) {
  @property({ type: Boolean}) opened = false;
  @property({ type: Date}) origin = new Date();
  @property({ type: String }) label = '';

  static styles = css`
    :host {
      display: block;
    }
  `;

  stateChanged(state: RootState) {
    if (!isNullOrUndefined(this.opened)) {
     const {change,origin}= getOverlayStateSelector(state.event);
      this.opened=change;
      this.origin=origin;
      const dialog = this.shadowRoot.getElementById(
        'dialog'
      ) as PaperDialogElement;
      this.opened ? dialog.open() : dialog.close();
    }
  }
  @eventOptions({ capture: false, passive: true })
  private dateAddedEvent(e: any) {
    displayNotification(e.detail.label, e.detail.date);
    store.dispatch(addEvent(e.detail));
    store.dispatch(overlayStateChange({change:false,origin:new Date()}));
  }

  protected render(): TemplateResult {
    return html`
      <paper-dialog id="dialog">
        <h2>Add Event</h2>
        <paper-dialog-scrollable>
          <calrum-event-form date="${new Date(this.origin).toISOString().substring(0, 10)}"
            @submitEvent="${this.dateAddedEvent}"
          ></calrum-event-form>
        </paper-dialog-scrollable>
      </paper-dialog>
    `;
  }
}
