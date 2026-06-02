/* Tako — Driver requirements page */
import { t as tr } from '../lib/i18n.js';

function ReqHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Drive with Tako', 'Conduire avec Tako')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('What you need to start driving.', 'Ce qu’il faut pour commencer à conduire.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 560 }}>
          {tr('A few documents and a roadworthy vehicle are all it takes. Have these ready and most drivers are approved within a couple of days.', 'Quelques documents et un véhicule en bon état suffisent. Préparez-les et la plupart des chauffeurs sont approuvés en quelques jours.')}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Start your application', 'Commencer votre inscription')}</SBtn>
          <SBtn variant="outlineLight" href="drive.html">{tr('Back to Drive', 'Retour à Conduire')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function Checklists() {
  const driver = [tr('18+ with a valid Cameroonian driver’s licence', 'Plus de 18 ans avec un permis de conduire camerounais valide'), tr('At least one year of driving experience', 'Au moins un an d’expérience de conduite'), tr('National ID card or passport', 'Carte nationale d’identité ou passeport'), tr('A clean driving record', 'Un casier de conduite vierge'), tr('A smartphone (Android 8+ / iOS 13+)', 'Un smartphone (Android 8+ / iOS 13+)')];
  const vehicle = [tr('4-door car, 2010 or newer (Go/Comfort) — or a registered motorcycle (Moto)', 'Voiture 4 portes, 2010 ou plus récente (Go/Comfort) — ou une moto immatriculée (Moto)'), tr('Valid registration (carte grise) and insurance', 'Carte grise et assurance valides'), tr('Roadworthy and in good condition', 'En bon état et apte à circuler'), tr('Seats for at least 4 passengers (XL: 6)', 'Au moins 4 places passagers (XL : 6)'), tr('Passes a quick Tako vehicle inspection', 'Réussit une inspection rapide du véhicule Tako')];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Requirements', 'Conditions')} title={tr('The essentials, in two lists', 'L’essentiel, en deux listes')} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
        {[['user-round', tr('You, the driver', 'Vous, le chauffeur'), driver], ['car', tr('Your vehicle', 'Votre véhicule'), vehicle]].map(([ic, title, items]) => (
          <div key={title} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={22} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: 0 }}>{title}</h3>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
              {items.map(it => (
                <li key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <SIcon name="check" size={20} color="var(--success)" style={{ marginTop: 1 }} />
                  <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Documents() {
  const docs = [
    ['id-card', tr('Driver’s licence', 'Permis de conduire'), tr('A valid Cameroonian licence, front and back.', 'Un permis camerounais valide, recto et verso.')],
    ['file-text', tr('Vehicle registration', 'Carte grise'), tr('The carte grise showing the vehicle is registered to you.', 'La carte grise prouvant que le véhicule est à votre nom.')],
    ['shield-check', tr('Insurance certificate', 'Attestation d’assurance'), tr('Current insurance covering the vehicle.', 'Une assurance en cours couvrant le véhicule.')],
    ['badge-check', tr('Vehicle inspection', 'Inspection du véhicule'), tr('A quick Tako safety inspection — we’ll guide you.', 'Une inspection de sécurité Tako rapide — on vous accompagne.')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Documents', 'Documents')} title={tr('What you’ll upload', 'Ce que vous téléverserez')} sub={tr('Snap a photo of each in the app — verification is usually done within two days.', 'Prenez chaque document en photo dans l’app — la vérification prend en général deux jours.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
          {docs.map(([ic, t2, d], i) => (
            <Reveal key={t2} delay={(i % 2) * 70} style={{ display: 'flex', gap: 18, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={24} /></div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 6px' }}>{t2}</h3>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyNote() {
  return (
    <section style={{ ...WRAP, paddingTop: 0, paddingBottom: 96 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '36px 40px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="shield" size={28} /></div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{tr('Every driver is screened', 'Chaque chauffeur est contrôlé')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-700)', margin: 0 }}>{tr('We run an identity and driving-record check before your first trip, and re-check regularly. It keeps riders safe — and the community trusted.', 'Nous vérifions votre identité et votre dossier de conduite avant votre première course, puis régulièrement. C’est ce qui protège les passagers — et la confiance de la communauté.')}</p>
        </div>
        <SBtn variant="primary" href="safety.html">{tr('How we keep everyone safe', 'Comment nous assurons la sécurité')}</SBtn>
      </div>
    </section>
  );
}

function Requirements() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="drive.html" />
      <ReqHero />
      <Checklists />
      <Documents />
      <SafetyNote />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Requirements />);
