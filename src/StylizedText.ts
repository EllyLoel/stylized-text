import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.77/dist/components/tooltip/tooltip.js';

export class StylizedText extends LitElement {
  static styles = css`
    .text {
      display: var(--stylized-text-display, inline-block);
      text-decoration: var(--stylized-text-underline, dotted underline);
      text-decoration-color: var(
        --stylized-text-underline-color,
        hsl(0deg 0% 0% / 1)
      );
      transition-property: var(
        --stylized-text-transition-property,
        text-decoration
      );
      transition-duration: var(--stylized-text-transition-duration, 300ms);
      transition-timing-function: var(
        --stylized-text-transition-timing-function,
        ease
      );
      transition-delay: var(--stylized-text-transition-delay, 0s);
    }

    .text:is(:hover, :focus) {
      text-decoration-color: var(
        --stylized-text-hover-underline-color,
        hsl(0deg 0% 0% / 0)
      );
      transition-property: var(
        --stylized-text-hover-transition-property,
        text-decoration
      );
      transition-duration: var(
        --stylized-text-hover-transition-duration,
        300ms
      );
      transition-timing-function: var(
        --stylized-text-hover-transition-timing-function,
        ease
      );
      transition-delay: var(--stylized-text-hover-transition-delay, 0s);
    }

    @media (prefers-color-scheme: dark) {
      .text {
        text-decoration-color: var(
          --stylized-text-underline-color,
          hsl(0deg 0% 100% / 1)
        );
      }

      .text:is(:hover, :focus) {
        text-decoration-color: var(
          --stylized-text-hover-underline-color,
          hsl(0deg 0% 100% / 0)
        );
      }
    }

    .visually-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  `;

  @property({ type: String }) label!: string;

  render() {
    return html`
      <link
        rel="stylesheet"
        media="(prefers-color-scheme: light)"
        href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.77/dist/themes/light.css"
      />
      <link
        rel="stylesheet"
        media="(prefers-color-scheme: dark)"
        href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.77/dist/themes/dark.css"
      />
      <sl-tooltip part="tooltip" content="${this.label}">
        <span tabindex="0">
          <span part="text" class="text" aria-hidden="true">
            <slot></slot>
          </span>
        </span>
      </sl-tooltip>
      <span class="visually-hidden">${this.label}</span>
    `;
  }
}
