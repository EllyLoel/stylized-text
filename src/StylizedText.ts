import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '@spectrum-web-components/overlay/overlay-trigger.js';
import '@spectrum-web-components/tooltip/sp-tooltip.js';

export class StylizedText extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .visually-hidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: auto;
      margin: 0;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      white-space: nowrap;
    }
  `;

  @property({ type: String }) label!: string;

  render() {
    return html`
      <overlay-trigger aria-hidden="true">
        <span part="text" slot="trigger" tabindex="0">
          <slot></slot>
        </span>
        <sp-tooltip
          slot="hover-content"
          style="--spectrum-tooltip-neutral-background-color: #eee; --spectrum-tooltip-neutral-padding-x: 0.5em; --spectrum-tooltip-neutral-padding-y: 0.5em; --spectrum-tooltip-neutral-border-radius: 0.125em;"
          >${this.label}</sp-tooltip
        >
      </overlay-trigger>
      <span role="text" class="visually-hidden">${this.label}</span>
    `;
  }
}
