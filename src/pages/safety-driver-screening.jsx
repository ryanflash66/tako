/* Tako — Safety: Driver & vehicle screening page */
import { t as tr } from '../lib/i18n.js';

const SIBLINGS = [
  ['share-2', tr('Share your trip', 'Partagez votre trajet'), 'safety-share-trip.html'],
  ['siren', tr('Emergency help', 'Aide d’urgence'), 'safety-emergency.html'],
  ['shield', tr('Community guidelines', 'Règles de la communauté'), 'safety-community-guidelines.html'],
  ['handshake', tr('Insurance on every trip', 'Assurance sur chaque trajet'), 'safety-insurance.html'],
];

function ScreeningHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 900 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>
          <a href="safety.html" style={{ color: 'var(--tako-amber)', textDecoration: 'none' }}>{tr('Safety', 'Sécurité')}</a>
          <span style={{ color: 'var(--gray-500)' }}> / {tr('Driver screening', 'Vérification des chauffeurs')}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Every driver, verified before they drive.', 'Chaque chauffeur, vérifié avant de conduire.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 640 }}>
          {tr('Before anyone can pick you up in Douala, Yaoundé or Bamenda, they pass a multi-step check — identity and background, official documents, and an in-person inspection of the car itself.', 'Avant que quiconque puisse vous prendre en charge à Douala, Yaoundé ou Bamenda, il passe un contrôle en plusieurs étapes — identité et antécédents, documents officiels, et une inspection en personne du véhicule.')}
        </p>
      </div>
    </section>
  );
}

function BeforeFirstRide() {
  const steps = [
    ['user-check', tr('Identity & background check', 'Identité et antécédents'), tr('Each applicant submits a government ID and is matched to it with a live selfie. We run a background screening before any account is approved to accept rides.', 'Chaque candidat fournit une pièce d’identité officielle, confirmée par un selfie en direct. Nous effectuons une vérification des antécédents avant qu’un compte ne soit autorisé à accepter des courses.')],
    ['file-text', tr('Document review', 'Vérification des documents'), tr('A driving licence, vehicle registration (carte grise) and valid insurance are reviewed and confirmed authentic before approval — and tracked so they never expire unnoticed.', 'Permis de conduire, carte grise et assurance en cours de validité sont examinés et confirmés authentiques avant validation — et suivis pour qu’ils n’expirent jamais à votre insu.')],
    ['car-front', tr('In-person vehicle inspection', 'Inspection en personne du véhicule'), tr('At a Tako Greenlight centre, a specialist inspects tyres, brakes, lights, seatbelts and bodywork. A car only goes live once it passes.', 'Dans un centre Greenlight de Tako, un spécialiste inspecte pneus, freins, feux, ceintures et carrosserie. Une voiture n’est mise en service qu’une fois l’inspection réussie.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Before the first ride', 'Avant la première course')} title={tr('Three checks, every single time', 'Trois contrôles, à chaque fois')} sub={tr('No driver appears on Tako until all three are complete. There are no shortcuts and no exceptions.', 'Aucun chauffeur n’apparaît sur Tako tant que les trois ne sont pas terminés. Aucun raccourci, aucune exception.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {steps.map(([ic, t, d], i) => (
          <Reveal key={t} delay={i * 80} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={24} /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--tako-amber-deep)' }}>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function KnowYourCar() {
  const details = [
    ['user', tr('Driver name & photo', 'Nom et photo du chauffeur')],
    ['star', tr('Star rating', 'Note du chauffeur')],
    ['car', tr('Car make & colour', 'Marque et couleur')],
    ['id-card', tr('Number plate', 'Plaque d’immatriculation')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 96, paddingBottom: 96, display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center' }} className="grid-2 stack-pad">
        <div>
          <SectionHead over={tr('Know your car', 'Reconnaissez votre voiture')} title={tr('Match the details before you get in', 'Vérifiez les détails avant de monter')} sub={tr('When your driver is on the way, the app shows you exactly who and what to look for. Take a few seconds to match all four before you open the door — every time.', 'Quand votre chauffeur arrive, l’app vous montre précisément qui et quoi rechercher. Prenez quelques secondes pour vérifier les quatre éléments avant d’ouvrir la portière — à chaque fois.')} />
          <SBtn variant="outline" iconLeft="check" href="ride.html">{tr('See how a ride works', 'Voir comment fonctionne une course')}</SBtn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {details.map(([ic, label], i) => (
            <Reveal key={label} delay={(i % 2) * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '22px 20px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><SIcon name={ic} size={22} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OngoingChecks() {
  const items = [
    ['rotate-ccw', tr('Periodic re-screening', 'Revérification périodique'), tr('Identity, licence and insurance are re-checked on a recurring schedule. If a document lapses, the driver is paused until it’s renewed and re-confirmed.', 'Identité, permis et assurance sont revérifiés à intervalles réguliers. Si un document expire, le chauffeur est suspendu jusqu’à son renouvellement et sa reconfirmation.')],
    ['chart-column', tr('Rating thresholds', 'Seuils de notation'), tr('Drivers maintain a minimum star rating. Falling below it triggers a review and required coaching before they can drive again.', 'Les chauffeurs maintiennent une note minimale. Passer en dessous déclenche un examen et une formation obligatoire avant de pouvoir reprendre le volant.')],
    ['flag', tr('Removal for repeat issues', 'Exclusion en cas de récidive'), tr('Serious or repeated safety reports lead to permanent removal from Tako. Our safety team investigates every flagged trip.', 'Les signalements graves ou répétés mènent à une exclusion définitive de Tako. Notre équipe sécurité enquête sur chaque trajet signalé.')],
    ['calendar-clock', tr('Document expiry tracking', 'Suivi des échéances'), tr('We track every licence, registration and insurance expiry date, so no driver ever operates on lapsed paperwork.', 'Nous suivons chaque échéance de permis, de carte grise et d’assurance, pour qu’aucun chauffeur ne roule avec des documents périmés.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Ongoing checks', 'Contrôles continus')} title={tr('Verification doesn’t stop at sign-up', 'La vérification ne s’arrête pas à l’inscription')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {items.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 70} style={{ display: 'flex', gap: 20, border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 6px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Commitments() {
  const stats = [
    ['100%', tr('of drivers identity-verified', 'des chauffeurs vérifiés')],
    [tr('Every car', 'Chaque voiture'), tr('inspected before it goes live', 'inspectée avant la mise en service')],
    ['3', tr('checks before the first ride', 'contrôles avant la première course')],
    [tr('Ongoing', 'En continu'), tr('re-screening & document tracking', 'revérification et suivi des documents')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="grid-4 stack-pad">
        {stats.map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: 'var(--tako-amber-deep)' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '48px 44px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,2.8vw,36px)', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
          {tr('Ride with people you can trust', 'Voyagez avec des personnes de confiance')}
        </h2>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--gray-700)', margin: '0 0 28px', maxWidth: 560 }}>
          {tr('Every Tako driver is verified before they reach you — and checked again as they keep driving.', 'Chaque chauffeur Tako est vérifié avant de vous rejoindre — puis contrôlé à nouveau au fil de ses courses.')}
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <SBtn variant="primary" iconLeft="arrow-left" href="safety.html">{tr('Back to Safety', 'Retour à la Sécurité')}</SBtn>
          <SBtn variant="amber" icon="arrow-right" href="ride.html">{tr('Request a ride', 'Demander une course')}</SBtn>
        </div>
        <div style={{ borderTop: '1px solid var(--tako-amber)', marginTop: 32, paddingTop: 24 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 16 }}>{tr('Explore more safety', 'Découvrez plus sur la sécurité')}</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {SIBLINGS.map(([ic, label, href]) => (
              <a key={href} href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid var(--tako-amber)', borderRadius: 999, padding: '9px 16px', textDecoration: 'none', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14, color: 'var(--tako-black)' }} className="link-amber">
                <SIcon name={ic} size={16} color="var(--tako-amber-deep)" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DriverScreening() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="safety.html" />
      <ScreeningHero />
      <BeforeFirstRide />
      <KnowYourCar />
      <OngoingChecks />
      <Commitments />
      <CTABand />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DriverScreening />);
