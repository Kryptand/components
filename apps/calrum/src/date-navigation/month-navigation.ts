import './left-right-navigation';
import './month-navigation-inputs';
import {
  customElement,
  eventOptions,
  html,
  LitElement,
  property,
  TemplateResult,
  css
} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../+state/store';

@customElement('calrum-month-navigation')
export class MonthNavigationComponent extends connect(store)(LitElement) {
  @property({ type: Number }) currentYear = new Date().getFullYear();
  @property({ type: Number }) currentMonth = new Date().getMonth();
  static get styles(){
    return css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ` ;
  }
  @eventOptions({ capture: false, passive: true })
  private yearChanged(e: any) {
    this.currentYear = Number.parseInt(e.detail);
    this.dispatchEvent(
      new CustomEvent<Number>('currentYearChanged', {
        detail: this.currentYear
      })
    );
  }

  @eventOptions({ capture: false, passive: true })
  private monthChanged(e: any) {
    this.currentMonth = new Date(e.detail).getMonth();
    this.dispatchEvent(
      new CustomEvent<Number>('currentMonthChanged', {
        detail: this.currentMonth
      })
    );
  }
  @eventOptions({ capture: false, passive: true })
  private increaseMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.dispatchEvent(
        new CustomEvent<Number>('currentMonthChanged', {
          detail: this.currentMonth
        })
      );
      return;
    }
    this.currentMonth = this.currentMonth + 1;
    this.dispatchEvent(
      new CustomEvent<Number>('currentMonthChanged', {
        detail: this.currentMonth
      })
    );
  }
  @eventOptions({ capture: false, passive: true })
  private decreaseMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.dispatchEvent(
        new CustomEvent<Number>('currentMonthChanged', {
          detail: this.currentMonth
        })
      );
      return;
    }
    this.currentMonth = this.currentMonth - 1;
    this.dispatchEvent(
      new CustomEvent<Number>('currentMonthChanged', {
        detail: this.currentMonth
      })
    );
  }

  @eventOptions({ capture: false, passive: true })
  private addIconClicked(e: any) {
    this.dispatchEvent(
      new CustomEvent<boolean>('addOverlayTriggered', { detail: true })
    );
  }

  protected render(): TemplateResult {
    return html`
      <calrum-left-right-navigation
        @increaseEventTriggered="${this.increaseMonth}"
        @decreaseEventTriggered="${this.decreaseMonth}"
      >
        <calrum-month-navigation-inputs
          slot="actions"
          currentYear="${this.currentYear}"
          currentMonth="${this.currentMonth}"
          @currentYearChanged="${this.yearChanged}"
          @currentMonthChanged="${this.monthChanged}"
        ></calrum-month-navigation-inputs>
      </calrum-left-right-navigation>
      <vaadin-button
        class="kryptand-icon"
        @click="${this.addIconClicked}"
        id="add-alert"
        aria-label="Eintrag hinzufügen"
      >
        <iron-icon icon="add-alert"></iron-icon>
      </vaadin-button>
    `;
  }
}
