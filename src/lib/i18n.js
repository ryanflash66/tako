/*
 * i18n.js — real EN/FR translation via the free Google Website Translator widget.
 *
 * No API key, no build step: the widget machine-translates the whole rendered
 * page (chrome AND body). The active language lives in the `googtrans` cookie
 * the widget reads on load; `setLang` writes it and reloads so Google applies
 * the translation to everything. Source copy stays English — `t()` is now a
 * pass-through kept so existing `t(en, fr)` call sites still compile.
 */

const SUPPORTED = ['en', 'fr'];

export function getLang() {
  if (typeof document === 'undefined') return 'en';
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[a-z-]+\/([a-z-]+)/);
  return m && m[1] === 'fr' ? 'fr' : 'en';
}

function writeCookie(value) {
  // Path-only cookie works everywhere (incl. localhost); also set domain-scoped
  // variants so the widget picks it up on the apex + any subdomain in prod.
  document.cookie = 'googtrans=' + value + ';path=/';
  const host = location.hostname;
  if (host && host !== 'localhost' && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    const parts = host.split('.');
    const apex = parts.length > 2 ? '.' + parts.slice(-2).join('.') : '.' + host;
    document.cookie = 'googtrans=' + value + ';path=/;domain=' + apex;
    document.cookie = 'googtrans=' + value + ';path=/;domain=' + host;
  }
}

export function setLang(l) {
  const lang = SUPPORTED.includes(l) ? l : 'en';
  writeCookie('/en/' + lang);
  window.location.reload();
}

// Google translates the rendered DOM, so source strings stay English.
export function t(en) {
  return en;
}

// Inject the Google Website Translator once per page. The widget reads the
// googtrans cookie and translates on load (autoDisplay off → no language menu;
// the toggle in the nav drives it instead). Its banner is hidden via site.css.
function loadGoogleTranslate() {
  if (typeof document === 'undefined' || document.getElementById('google_translate_element')) return;
  const host = document.createElement('div');
  host.id = 'google_translate_element';
  host.className = 'notranslate';
  host.setAttribute('aria-hidden', 'true');
  host.style.display = 'none';
  document.body.appendChild(host);

  window.googleTranslateElementInit = function () {
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,fr', autoDisplay: false },
        'google_translate_element',
      );
    }
  };

  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.head.appendChild(s);
}

if (typeof window !== 'undefined') {
  window.t = t;
  window.takoLang = getLang();
  if (document.body) loadGoogleTranslate();
  else document.addEventListener('DOMContentLoaded', loadGoogleTranslate);
}
