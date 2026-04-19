import { consume } from '@lit/context';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './child-element.scss?inline';
import { consoleLoggerContext, loggerContext } from './logger.context';
import { flatten } from './flatten/flatten';

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

  firstUpdated() {
    console.log("++", flatten([1, [3,4]]));
    console.log("++", flatten([]));
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
