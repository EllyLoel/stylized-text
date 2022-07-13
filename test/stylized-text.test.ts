import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { StylizedText } from '../src/StylizedText.js';
import '../src/stylized-text.js';

describe('StylizedText', () => {
  it('has no default label or slotted content', async () => {
    const el = await fixture<StylizedText>(
      html`<stylized-text></stylized-text>`
    );

    expect(el.label).to.be.undefined;
    expect(el).lightDom.to.empty;
  });

  it('can add the label via attribute and slotted content via default slot', async () => {
    const el = await fixture<StylizedText>(
      html`<stylized-text label="Elly">&lt;e//y&gt;</stylized-text>`
    );

    expect(el.getAttribute('label')).to.equal('Elly');
    expect(el).lightDom.to.equal('&lt;e//y&gt;');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<StylizedText>(
      html`<stylized-text label="Elly">&lt;e//y&gt;</stylized-text>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
