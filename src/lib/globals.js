/*
 * globals.js — runtime bootstrap shared by every page.
 *
 * The Tako pages were authored as classic in-browser-Babel scripts that read
 * `React`, `ReactDOM`, and `lucide` off the global `window` and share helper
 * components through `Object.assign(window, ...)`. To compile that ahead of
 * time with Vite (no in-browser Babel) while changing none of the page logic,
 * we re-expose those same globals here. This module is imported first by every
 * page entry, so the assignments below run before shared.jsx / the page code.
 *
 * The site-wide stylesheets are imported here too so all pages get them.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createIcons } from 'lucide';
import { icons } from './icons.js';

import '../styles/colors_and_type.css';
import '../styles/site.css';

// Single React instance, shared by all page modules via the global the JSX
// already references.
window.React = React;
window.ReactDOM = { createRoot };

// The pages call `window.lucide.createIcons()` with no arguments and expect it
// to swap every `[data-lucide]` element on the page for an SVG. The vanilla
// `lucide` npm package needs the icon set passed in, so wrap it with the full
// set to reproduce the UMD build's zero-arg behaviour.
window.lucide = {
  createIcons: (opts = {}) => createIcons({ icons, ...opts }),
  icons,
};
