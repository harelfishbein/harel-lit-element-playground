import {LitElement, customElement, html} from 'lit-element';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  render = () => html`<div><p>Hello, World!</p></div>`
}
