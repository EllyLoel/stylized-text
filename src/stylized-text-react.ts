import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { StylizedText as StylizedTextClass } from './StylizedText.js';

export const StylizedText = createComponent(
  React,
  'stylized-text',
  StylizedTextClass
);
