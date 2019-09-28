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
import './create-event.form';
import { addEvent, overlayStateChange, updateEvent } from '../+state/event/event.action';
import { store, RootState } from '../+state/store';
import { isNullOrUndefined } from '../utility/throw-if-null-or-undefined';
import { getOverlayStateSelector } from '../+state/event/event.reducer';
import { PaperDialogElement } from '@polymer/paper-dialog/paper-dialog';

const transformDateToShortString=(date:Date):string=>{
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
@customElement('calrum-event-form-overlay')
export class CalrumRootComponent extends connect(store)(LitElement) {
  @property({ type: Boolean}) opened = false;
  @property({ type: Date}) origin = new Date();
  @property({ type: String }) label = '';
  @property({type:String}) id='';
  static styles = css`
    :host {
      display: block;
    }
    .padded-overlay-form{
      padding:0px 10px;
    }
  `;

  stateChanged(state: RootState) {
    if (!isNullOrUndefined(this.opened)) {
     const {change,origin,originalDate}= getOverlayStateSelector(state.event);
      this.opened=change;
      this.origin=origin;
      this.resetForm();
      if(!isNullOrUndefined(originalDate)){
        this.label=originalDate.label;
        this.id=originalDate.id;
      }
      const dialog = this.shadowRoot.getElementById(
        'dialog'
      ) as PaperDialogElement;
      this.opened ? dialog.open() : dialog.close();
    }
  }
  private resetForm() {
    this.id = '';
    this.label = '';
  }

  @eventOptions({ capture: false, passive: true })
  private dateAddedEvent(e: any) {
    // displayNotification(e.detail.label, e.detail.date);
    store.dispatch(addEvent(e.detail));
    store.dispatch(overlayStateChange({change:false,origin:new Date()}));
  }
  @eventOptions({ capture: false, passive: true })
  private dateUpdatedEvent(e: any) {
    store.dispatch(updateEvent(e.detail));
    store.dispatch(overlayStateChange({change:false,origin:new Date()}));
  }
  protected render(): TemplateResult {
    return html`
      <paper-dialog id="dialog">
        <h2>Eintrag hinzufügen</h2>
        <paper-dialog-scrollable>
          <calrum-event-form class="padded-overlay-form" id="${this.id}" label="${this.label}" date="${transformDateToShortString(this.origin)}"
            @addEvent="${this.dateAddedEvent}"
            @updateEvent="${this.dateUpdatedEvent}"
          ></calrum-event-form>
        </paper-dialog-scrollable>
      </paper-dialog>
    `;
  }
}
