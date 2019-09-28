import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { customElement, eventOptions, html, LitElement, TemplateResult, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { store } from '../+state/store';

@customElement('calrum-left-right-navigation')
export class MonthNavigationComponent extends connect(store)(LitElement) {
  static get styles(){
    return css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #previous,#after{
      margin: 0px 4px;
    }
    ` ;
  }
  @eventOptions({ capture: false, passive: true })
  private increase() {
    this.dispatchEvent(
      new CustomEvent<void>('increaseEventTriggered', {})
    );
  }
  @eventOptions({ capture: false, passive: true })
  private decrease() {
    this.dispatchEvent(
      new CustomEvent<void>('decreaseEventTriggered', {})
    );
  }

  protected render(): TemplateResult {
    return html`
        <vaadin-button
          class="kryptand-icon"
          @click="${this.decrease}"
          id="previous"
          aria-label="Zurück"
        >
        <iron-icon icon="chevron-left"></iron-icon>
        </vaadin-button>
        <slot name="actions"></slot>
        <vaadin-button
          class="kryptand-icon"
          @click="${this.increase}"
          id="after"
          aria-label="Weiter"
        >
          <iron-icon icon="chevron-right"></iron-icon>
        </vaadin-button>
    `;
  }
}
