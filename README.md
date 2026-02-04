<h1 align="center">
  <br>
  <img src="https://github.com/Reagan1947/Ordinary/blob/main/src/img/ordinary-theme-icon.jpg?raw=true" alt="The Ordinary" width="100">
  <br>
 Ordinary
  <br>
</h1>

<h4 align="center" font-weight:bold;">CNblog blog template theme.</h4>
<p align="center">
<img src="https://img.shields.io/badge/License-MIT-%23373737">
<img src="https://img.shields.io/badge/Frame-Tona-lightgrey">
<img src="https://img.shields.io/badge/Dependency-VITE-lightgrey">
</p>


## 1.1 CNBlog Custom Theme Ordinary

This is a CNblog blog template theme built on [Tona](https://github.com/guangzan/tona).

## 1.2 Quick Start

If you wish to customize or further develop your blog theme, please refer to the following steps:

### 1.2.1 Install Dependencies

```bash
pnpm install
```

### 1.2.2 Development Command

```bash
pnpm dev
```

### 1.2.3 Building Command

```bash
pnpm build
```

## 1.3 Project Struct

```
.
├── src/
│   ├── main.js      # Theme Entry File
│   └── style.css    # Style File
├── vite.config.mjs  # Vite Configration File
└── package.json     # Project Settings
```

## 1.4 Development Guide

### 1.4.1 Create Plugin

In `src/main.js`, you can register plugins using `createTheme().use()`:

```javascript
import { createTheme } from 'tona'
import './style.css'

function myPlugin() {
  // The logic of your plud
}

createTheme().use(myPlugin)
```

### 1.4.2 Writing CSS Styles

Write your theme styles in `src/style.css`.

## 1.5 More information and how to use the theme

- [Tona Document](https://github.com/guangzan/tona)
- [Vite Document](https://vitejs.dev/)

## 1.6 LICENSE

This content is distributed under the MIT license. 
