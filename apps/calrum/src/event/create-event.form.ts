import {
  customElement,
  LitElement,
  css,
  property,
  TemplateResult,
  html,
  eventOptions
} from "lit-element";
import { connect } from "pwa-helpers/connect-mixin";
import { store } from "../+state/store";
import { DateEvent, DateIdentifier } from "./../models/event";
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-form-layout';
import { Guid } from '../models/guid';
@customElement("calrum-event-form")
export class CalrumRootComponent extends connect(store)(LitElement) {
  @property({ type: String }) date=new Date().toISOString().substring(0, 10);
  @property({type:String}) label='';

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor(){
    super();
    console.debug(this.date);
  }
  @eventOptions({ capture: false, passive: true })
  private dateChanged(e: any) {
    this.date =e.target.value;
  }
  @eventOptions({ capture: false, passive: true })
  private labelChanged(e: any) {
    this.label = e.target.value;
  }
  protected render(): TemplateResult {
    return html`
    ${this.date}
      <vaadin-form-layout>
        <vaadin-date-picker
          @change="${this.dateChanged}"
          label="Datum"
          value="${this.date}"
        ></vaadin-date-picker>
        <vaadin-text-field
          @change="${this.labelChanged}"
          label="Ereignis"
          value="${this.label ? this.label : ""}"
        ></vaadin-text-field>
        <vaadin-button @click=${() => this.submitEvent()}
          >Speichern</vaadin-button
        >
      </vaadin-form-layout>
    `;
  }
  submitEvent() {
      const dateEvent={id:new Guid().toString(),dateId:new DateIdentifier(new Date(this.date),"day").identifier as number,date:new Date(this.date),label:this.label}
      console.debug(dateEvent);
      this.dispatchEvent(
      new CustomEvent<DateEvent>("submitEvent", { detail: dateEvent })
    );
    this.resetForm();
  }

  private resetForm() {
    this.date = '';
    this.label = '';
  }
}
