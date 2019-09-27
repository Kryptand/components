import '../event-overlay/event-overlay';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-text-field/vaadin-number-field';

import {
  customElement,
  eventOptions,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { store } from '../+state/store';
import { renderCalendarRow } from '../utility/date';
import { getWeekDaysForWeek } from '../utility/date-manipulation/week';
import { getMonthNamesInYear } from './../utility/date-manipulation/month';
import { style } from './month.styles';
import { overlayStateChange } from '../+state/event/event.action';

@customElement('calrum-month')
export class MonthComponent extends connect(store)(LitElement) {
  static get styles() {
    return [style];
  }

  @property({ type: Number }) currentYear = new Date().getFullYear();
  @property({ type: Number }) currentMonth = new Date().getMonth();
  @property({ type: Map }) events = new Map();

  @eventOptions({ capture: false, passive: true })
  private yearChanged(e: any) {
    this.currentYear = Number.parseInt(e.target.value);
  }

  @eventOptions({ capture: false, passive: true })
  private monthChanged(e: any) {
    this.currentMonth = new Date(e.target.value).getMonth();
  }

  @eventOptions({ capture: false, passive: true })
  private addIconClicked(e: any) {
    store.dispatch(overlayStateChange({change:true,origin:new Date()}))
  }

  protected render(): TemplateResult {
    return html`
      <calrum-event-form-overlay></calrum-event-form-overlay>
      <div class="month-indicator">
        <vaadin-number-field theme="custom"
          @change="${this.yearChanged}"
          value="${this.currentYear}"
          id="year"
          has-controls
        ></vaadin-number-field>
        <vaadin-select theme="custom"
          @value-changed="${this.monthChanged}"
          value="${this.currentMonth + 1}"
        >
          <template>
            <vaadin-list-box theme="custom">
              ${getMonthNamesInYear().map(
                (x, index) => html`
                  <vaadin-item theme="custom" value="${index + 1}" label="${x}"
                    >${x}</vaadin-item
                  >
                `
              )}
            </vaadin-list-box>
          </template>
        </vaadin-select>
        <vaadin-button class="kryptand-icon" @click="${this.addIconClicked}" id="add-alert" aria-label="Eintrag hinzufügen">
          <iron-icon icon="add-alert"></iron-icon>
        </vaadin-button>
      </div>
      <div class="grid-container">
        <div class="weeknames">
          ${getWeekDaysForWeek().map(
            x =>
              html`
                <div>${x}</div>
              `
          )}
        </div>
        ${renderCalendarRow(this.currentMonth, this.currentYear)}
      </div>
    `;
  }
}
