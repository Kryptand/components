var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from "lit-element";
import "@polymer/iron-icons/iron-icons";
import "@polymer/iron-icon/iron-icon";
let NotFoundComponent = class NotFoundComponent extends LitElement {
    render() {
        return html `
      <h1>Page not found</h1>
      The pathname was: ${window.location.pathname}
    `;
    }
};
NotFoundComponent.styles = css `
    :host {
      width: var(--calrum-navbar-width);
      height: var(--calrum-navbar-height);
      background-color: var(--calrum-on-background);
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
    .navbar-icon {
      width: 100%;
      height: auto;
      max-width: 70px;
      color: var(--calrum-primary-contrast);
    }
  `;
NotFoundComponent = __decorate([
    customElement("calrum-not-found")
], NotFoundComponent);
export { NotFoundComponent };
