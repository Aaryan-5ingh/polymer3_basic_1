import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
	@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');

        :host {
          font-family: 'Neonderthaw', "Times New Roman";
        }
      </style>
      
      <h3>Hello world</h3> <icon-toggle toggle-icon="menu"></icon-toggle>
	<icon-toggle toggle-icon="star"></icon-toggle>
	
    `;
  }
  _message(fav) {
    if (fav) {
      return 'You really like me!';
    } 
    else {
      return 'Do you like me?';
    }
  }
}
customElements.define('demo-element', DemoElement);
