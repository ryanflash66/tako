/* Tako website — shared shell: atoms, Nav, Footer, motifs. Exported to window. */
import { t, getLang, setLang } from '../lib/i18n.js';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%' };

const NAV_LINKS = [
  { label: 'Ride', fr: 'Course', href: 'ride.html' },
  { label: 'Drive', fr: 'Conduire', href: 'drive.html' },
  { label: 'Cities', fr: 'Villes', href: 'cities.html' },
  { label: 'Business', fr: 'Entreprise', href: 'business.html' },
  { label: 'Safety', fr: 'Sécurité', href: 'safety.html' },
];

function useIcons() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

// Reveal-on-scroll wrapper
function Reveal({ children, delay = 0, style = {}, as = 'div', className = '' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), delay); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} style={style}>{children}</Tag>;
}

function SectionHead({ over, title, sub, dark = false, center = false, style = {} }) {
  return (
    <div style={{ marginBottom: 44, maxWidth: center ? 680 : 740, marginInline: center ? 'auto' : 0, textAlign: center ? 'center' : 'left', ...style }}>
      {over && <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 16 }}>{over}</div>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.6vw,46px)', letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0, color: dark ? '#fff' : 'var(--tako-black)' }}>{title}</h2>
      {sub && <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: dark ? 'var(--gray-400)' : 'var(--fg-2)', margin: '16px 0 0', lineHeight: 1.5 }}>{sub}</p>}
    </div>
  );
}

// FCFA formatting + deterministic pseudo-distance
function fmt(n) { return Math.round(n).toLocaleString('fr-FR').replace(/[\u202f,]/g, ' '); }
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; } return h; }

function SiteLogo({ dark = false, size = 34, href = 'index.html' }) {
  return (
    <a href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <img src="assets/tako-mark.png" alt="Tako" style={{ height: size, width: size, objectFit: 'contain' }} />
      <span className="notranslate" translate="no" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size * 0.62,
        letterSpacing: '-0.02em', color: dark ? '#fff' : 'var(--tako-black)' }}>Tako</span>
    </a>
  );
}

function SIcon({ name, size = 24, color, style = {} }) {
  return <i data-lucide={name} width={size} height={size}
    style={{ display: 'inline-flex', width: size, height: size, color: color || 'currentColor', flexShrink: 0, ...style }} />;
}

function SBtn({ children, variant = 'primary', icon, iconLeft, onClick, href, style = {}, size = 'md' }) {
  const v = {
    primary: { background: 'var(--tako-black)', color: '#fff' },
    amber: { backgroundColor: 'var(--tako-amber)', color: 'var(--tako-black)' },
    light: { background: '#fff', color: 'var(--tako-black)' },
    outline: { background: 'transparent', color: 'var(--tako-black)', border: '2px solid var(--tako-black)', padding: '12px 22px' },
    outlineLight: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.35)', padding: '12px 22px' },
    ghost: { background: 'transparent', color: 'var(--tako-black)', padding: '10px 14px' },
  }[variant];
  const sizeStyle = size === 'lg' ? { fontSize: 17, padding: '16px 28px' } : size === 'sm' ? { fontSize: 14, padding: '10px 16px' } : {};
  const Tag = href ? 'a' : 'button';
  return (
    <Tag onClick={onClick} href={href} className={`sbtn v-${variant}`}
      style={{ textDecoration: 'none', ...sizeStyle, ...v, ...style }}>
      {iconLeft && <SIcon name={iconLeft} size={18} />}
      {children}
      {icon && <SIcon name={icon} size={18} />}
    </Tag>
  );
}

// Apple wordmark glyph (the real Apple logo, not the fruit icon)
function AppleLogo({ size = 26, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true" style={{ display: 'block' }}>
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.953 4.45z" />
    </svg>
  );
}

// Static twin amber lane-line graphic motif
function LaneMotif({ style = {}, opacity = 0.9 }) {
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }}>
      <g stroke="var(--tako-amber)" strokeWidth="2.5" opacity={opacity}>
        <line x1="-40" y1="440" x2="280" y2="-40" />
        <line x1="0" y1="460" x2="320" y2="-20" />
      </g>
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="36">
        <line x1="180" y1="480" x2="520" y2="40" />
      </g>
      <g stroke="var(--tako-amber)" strokeWidth="2.5">
        <line x1="170" y1="486" x2="510" y2="46" />
        <line x1="206" y1="500" x2="546" y2="60" />
      </g>
    </svg>
  );
}

// Animated dashed lane lines moving along a diagonal (for dark hero panels)
function AnimatedLanes({ style = {} }) {
  return (
    <svg viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }}>
      <g stroke="rgba(255,255,255,0.07)" strokeWidth="64">
        <line x1="120" y1="560" x2="560" y2="-60" />
      </g>
      <line x1="120" y1="560" x2="560" y2="-60" stroke="var(--tako-amber)" strokeWidth="3"
        strokeDasharray="26 22" style={{ animation: 'lane-dash 3s linear infinite' }} />
      <line x1="172" y1="560" x2="612" y2="-60" stroke="var(--tako-amber)" strokeWidth="3"
        strokeDasharray="26 22" style={{ animation: 'lane-dash 3s linear infinite' }} />
    </svg>
  );
}

function Nav({ active }) {
  const [open, setOpen] = React.useState(false);
  const [acct, setAcct] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const acctRef = React.useRef(null);
  React.useEffect(() => {
    try { const u = JSON.parse(localStorage.getItem('tako_user') || 'null'); if (u && u.first) setUser(u); } catch (e) {}
    const h = (e) => { if (acctRef.current && !acctRef.current.contains(e.target)) setAcct(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, []);
  const signOut = () => { try { localStorage.removeItem('tako_user'); } catch (e) {} window.location.reload(); };
  const menuItem = (icon, label, onClick) => (
    <button onClick={onClick} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', borderRadius: 9, border: 'none', cursor: 'pointer', background: 'transparent', textAlign: 'left', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, color: 'var(--fg-1)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
      <SIcon name={icon} size={18} color="var(--fg-2)" /> {label}
    </button>
  );
  return (
    <header className="nav-wrap">
      <div style={WRAP} className="stack-pad">
        <div className="nav-inner">
          <SiteLogo />
          <nav className="nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className={`nav-link ${active === l.href ? 'active' : ''}`}>{t(l.label, l.fr)}</a>
            ))}
          </nav>
          <div className="nav-right">
            <button onClick={() => setLang(getLang() === 'fr' ? 'en' : 'fr')} className="nav-link desktop-only notranslate"
              translate="no" aria-label="Switch language" title="English / Français"
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer' }}>
              <SIcon name="globe" size={18} /> {getLang().toUpperCase()}
            </button>
            <a href="help.html" className="nav-link desktop-only">{t('Help', 'Aide')}</a>
            {user ? (
              <div className="desktop-only" ref={acctRef} style={{ position: 'relative' }}>
                <button onClick={() => setAcct(a => !a)} style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--tako-black)', color: '#fff', border: 'none', borderRadius: 999, padding: '6px 12px 6px 6px', cursor: 'pointer' }}>
                  <span style={{ width: 30, height: 30, borderRadius: 999, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14 }}>{(user.first[0] || 'T').toUpperCase()}</span>
                  <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{user.first}</span>
                  <SIcon name="chevron-down" size={16} />
                </button>
                {acct && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, zIndex: 40, background: '#fff', borderRadius: 14, boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-1)', padding: 6, minWidth: 220, animation: 'float-up .16s cubic-bezier(.2,0,0,1)' }}>
                    <div style={{ padding: '10px 12px 12px', borderBottom: '1px solid var(--border-1)', marginBottom: 6 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{user.first} {user.last}</div>
                      <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.contact}</div>
                    </div>
                    {menuItem('user', t('Account', 'Compte'), () => { window.location.href = 'index.html'; })}
                    {menuItem('wallet', t('Wallet', 'Portefeuille'), () => { window.location.href = 'index.html'; })}
                    {menuItem('receipt', t('Receipts', 'Reçus'), () => { window.location.href = 'index.html'; })}
                    {menuItem('log-out', t('Sign out', 'Déconnexion'), signOut)}
                  </div>
                )}
              </div>
            ) : (
              <React.Fragment>
                <span className="desktop-only"><SBtn variant="ghost" href="auth.html" style={{ fontSize: 15 }}>{t('Log in', 'Connexion')}</SBtn></span>
                <span className="desktop-only"><SBtn variant="primary" href="auth.html" style={{ fontSize: 15, padding: '11px 20px' }}>{t('Sign up', "S'inscrire")}</SBtn></span>
              </React.Fragment>
            )}
            <button className="hamburger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
              <SIcon name={open ? 'x' : 'menu'} size={26} />
            </button>
          </div>
        </div>
        <div className="mobile-menu" style={{ display: open ? 'flex' : 'none' }}>
          {NAV_LINKS.map(l => <a key={l.href} href={l.href}>{t(l.label, l.fr)}</a>)}
          <a href="help.html">{t('Help', 'Aide')}</a>
          {user ? (
            <div style={{ display: 'flex', gap: 10, marginTop: 16, alignItems: 'center' }}>
              <span style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17 }}>{(user.first[0] || 'T').toUpperCase()}</span>
              <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{user.first} {user.last}</span>
              <SBtn variant="outline" onClick={signOut}>{t('Sign out', 'Déconnexion')}</SBtn>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <SBtn variant="outline" href="auth.html" style={{ flex: 1 }}>{t('Log in', 'Connexion')}</SBtn>
              <SBtn variant="primary" href="auth.html" style={{ flex: 1 }}>{t('Sign up', "S'inscrire")}</SBtn>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Shared dark "Get the app" band
function DownloadBand() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>
            {t('Get the Tako app', 'Téléchargez l’app Tako')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0 }}>
            {t('Free to download. Ready when you are.', 'Gratuit à télécharger. Prêt quand vous l’êtes.')}
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a className="store-btn" href="app.html" style={{ textDecoration: 'none' }}><AppleLogo size={24} /><div style={{ textAlign: 'left' }}><div style={{ fontSize: 11, color: 'var(--gray-400)' }}>{t('Download on the', 'Télécharger sur l’')}</div><div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)' }}>App Store</div></div></a>
          <a className="store-btn" href="app.html" style={{ textDecoration: 'none' }}><SIcon name="play" size={24} /><div style={{ textAlign: 'left' }}><div style={{ fontSize: 11, color: 'var(--gray-400)' }}>{t('Get it on', 'Disponible sur')}</div><div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)' }}>Google Play</div></div></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    [t('Ride', 'Course'), [['Reserve', 'reserve.html', 'Réserver'], ['Airport rides', 'airport.html', 'Trajets aéroport'], ['Cities', 'cities.html', 'Villes'], ['Safety', 'safety.html', 'Sécurité'], ['Tako Business', 'business.html', 'Tako Entreprise'], ['Help Centre', 'help.html', 'Centre d’aide']]],
    [t('Drive', 'Conduire'), [['Become a driver', 'drive.html', 'Devenir chauffeur'], ['Requirements', 'requirements.html', 'Conditions'], ['Driver app', 'driver-app.html', 'App chauffeur'], ['Earnings', 'earnings.html', 'Revenus']]],
    [t('Company', 'Entreprise'), [['About', 'about.html', 'À propos'], ['Careers', 'careers.html', 'Carrières'], ['Newsroom', 'newsroom.html', 'Actualités'], ['Contact', 'contact.html', 'Contact'], ['How it works', 'how-it-works.html', 'Comment ça marche'], ['Gift cards', 'gift-cards.html', 'Cartes cadeaux'], ['Sustainability', 'sustainability.html', 'Durabilité'], ['Press kit', 'press-kit.html', 'Kit presse']]],
    [t('Legal', 'Mentions légales'), [['Terms', 'terms.html', 'Conditions'], ['Privacy', 'privacy.html', 'Confidentialité'], ['Cookies', 'cookies.html', 'Cookies'], ['Accessibility', 'accessibility.html', 'Accessibilité']]],
  ];
  return (
    <footer style={{ background: 'var(--tako-black)', color: '#fff' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 40, paddingTop: 72, paddingBottom: 40 }} className="grid-4 stack-pad">
        <div>
          <SiteLogo dark />
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--gray-500)', margin: '16px 0 20px', maxWidth: 250, lineHeight: 1.5 }}>
            {t('Convenient rides across Cameroon, every day. From Douala traffic to rural roads.', 'Des trajets pratiques partout au Cameroun, chaque jour. Du trafic de Douala aux routes rurales.')}
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['App Store', 'Google Play'].map(s => (
              <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)', border: '1px solid var(--gray-700)', borderRadius: 999, padding: '5px 12px' }}>{s}</span>
            ))}
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 16 }}>{h}</div>
            {items.map(([it, href, fr]) => <a key={it} href={href} style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 500, fontSize: 15, color: 'var(--gray-200)', textDecoration: 'none', marginBottom: 12, width: 'fit-content' }} className="link-amber">{t(it, fr)}</a>)}
          </div>
        ))}
      </div>
      <div style={{ ...WRAP, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--tako-charcoal)', paddingTop: 24, paddingBottom: 40, flexWrap: 'wrap', gap: 16 }} className="stack-pad">
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--gray-500)' }}>© 2026 Tako Mobility. Douala, Cameroon.</span>
        <div style={{ display: 'flex', gap: 18 }}>
          {[['instagram', 'https://instagram.com/takomobility'], ['facebook', 'https://facebook.com/takomobility'], ['twitter', 'https://twitter.com/takomobility'], ['linkedin', 'https://linkedin.com/company/tako-mobility']].map(([s, url]) => (
            <a key={s} href={url} target="_blank" rel="noopener" style={{ color: 'var(--gray-500)' }} className="link-amber"><SIcon name={s} size={20} /></a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Faux-QR code: deterministic module grid + 3 finder patterns + centered Tako mark.
// Decorative (not scannable) — for app-download and QR-login mockups.
function QRCode({ value = 'tako', size = 180, fg = 'var(--tako-black)', bg = '#fff', logo = true }) {
  const n = 25;
  const cells = React.useMemo(() => {
    let s = Math.abs(hash(value)) || 7;
    const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return (s >>> 9) / 4194304; };
    const g = [];
    for (let y = 0; y < n; y++) { const row = []; for (let x = 0; x < n; x++) row.push(rnd() > 0.5); g.push(row); }
    return g;
  }, [value]);
  const cell = size / n;
  const c = (n - 1) / 2;
  const inFinder = (x, y) => (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
  const inLogo = (x, y) => logo && Math.abs(x - c) <= 3 && Math.abs(y - c) <= 3;
  const rects = [];
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    if (inFinder(x, y) || inLogo(x, y)) continue;
    if (cells[y][x]) rects.push(<rect key={x + '_' + y} x={(x * cell).toFixed(2)} y={(y * cell).toFixed(2)} width={Math.ceil(cell)} height={Math.ceil(cell)} fill={fg} />);
  }
  const finder = (ox, oy) => (
    <g key={'f' + ox + '_' + oy}>
      <rect x={ox * cell} y={oy * cell} width={7 * cell} height={7 * cell} rx={cell * 0.8} fill={fg} />
      <rect x={(ox + 1) * cell} y={(oy + 1) * cell} width={5 * cell} height={5 * cell} rx={cell * 0.6} fill={bg} />
      <rect x={(ox + 2) * cell} y={(oy + 2) * cell} width={3 * cell} height={3 * cell} rx={cell * 0.4} fill={fg} />
    </g>
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', borderRadius: 8 }} aria-hidden="true">
      <rect width={size} height={size} fill={bg} />
      {rects}
      {finder(0, 0)}{finder(n - 7, 0)}{finder(0, n - 7)}
      {logo && (
        <g>
          <rect x={(c - 3.4) * cell} y={(c - 3.4) * cell} width={6.8 * cell} height={6.8 * cell} rx={cell * 1.4} fill={bg} />
          <image href="assets/tako-mark.png" x={(c - 2.4) * cell} y={(c - 2.4) * cell} width={4.8 * cell} height={4.8 * cell} />
        </g>
      )}
    </svg>
  );
}

Object.assign(window, { WRAP, NAV_LINKS, useIcons, Reveal, SectionHead, fmt, hash, SiteLogo, SIcon, SBtn, AppleLogo, QRCode, LaneMotif, AnimatedLanes, Nav, DownloadBand, Footer });
