import '../date-navigation/month-navigation';
import '../event/event-overlay';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-text-field/vaadin-number-field';

import { customElement, eventOptions, html, LitElement, property, TemplateResult } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { overlayStateChange } from '../+state/event/event.action';
import { store } from '../+state/store';
import { renderCalendarRow } from '../utility/date';
import { getWeekDaysForWeek } from '../utility/date-manipulation/week';
import { style } from './month.styles';

@customElement('calrum-month')
export class MonthComponent extends connect(store)(LitElement) {
  @property({ type: Number }) currentYear = new Date().getFullYear();
  @property({ type: Number }) currentMonth = new Date().getMonth();
  @property({ type: Map }) events = new Map();

  static get styles() {
    return [style];
  }

  @eventOptions({ capture: false, passive: true })
  private yearChanged(e: any) {
    this.currentYear = e.detail;
  }

  @eventOptions({ capture: false, passive: true })
  private monthChanged(e: any) {
    this.currentMonth = e.detail;
  }

  @eventOptions({ capture: false, passive: true })
  private addIconClicked(e: any) {
    store.dispatch(overlayStateChange({ change: true, origin: new Date() }));
  }

  protected render(): TemplateResult {
    return html`
      <calrum-event-form-overlay></calrum-event-form-overlay>
      <div class="month-indicator">
      <calrum-month-navigation
        month="${this.currentMonth}"
        year="${this.currentYear}"
        @currentMonthChanged="${this.monthChanged}"
        @currentYearChanged="${this.yearChanged}"
        @addOverlayTriggered="${this.addIconClicked}"
      ></calrum-month-navigation>
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
