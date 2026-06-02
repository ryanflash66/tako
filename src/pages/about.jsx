/* Tako — About page */
import { t as tr } from '../lib/i18n.js';

function AboutHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 860 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('About Tako', 'À propos de Tako')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.2vw,66px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Moving Cameroon forward, one ride at a time.', 'Faire avancer le Cameroun, une course à la fois.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 620 }}>
          {tr('Tako is a homegrown rideshare service built for the way Cameroon really moves — from Douala gridlock to rural roads, with fair fares for riders and real earnings for drivers.', 'Tako est un service de covoiturage local, conçu pour la façon dont le Cameroun se déplace vraiment — des embouteillages de Douala aux routes rurales, avec des prix justes pour les passagers et de vrais revenus pour les chauffeurs.')}
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64, maxWidth: 820 }} className="stack-pad">
      <SectionHead over={tr('Our story', 'Notre histoire')} title={tr('Built here, for here', 'Né ici, pour ici')} />
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.7, margin: '0 0 18px' }}>
        {tr('Tako started with a simple frustration: getting around Cameroonian cities was slower, pricier and less predictable than it should be. We set out to fix that with technology designed for local roads, local payments and local trust.', 'Tako est né d’une frustration simple : se déplacer dans les villes camerounaises était plus lent, plus cher et moins prévisible qu’il ne devrait l’être. Nous avons décidé d’y remédier avec une technologie pensée pour les routes, les paiements et la confiance d’ici.')}
      </p>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.7, margin: 0 }}>
        {tr('Today Tako connects thousands of drivers with riders across eleven cities, with upfront pricing, cash and Mobile Money payments, and a safety system that looks out for everyone on the road.', 'Aujourd’hui, Tako relie des milliers de chauffeurs à des passagers dans onze villes, avec des prix transparents, le paiement en espèces ou par Mobile Money, et un système de sécurité qui veille sur tous sur la route.')}
      </p>
    </section>
  );
}

function ByNumbers() {
  const stats = [['11', tr('cities live', 'villes desservies')], ['8,000+', tr('active drivers', 'chauffeurs actifs')], ['2 min', tr('avg pickup', 'prise en charge moy.')], ['4.9★', tr('avg trip rating', 'note moyenne')]];
  return (
    <div style={{ borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, paddingTop: 40, paddingBottom: 40 }} className="grid-4 stack-pad">
        {stats.map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Values() {
  const vals = [
    ['shield-check', tr('Safety first', 'La sécurité d’abord'), tr('Trust is the foundation — verified drivers, live trip sharing and help when you need it.', 'La confiance est la base — chauffeurs vérifiés, partage de trajet en direct et de l’aide quand vous en avez besoin.')],
    ['badge-cent', tr('Fair for everyone', 'Juste pour tous'), tr('Upfront fares for riders, lower commission and weekly payouts for drivers.', 'Prix transparents pour les passagers, commission plus basse et paiements hebdomadaires pour les chauffeurs.')],
    ['map-pinned', tr('Built for Cameroon', 'Conçu pour le Cameroun'), tr('Local roads, local payments, local support — designed around how people actually move here.', 'Routes locales, paiements locaux, assistance locale — pensé pour la façon dont on se déplace vraiment ici.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 80, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('What we believe', 'Ce en quoi nous croyons')} title={tr('The values behind every trip', 'Les valeurs derrière chaque trajet')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {vals.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={i * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <AboutHero />
      <Story />
      <ByNumbers />
      <Values />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<About />);
