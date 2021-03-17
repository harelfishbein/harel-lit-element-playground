import {LitElement, customElement, property, html} from 'lit-element';
import { Repeater } from "@repeaterjs/repeater";

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property()
  public time = Date().now
  
  constructor () {
    super();
    let timer = (async function* () {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield true;
      }
    })()
    const ticker = async () => { for await (const tick of timer) { this.time = Date.now() } };
    ticker();
  }
  
  render = () => html`<div><p>Hello, World!<br>The time is ${Date(this.time)}</p></div>`;
}
