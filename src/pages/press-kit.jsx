/* Tako — Press & media kit page */
import { t as tr } from '../lib/i18n.js';

const ASSETS = [
  { icon: 'square', name: tr('Tako app mark', 'Symbole de l’app Tako'), meta: tr('PNG · transparent · 512px', 'PNG · transparent · 512 px'), href: 'assets/tako-mark.png', ready: true },
  { icon: 'tag', name: tr('Tako full logo', 'Logo complet Tako'), meta: tr('PNG · mark + wordmark', 'PNG · symbole + logotype'), href: 'assets/tako-logo-full.png', ready: true },
  { icon: 'text', name: tr('Wordmark (SVG)', 'Logotype (SVG)'), meta: tr('Vector · light & dark', 'Vectoriel · clair & foncé'), href: '#', ready: false },
  { icon: 'smartphone', name: tr('App screenshots', 'Captures de l’app'), meta: tr('PNG pack · iOS & Android', 'Pack PNG · iOS & Android'), href: '#', ready: false },
  { icon: 'circle-dot', name: tr('Brand colours & type', 'Couleurs & typographie'), meta: tr('Amber #F7951D · tokens', 'Ambre #F7951D · jetons'), href: '#', ready: false },
  { icon: 'file-text', name: tr('Company fact sheet', 'Fiche d’information'), meta: tr('PDF · one page', 'PDF · une page'), href: '#', ready: false },
];

const FACTS = [
  [tr('Founded', 'Fondée en'), '2024'],
  [tr('Headquarters', 'Siège social'), tr('Douala, Cameroon', 'Douala, Cameroun')],
  [tr('Cities served', 'Villes desservies'), tr('11 across Cameroon', '11 à travers le Cameroun')],
  [tr('Active drivers', 'Chauffeurs actifs'), '8,000+'],
  [tr('Payments', 'Paiements'), tr('Cash & Mobile Money', 'Espèces & Mobile Money')],
  [tr('Media contact', 'Contact presse'), 'press@tako.cm'],
];

function PressHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 56, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Press', 'Presse')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.8vw,60px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Tako press kit.', 'Kit presse Tako.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0' }}>
          {tr('Everything you need to tell the Tako story — brand assets, the facts and a direct line to our team. For the latest announcements, visit our', 'Tout ce qu’il vous faut pour raconter l’histoire de Tako — éléments de marque, faits clés et une ligne directe vers notre équipe. Pour les dernières annonces, consultez nos')} <a href="newsroom.html" className="link-amber">{tr('newsroom', 'actualités')}</a>.
        </p>
      </div>
    </section>
  );
}

function Enquiries() {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', color: '#fff', borderRadius: 24, padding: '40px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 560 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,32px)', letterSpacing: '-0.02em', margin: '0 0 10px' }}>{tr('Media enquiries', 'Demandes presse')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-300)', margin: 0, lineHeight: 1.55 }}>
            {tr('Journalists and partners — reach our communications team directly. We aim to reply within one business day.', 'Journalistes et partenaires — contactez directement notre équipe communication. Nous nous efforçons de répondre sous un jour ouvré.')}
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <SBtn variant="amber" href="mailto:press@tako.cm" iconLeft="mail">press@tako.cm</SBtn>
        </div>
      </div>
    </section>
  );
}

function BrandAssets() {
  return (
    <section style={{ ...WRAP, paddingTop: 64, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Brand assets', 'Éléments de marque')} title={tr('Logos, screenshots & more', 'Logos, captures & plus')} sub={tr('Use these to represent Tako accurately. Please keep our amber and clear space intact, and don’t alter the mark.', 'Utilisez ces éléments pour représenter Tako fidèlement. Merci de conserver notre ambre et l’espace de protection, et de ne pas modifier le symbole.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {ASSETS.map((a, i) => (
          <Reveal key={a.name} delay={(i % 3) * 70}>
            <a href={a.href} download={a.ready ? '' : undefined} className={a.ready ? 'lift' : ''} aria-disabled={!a.ready}
              onClick={a.ready ? undefined : (e) => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', color: 'var(--fg-1)', height: '100%', boxSizing: 'border-box', cursor: a.ready ? 'pointer' : 'default', opacity: a.ready ? 1 : 0.72 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={a.icon} size={22} /></div>
                <SIcon name={a.ready ? 'download' : 'clock'} size={20} color="var(--fg-3)" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>{a.name}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', margin: 0 }}>{a.meta}</p>
              </div>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, color: a.ready ? 'var(--tako-amber-deep)' : 'var(--fg-3)', marginTop: 'auto' }}>
                {a.ready ? tr('Download', 'Télécharger') : tr('Coming soon', 'Bientôt disponible')}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CompanyFacts() {
  return (
    <div style={{ borderTop: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>
      <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 80 }} className="stack-pad">
        <SectionHead over={tr('Company facts', 'Faits sur l’entreprise')} title={tr('The quick reference', 'L’aide-mémoire')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
          {FACTS.map(([label, val]) => (
            <div key={label} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px' }}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>{label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em' }}>{val}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', margin: '28px 0 0' }}>
          {tr('Looking for our story or leadership? Read', 'Vous cherchez notre histoire ou notre direction ? Consultez')} <a href="about.html" className="link-amber">{tr('about Tako', 'à propos de Tako')}</a> {tr('and the', 'et les')} <a href="newsroom.html" className="link-amber">{tr('newsroom', 'actualités')}</a>.
        </p>
      </section>
    </div>
  );
}

function PressKit() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="about.html" />
      <PressHero />
      <Enquiries />
      <BrandAssets />
      <CompanyFacts />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PressKit />);
