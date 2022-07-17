import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.77/dist/components/tooltip/tooltip.js';

export class StylizedText extends LitElement {
  static styles = css`
    span {
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

    span:is(:hover, :focus) {
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
      span {
        text-decoration-color: var(
          --stylized-text-underline-color,
          hsl(0deg 0% 100% / 1)
        );
      }

      span:is(:hover, :focus) {
        text-decoration-color: var(
          --stylized-text-hover-underline-color,
          hsl(0deg 0% 100% / 0)
        );
      }
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
      <sl-tooltip part="tooltip" content="${this.label}" hoist="true">
        <span part="text" aria-label="${this.label}">
          <slot aria-hidden="true"></slot>
        </span>
      </sl-tooltip>
    `;
  }
}
