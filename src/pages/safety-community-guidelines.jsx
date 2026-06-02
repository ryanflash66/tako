/* Tako — Community Guidelines (Lyft-informed community standards) */
import { t as tr } from '../lib/i18n.js';

const PILLARS = [
  ['handshake', tr('Be respectful', 'Soyez respectueux'),
    tr('Greet each other, keep conversation courteous and honour personal space. A short trip is still a shared one — treat riders and drivers the way you would a neighbour in your own quartier.',
       'Saluez-vous, restez courtois et respectez l’espace de chacun. Un court trajet reste partagé — traitez passagers et chauffeurs comme un voisin de votre quartier.')],
  ['shield-check', tr('Be safe', 'Soyez prudent'),
    tr('Buckle up, follow the road rules and never ride or drive under the influence. Drivers keep their vehicle clean and roadworthy; riders wait in a safe spot and confirm the plate before getting in.',
       'Attachez votre ceinture, respectez le code de la route et ne conduisez jamais sous influence. Les chauffeurs gardent un véhicule propre et en bon état ; les passagers attendent dans un endroit sûr et vérifient la plaque avant de monter.')],
  ['users-round', tr('No discrimination or harassment', 'Aucune discrimination ni harcèlement'),
    tr('Everyone rides and drives free from discrimination based on ethnicity, region, religion, gender, disability or anything else. Unwanted contact, comments or advances are never tolerated.',
       'Chacun voyage et conduit à l’abri de toute discrimination liée à l’ethnie, la région, la religion, le genre, le handicap ou autre. Les contacts, propos ou avances non sollicités ne sont jamais tolérés.')],
  ['file-text', tr('Follow the law', 'Respectez la loi'),
    tr('No weapons, no illegal items and no fraud. Drivers carry valid documents and insurance; riders pay the fare shown. We cooperate with Cameroonian authorities when the law requires it.',
       'Pas d’armes, pas d’objets illicites, pas de fraude. Les chauffeurs ont des documents et une assurance valides ; les passagers règlent le prix affiché. Nous coopérons avec les autorités camerounaises lorsque la loi l’exige.')],
];

const NOT_ALLOWED = [
  ['warning', tr('Rude or aggressive behaviour', 'Comportement grossier ou agressif'),
    tr('Insults, shouting or threats toward a rider, driver or our support team.', 'Insultes, cris ou menaces envers un passager, un chauffeur ou notre équipe d’assistance.')],
  ['warning', tr('Unsafe driving or riding', 'Conduite ou comportement dangereux'),
    tr('Speeding, ignoring the route or distracting the driver during the trip.', 'Excès de vitesse, non-respect de l’itinéraire ou distraction du chauffeur pendant le trajet.')],
  ['removal', tr('Discrimination or harassment', 'Discrimination ou harcèlement'),
    tr('Refusing service or harassing anyone for who they are, or any unwanted sexual contact.', 'Refuser un service ou harceler quelqu’un pour ce qu’il est, ou tout contact sexuel non désiré.')],
  ['removal', tr('Violence or weapons', 'Violence ou armes'),
    tr('Any physical harm, threat of harm, or carrying a weapon on a Tako trip.', 'Toute violence physique, menace de violence ou port d’arme lors d’un trajet Tako.')],
  ['removal', tr('Fraud or fake accounts', 'Fraude ou faux comptes'),
    tr('Faked trips, stolen identities, or sharing an account with someone not verified.', 'Trajets falsifiés, identités usurpées ou partage d’un compte avec une personne non vérifiée.')],
];

const TONE = {
  warning: { label: tr('Warning, then review', 'Avertissement, puis examen'), bg: 'var(--tako-amber-soft)', fg: 'var(--tako-amber-deep)', icon: 'flag' },
  removal: { label: tr('Immediate removal', 'Exclusion immédiate'), bg: '#fdecec', fg: '#c0392b', icon: 'x' },
};

function Hero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 900 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Community', 'Communauté')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Respect, both ways.', 'Le respect, dans les deux sens.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 620 }}>
          {tr('Tako only works when riders and drivers look out for each other. These guidelines set one clear standard for everyone in the community — in Douala, Yaoundé and every road in between.',
              'Tako ne fonctionne que si passagers et chauffeurs veillent les uns sur les autres. Ces règles fixent une norme claire pour toute la communauté — à Douala, à Yaoundé et sur chaque route entre les deux.')}
        </p>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section style={{ ...WRAP, paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
      <SectionHead over={tr('The four pillars', 'Les quatre piliers')} title={tr('What every Tako trip stands on', 'Sur quoi repose chaque trajet Tako')}
        sub={tr('Apply equally to riders and drivers, every single trip.', 'Elles s’appliquent autant aux passagers qu’aux chauffeurs, à chaque trajet.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {PILLARS.map(([ic, title, body], i) => (
          <Reveal key={title} delay={(i % 2) * 70} style={{ display: 'flex', gap: 20, border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 6px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function NotAllowed() {
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
        <SectionHead over={tr('Zero tolerance', 'Tolérance zéro')} title={tr('What’s not allowed — and what happens', 'Ce qui est interdit — et ce qui en découle')}
          sub={tr('We review every report. Minor lapses earn a warning; serious breaches end an account.', 'Nous examinons chaque signalement. Les écarts mineurs valent un avertissement ; les manquements graves mettent fin au compte.')} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {NOT_ALLOWED.map(([tone, title, body]) => {
            const cfg = TONE[tone];
            return (
              <Reveal key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 18, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '22px 24px', flexWrap: 'wrap' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: cfg.bg, color: cfg.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={cfg.icon} size={22} /></div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{body}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, color: cfg.fg, background: cfg.bg, borderRadius: 999, padding: '7px 14px', whiteSpace: 'nowrap', alignSelf: 'center' }}>{cfg.label}</span>
              </Reveal>
            );
          })}
        </div>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.55, margin: '24px 0 0', maxWidth: 720 }}>
          {tr('Consequences scale from a warning, to temporary suspension, to permanent removal from Tako — depending on severity and history. Some breaches are reported to the authorities.',
              'Les conséquences vont de l’avertissement à la suspension temporaire, jusqu’à l’exclusion définitive de Tako — selon la gravité et les antécédents. Certains manquements sont signalés aux autorités.')}
        </p>
      </div>
    </section>
  );
}

function RatingsReporting() {
  const cards = [
    ['star', tr('Two-way ratings', 'Évaluations mutuelles'),
      tr('After every trip, riders rate drivers and drivers rate riders. Consistent low scores trigger a review, so the whole community keeps its standards high.',
         'Après chaque trajet, passagers et chauffeurs se notent mutuellement. Des notes basses répétées déclenchent un examen, ce qui maintient le niveau de toute la communauté.')],
    ['flag', tr('Report a problem', 'Signaler un problème'),
      tr('Flag any trip from your history. Reports about safety reach our team immediately, and we follow up with both sides before deciding on action.',
         'Signalez n’importe quel trajet depuis votre historique. Les signalements de sécurité parviennent à notre équipe immédiatement, et nous contactons les deux parties avant toute décision.')],
    ['shield', tr('Fair, confidential review', 'Examen équitable et confidentiel'),
      tr('Your rating and your report are confidential. We look at the full picture — not a single bad day — and never share who reported whom.',
         'Votre note et votre signalement sont confidentiels. Nous examinons l’ensemble — pas une simple mauvaise journée — et ne révélons jamais qui a signalé qui.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 88, paddingBottom: 16 }} className="stack-pad">
      <SectionHead over={tr('Accountability', 'Responsabilité')} title={tr('Ratings and reporting keep it honest', 'Les notes et signalements garantissent l’honnêteté')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {cards.map(([ic, title, body], i) => (
          <Reveal key={title} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{title}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 32 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '40px 44px', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="shield-check" size={30} /></div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{tr('Safety is built into every step', 'La sécurité est intégrée à chaque étape')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-700)', margin: 0 }}>{tr('See how Tako looks out for you before, during and after every ride.', 'Découvrez comment Tako veille sur vous avant, pendant et après chaque course.')}</p>
        </div>
        <SBtn variant="primary" href="safety.html" icon="arrow-right">{tr('Explore safety', 'Découvrir la sécurité')}</SBtn>
      </div>
    </section>
  );
}

function ExploreMore() {
  const links = [
    ['shield-check', tr('Driver screening', 'Vérification des chauffeurs'), 'safety-driver-screening.html'],
    ['share-2', tr('Share your trip', 'Partagez votre trajet'), 'safety-share-trip.html'],
    ['siren', tr('Emergency help', 'Aide d’urgence'), 'safety-emergency.html'],
    ['shield', tr('Insurance', 'Assurance'), 'safety-insurance.html'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 18 }}>{tr('Explore more safety', 'Découvrir plus sur la sécurité')}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="grid-4">
        {links.map(([ic, label, href]) => (
          <a key={href} href={href} className="link-amber" style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-1)', borderRadius: 14, padding: '16px 18px', textDecoration: 'none', color: 'var(--fg-1)' }}>
            <SIcon name={ic} size={20} color="var(--tako-amber-deep)" />
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15 }}>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function CommunityGuidelines() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="safety.html" />
      <Hero />
      <Pillars />
      <NotAllowed />
      <RatingsReporting />
      <CTA />
      <ExploreMore />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CommunityGuidelines />);
