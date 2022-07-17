# \<stylized-text>

A Web Component that makes stylised text a less horrible experience for screenreader users and anyone who is confused by what the text says.
So you can make accessible l33t text or other decorated text like \<e//y>.

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
yarn add stylized-text
# or
npm install stylized-text
```

## Usage

```html
<script type="module">
  import 'stylized-text/stylized-text.js';
</script>
<!-- Make sure you switch out the label and stylized text for your own -->
<stylized-text label="Elly">&lt;e//y&gt;</stylized-text>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
yarn lint
# or
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
yarn format
# or
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
yarn test
# or
npm run test
```

To run the tests in interactive watch mode run:

```bash
yarn test:watch
# or
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
yarn storybook
# or
npm run storybook
```

To build a production version of Storybook, run

```bash
yarn storybook:build
# or
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
yarn start
# or
npm run start
```

To run a local development server that serves the basic demo located in `demo/index.html`
