/*
 * i18n.js — hand-written EN/FR localisation for the Tako site.
 *
 * The active language persists in localStorage under `tako_lang` ('en' | 'fr',
 * default 'en'). `t(en, fr)` returns the right string for the current language;
 * the nav toggle calls `setLang`, which stores the choice and reloads so every
 * page re-renders in the chosen language. Source strings are wrapped at the
 * call site with their French translation — no third-party widget, no network.
 */
const SUPPORTED = ['en', 'fr'];

export function getLang() {
  try {
    return localStorage.getItem('tako_lang') === 'fr' ? 'fr' : 'en';
  } catch (e) {
    return 'en';
  }
}

export function t(en, fr) {
  return getLang() === 'fr' && fr != null ? fr : en;
}

export function setLang(l) {
  try {
    localStorage.setItem('tako_lang', SUPPORTED.includes(l) ? l : 'en');
  } catch (e) {}
  window.location.reload();
}

if (typeof window !== 'undefined') {
  window.t = t;
  window.takoLang = getLang();
  try {
    document.documentElement.lang = getLang();
  } catch (e) {}
}
