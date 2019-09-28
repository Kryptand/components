import '../event/event-overlay';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-text-field/vaadin-number-field';

import { customElement, eventOptions, html, LitElement, property, TemplateResult } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { store } from '../+state/store';
import { getMonthNamesInYear } from '../utility/date-manipulation/month';

@customElement('calrum-week-navigation')
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
    this.currentMonth = new Date(e.target.value).getMonth();
    this.dispatchEvent(
      new CustomEvent<Number>('currentMonthChanged', { detail: this.currentMonth})
    );
  }
  @eventOptions({ capture: false, passive: true })
  private increaseMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.dispatchEvent(
        new CustomEvent<Number>('currentMonthChanged', { detail: this.currentMonth})
      );
      return;
    }
    this.currentMonth = this.currentMonth + 1;
    this.dispatchEvent(
      new CustomEvent<Number>('currentMonthChanged', { detail: this.currentMonth})
    );
  }
  @eventOptions({ capture: false, passive: true })
  private decreaseMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.dispatchEvent(
        new CustomEvent<Number>('currentMonthChanged', { detail: this.currentMonth})
      );
      return;
    }
    this.currentMonth = this.currentMonth - 1;
    this.dispatchEvent(
      new CustomEvent<Number>('currentMonthChanged', { detail: this.currentMonth})
    );
  }

  @eventOptions({ capture: false, passive: true })
  private addIconClicked(e: any) {
    this.dispatchEvent(
      new CustomEvent<boolean>('addOverlayTriggered', { detail: true})
    );;
  }

  protected render(): TemplateResult {
    return html`
      <div class="month-indicator">
        <vaadin-button
          class="kryptand-icon"
          @click="${this.decreaseMonth}"
          id="month-previous"
          aria-label="Monat zuvor"
        >
          <iron-icon icon="chevron-left"></iron-icon>
        </vaadin-button>
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
        <vaadin-button
          class="kryptand-icon"
          @click="${this.increaseMonth}"
          id="month-after"
          aria-label="Monat später"
        >
          <iron-icon icon="chevron-right"></iron-icon>
        </vaadin-button>

        <vaadin-button
          class="kryptand-icon"
          @click="${this.addIconClicked}"
          id="add-alert"
          aria-label="Eintrag hinzufügen"
        >
          <iron-icon icon="add-alert"></iron-icon>
        </vaadin-button>
      </div>
    `;
  }
}
