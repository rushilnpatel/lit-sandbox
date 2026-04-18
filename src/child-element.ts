import { consume } from '@lit/context';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './child-element.scss?inline';
import { consoleLoggerContext, loggerContext } from './logger.context';

@customElement('child-element')
export class ChildElement extends LitElement {
  static styles = unsafeCSS(styles);

  // Data flowing down: parent → child
  @consume({context: loggerContext, subscribe: true})
  @state()
  messageFromParent: string;

  @consume({context: consoleLoggerContext, subscribe: true})
  @state()
  consoleData;
  

  onbuttonClick = () => {
    this.consoleData.setValue(`beacon: ${this.messageFromParent}`)
  }


  render() {
    return html`
      <h3>Child Component</h3>
      <p>Message from parent: <strong>${this.messageFromParent}</strong></p>
      <button @click=${this.onbuttonClick}>Submit it back</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'child-element': ChildElement;
  }
}
