# CNBlog Custom Theme Ordinary

This is a CNblog blog template theme built on [Tona](https://github.com/guangzan/tona).

## Quick Start

If you wish to customize or further develop your blog theme, please refer to the following steps:

### Install Dependencies

```bash
pnpm install
```

### Development Command

```bash
pnpm dev
```

### Building Command

```bash
pnpm build
```

## Project Struct

```
.
├── src/
│   ├── main.js      # Theme Entry File
│   └── style.css    # Style File
├── vite.config.mjs  # Vite Configration File
└── package.json     # Project Settings
```

## Development Guide

### Create Plugin

In `src/main.js`, you can register plugins using `createTheme().use()`:

```javascript
import { createTheme } from 'tona'
import './style.css'

function myPlugin() {
  // The logic of your plud
}

createTheme().use(myPlugin)
```

### Writing CSS Styles

Write your theme styles in `src/style.css`.

## More information and how to use the theme

- [Tona Document](https://github.com/guangzan/tona)
- [Vite Document](https://vitejs.dev/)

