import { LitElement, html, unsafeCSS } from 'lit';
import styles from './parent-element.scss?inline';
import { customElement, property, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { consoleLoggerContext, loggerContext } from './logger.context';

@customElement('parent-element')
export class ParentElement extends LitElement {
  static styles = unsafeCSS(styles);

  @provide({context: loggerContext})
  @state()
  myData = 'Default';

  @provide({context:  consoleLoggerContext})
  @state()
  consoleData: consoleLoggerContext = {
    value: '',
    setValue: (v: string) => {
      this.consoleData = {
        ...this.consoleData, value: v
      }
    }
  };

  @property({type: Number, reflect: true}) numVal = undefined;
  


  onsubmit = () => {
    const inputEl = (this.shadowRoot.getElementById(`input-el`) as HTMLInputElement).value;
    console.log("++", this.myData);
    this.myData = inputEl;
    this.consoleData = { ...this.consoleData, value: inputEl };
  };

  render() {
    return html`
      <h2>Parent Component</h2>
      ${this.numVal}
      <input id="input-el" />
      <button @click=${this.onsubmit}>Submit</button>
      <p>Received from child: <strong>${this.consoleData.value || '(none yet)'}</strong></p>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'parent-element': ParentElement;
  }
}
