import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
  eventOptions
} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { isNullOrUndefined } from 'util';
import { getEventsSelector } from '../+state/event/event.reducer';
import { RootState, store } from '../+state/store';
import { DateEvent, DateIdentifier } from '../models/event';
import { removeEvent, overlayStateChange } from '../+state/event/event.action';
import { style } from './day-container.style';
import '@polymer/paper-dialog/paper-dialog';
import { PaperDialogElement } from '@polymer/paper-dialog/paper-dialog';
@customElement('calrum-day-container')
export class DayContainerComponent extends connect(store)(LitElement) {
  @property({ type: Date }) date = new Date();
  @property({ type: Array }) events: DateEvent[] = [];
  static get styles() {
    return [style];
  }
  constructor() {
    super();
    this.addEventListener('click', _ => {
      store.dispatch(overlayStateChange({change:true,origin:this.date}));
    });
  }
  stateChanged(state: RootState) {
    if (!isNullOrUndefined(this.date)) {
      this.events = getEventsSelector(state.event);
    }
  }
  @eventOptions({ capture: false, passive: true })
  deleteEvent(e: any) {
    console.debug(e);
    store.dispatch(removeEvent(e));
  }

  private renderEvent(): TemplateResult[] {
    const id = new DateIdentifier(this.date).identifier;
    const filteredEvents = this.events.filter(x => x.dateId === id);
    return filteredEvents.map(
      x =>
        html`
          <div class="event">
            ${x.label}<span
              class="delete"
              @click=${() => this.deleteEvent(x.id)}
              >X</span
            >
          </div>
        `
    );
  }
  protected render(): TemplateResult {
    return html`
      ${new Date(this.date).getDate()}
      <div class="events">
        ${this.renderEvent()}
      </div>
    `;
  }
}
