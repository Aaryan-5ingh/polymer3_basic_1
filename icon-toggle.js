import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
	:host{
	iron-icon{fill:rgba(220,40,3,0.33);} :host([pressed]) iron-icon{fill:curentcolor;}
       </style>
	<iron-icon icon="[[toggleIcon]]" pressed></iron-icon>
    `;
  }

	static get properties(){return ({toggleIcon:{type:String}});}

  constructor() {
    super();
  }

	
}

customElements.define('icon-toggle', IconToggle);
