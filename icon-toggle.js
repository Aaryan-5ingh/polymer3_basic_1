import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
	:host{display:grid; grid-template-columns:repeat(3,1fr); grid-gap:4px 8px;}
	iron-icon{fill:rgba(220,4,3,0.33);} :host([pressed]) iron-icon{fill:curentcolor;}
       </style>
	<p>The iron-icon element renders the icon specified by its icon attribute.Here, iron-icon is hard-coded to use an icon named polymer.</p>
	<p>Ludwig van Beethoven said, <q>Music should strike fire from the heart of a man, and bring tears from the eyes of a woman. Don't only practice your art, but force your way into its secrets. Art deserves that. </q></p>
      <span>hi!<hr /> <iron-icon icon="polymer"></iron-icon></span>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define('icon-toggle', IconToggle);
