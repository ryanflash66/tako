/*
 * leaflet-global.js — exposes Leaflet as the global `L` for the home hero map.
 *
 * home.jsx builds the live Douala map with bare `L.map(...)` calls, mirroring
 * the original CDN `leaflet.js` UMD global. Only the home page needs this, so
 * it is imported solely by the home entry (kept out of the shared bundle).
 */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

window.L = L;
