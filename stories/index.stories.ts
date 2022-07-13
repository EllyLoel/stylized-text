import { html, TemplateResult } from 'lit';
import '../src/stylized-text.js';

export default {
  title: 'StylizedText',
  component: 'stylized-text',
  argTypes: {
    label: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string;
  slot: TemplateResult;
}

const Template: Story<ArgTypes> = ({ label, slot }: ArgTypes) => html`
  <stylized-text label=${label}>${slot}</stylized-text>
`;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Elly',
  slot: html`&lt;e//y&gt;`,
};

export const Empty = Template.bind({});
