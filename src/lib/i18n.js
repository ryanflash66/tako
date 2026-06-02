/*
 * i18n.js — tiny client-side language helper for the shared site chrome.
 *
 * The site is browser-only (no SSR), so the active language lives in
 * localStorage under `tako_lang` ('en' | 'fr', default 'en'). `t(en, fr)`
 * returns the right string for the current language; `setLang` persists the
 * choice and reloads so every page re-renders its chrome in the new language.
 *
 * Scope: this powers the EN/FR toggle for the shared shell (nav, footer,
 * download band, account menu). Page bodies are not translated.
 */
export function getLang() {
  try {
    const l = localStorage.getItem('tako_lang');
    return l === 'fr' ? 'fr' : 'en';
  } catch (e) {
    return 'en';
  }
}

export function t(en, fr) {
  return getLang() === 'fr' ? fr : en;
}

export function setLang(l) {
  try {
    localStorage.setItem('tako_lang', l === 'fr' ? 'fr' : 'en');
  } catch (e) {}
  window.location.reload();
}

// Expose for any inline/global use, mirroring the site's window-global pattern.
if (typeof window !== 'undefined') {
  window.t = t;
  window.takoLang = getLang();
}
