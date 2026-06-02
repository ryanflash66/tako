import { defineConfig } from 'vite';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readdirSync } from 'node:fs';

// Every root-level *.html is a page entry, so new pages are picked up
// automatically without editing this config.
const htmlInputs = Object.fromEntries(
  readdirSync('.')
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace(/\.html$/, ''), f]),
);

// The Tako pages were authored as classic in-browser-Babel scripts: they read
// `React` / `ReactDOM` / `lucide` / `L` off `window` and share components via
// `Object.assign(window, ...)`. We compile them ahead of time with Vite while
// keeping that model intact:
//   - the classic JSX transform emits `React.createElement` referencing the
//     global React that src/lib/globals.js puts on `window`;
//   - each page is its own HTML entry (a genuine multi-page site, like the
//     original separate .html files).
export default defineConfig({
  // Keep Vite's dependency-optimizer cache OFF the project tree. This repo lives
  // under a Dropbox-synced folder; Dropbox re-touches files in node_modules/.vite
  // out from under the dev server, which invalidates the optimized-dep hashes and
  // makes `npm run dev` serve stale 504s. A cache dir in the OS temp is stable.
  cacheDir: join(tmpdir(), 'tako-website-vite'),
  // Pre-declare the bundled runtime deps so they're optimized once at startup
  // rather than discovered (and re-optimized) mid-session.
  optimizeDeps: {
    include: ['react', 'react-dom/client', 'leaflet', 'lucide'],
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      input: htmlInputs,
    },
  },
});
