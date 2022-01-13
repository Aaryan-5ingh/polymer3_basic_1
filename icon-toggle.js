import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        span {
          color: blue;
        }
        :host {
          display: inline-block;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <span>hi!<hr /> <iron-icon icon="polymer"></iron-icon></span>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define('icon-toggle', IconToggle);
