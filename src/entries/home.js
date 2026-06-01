// Home page entry. Order matters: globals (React/lucide) and Leaflet must be on
// `window` before shared.jsx / the page modules evaluate and mount.
import '../lib/globals.js';
import '../lib/leaflet-global.js';
import '../pages/shared.jsx';
import '../pages/home-account.jsx';
import '../pages/home.jsx';
