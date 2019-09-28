import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-text-field/vaadin-number-field';

import { customElement, eventOptions, html, LitElement, property, TemplateResult } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { store } from '../+state/store';
import { getMonthNamesInYear } from '../utility/date-manipulation/month';

@customElement('calrum-month-navigation-inputs')
export class MonthNavigationComponent extends connect(store)(LitElement) {
  @property({ type: Number }) currentYear = new Date().getFullYear();
  @property({ type: Number }) currentMonth = new Date().getMonth();

  @eventOptions({ capture: false, passive: true })
  private yearChanged(e: any) {
    this.currentYear = Number.parseInt(e.target.value);
    this.dispatchEvent(
      new CustomEvent<Number>('currentYearChanged', { detail: this.currentYear })
    );
  }

  @eventOptions({ capture: false, passive: true })
  private monthChanged(e: any) {
    if(e.detail.value){
      this.dispatchEvent(
        new CustomEvent<Number>('currentMonthChanged', { detail: e.detail.value})
      );
    }
  }

  protected render(): TemplateResult {
    return html`
        <vaadin-number-field
          theme="custom"
          @change="${this.yearChanged}"
          value="${this.currentYear}"
          id="year"
          has-controls
        ></vaadin-number-field>
        <vaadin-select
          theme="custom"
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
    `;
  }
}
