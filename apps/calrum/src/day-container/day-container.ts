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
import '@polymer/paper-dialog/paper-dialog';@customElement('calrum-day-container')
export class DayContainerComponent extends connect(store)(LitElement) {
  @property({ type: Date }) date = new Date();
  @property({ type: Array }) events: DateEvent[] = [];
  static get styles() {
    return [style];
  }
  constructor() {
    super();

  }
  changeOverlayInState(item?:DateEvent) {
    if(item){
      return store.dispatch(overlayStateChange({change:true,origin:this.date,originalDate:item}))
    }
    store.dispatch(overlayStateChange({ change: true, origin: this.date }));
  }
  stateChanged(state: RootState) {
    if (!isNullOrUndefined(this.date)) {
      this.events = getEventsSelector(state.event);
    }
  }
  @eventOptions({ capture: false, passive: true })
  deleteEvent(e: any) {
    store.dispatch(removeEvent(e));
  }


  private renderEvent(): TemplateResult[] {
    const id = new DateIdentifier(this.date).identifier;
    const filteredEvents = this.events.filter(x => x.dateId === id);
    return filteredEvents.map(
      x =>
        html`
          <div class="event">
            <span class="text" @click=${() => this.changeOverlayInState(x)} title=${x.label}> ${x.label}</span>
            <span class="spacer"></span>
            <vaadin-button @click=${() => this.deleteEvent(x.id)} class="event-empty">
              <iron-icon icon="delete"></iron-icon>
            </vaadin-button>
          </div>
        `
    );
  }
  protected render(): TemplateResult {
    return html`
    <div class="date-header">
    <span class="text" >${new Date(this.date).getDate()}</span>
    <span class="spacer"></span>
    <vaadin-button @click=${() => this.changeOverlayInState()} class="event-empty">
      <iron-icon icon="add"></iron-icon>
    </vaadin-button>
    </div>
      <div class="events">
        ${this.renderEvent()}
      </div>
    `;
  }
}
