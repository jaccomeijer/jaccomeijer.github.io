# jaccomeijer.github.io

Public website. The `/docs` folder is published to <https://jaccomeijer.github.io>

## NPM scripts

Update design tokens:

```bash
npm run design-tokens-lib
npm run design-tokens-ref
npm run design-tokens-site
```

Start live reloading web server with stories:

```bash
npm run dev
```

Build a new static site to the root dist folder:

```bash
npm run build
```

## Project methodology

The project methodology is simple and defines three concepts:

- Utilities
- Structures
- Components

### Utilities

- CSS classes
- Prefixed with `u-`
- Set something, e.g. a font size or a custom property value
- Examples: u-font-size-xl, u-gap-xs, u-primary-color-300

### Structures

- CSS classes
- Prefixed with `s-`
- Consume utilities
- Provide structure
- Examples: s-grid, s-wrapper

### Components

- Provide HTML + styling for a specific conceptual context
- Do not have a prefix
- CSS rules start with component class `.component-class`
- Internal elements, like a button, are also handled as a component
- Examples: card, action, picture, navigation-header, etc.

## Typical CSS layer order

```css
@layer reset, body, font, highlight, markdown, structures, components, ce, utilities, custom;
```

## Type and space scales

Font and space scales in the design tokens are generated with https://utopia.fyi.

## Design tokens

- https://www.w3.org/community/design-tokens/
- https://tr.designtokens.org/format/
- https://github.com/Heydon/design-tokens-cli


## Tracking

- https://beamanalytics.io
