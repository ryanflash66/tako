/* Tako — Safety · Share your trip page */
import { t as tr } from '../lib/i18n.js';

const STEPS = [
  ['users', tr('Set your Trusted Contacts', 'Choisissez vos proches de confiance'),
    tr('Add the people you want looking out for you — a parent, a partner, a flatmate. Save them once and they’re ready for any ride.', 'Ajoutez les personnes qui veillent sur vous — un parent, un conjoint, un colocataire. Enregistrez-les une fois, prêts pour chaque course.')],
  ['share-2', tr('Tap Share trip', 'Touchez Partager le trajet'),
    tr('From any active Tako ride, one tap sends a secure link by SMS or WhatsApp. No setup, no waiting — it works mid-trip too.', 'Depuis toute course Tako en cours, une tape envoie un lien sécurisé par SMS ou WhatsApp. Sans configuration, sans attente — même en plein trajet.')],
  ['navigation', tr('They follow you home', 'Ils vous suivent jusqu’à la maison'),
    tr('Your contacts watch your live route and ETA on a map until you arrive — right in their browser, no app to download.', 'Vos proches suivent votre itinéraire et votre heure d’arrivée en direct sur une carte jusqu’à votre arrivée — dans leur navigateur, sans app à installer.')],
];

const AUTO_OPTIONS = [
  ['moon', tr('Auto-share night rides', 'Partage auto la nuit'),
    tr('Choose to share automatically on every ride after dark, so a late trip across Douala is never a quiet one.', 'Choisissez de partager automatiquement chaque course de nuit : un trajet tardif à travers Douala n’est jamais silencieux.')],
  ['map-pinned', tr('Trusted routes', 'Itinéraires de confiance'),
    tr('Set specific trips — the airport run, the commute from Yaoundé, the ride home from the market — to share on their own.', 'Définissez des trajets précis — l’aéroport, le trajet depuis Yaoundé, le retour du marché — qui se partagent tout seuls.')],
  ['bell', tr('Gentle reminders', 'Rappels discrets'),
    tr('Tako can nudge you to share when a ride starts late or runs longer than usual, so it’s one less thing to remember.', 'Tako peut vous suggérer de partager quand une course démarre tard ou s’allonge, pour ne pas avoir à y penser.')],
];

const SEEN = [
  ['map', tr('Your live location', 'Votre position en direct'),
    tr('A moving map of exactly where you are on the route, updated second by second until the trip ends.', 'Une carte animée de votre position exacte sur l’itinéraire, mise à jour seconde par seconde jusqu’à la fin du trajet.')],
  ['car-front', tr('Car, plate & driver', 'Voiture, plaque et chauffeur'),
    tr('Make, colour, plate number and the driver’s first name and photo — so anyone helping you can confirm the right car.', 'Marque, couleur, plaque, prénom et photo du chauffeur — pour que vos proches confirment la bonne voiture.')],
  ['clock', tr('Live ETA', 'Heure d’arrivée en direct'),
    tr('A real-time estimate of when you’ll reach your destination, recalculated as traffic and the route change.', 'Une estimation en temps réel de votre arrivée, recalculée selon le trafic et l’itinéraire.')],
];

const PRIVACY = [
  ['phone-off', tr('Numbers stay masked', 'Numéros masqués'),
    tr('Sharing a trip never shares your phone number. Calls and messages always route through Tako’s relay.', 'Partager un trajet ne partage jamais votre numéro. Appels et messages passent toujours par le relais Tako.')],
  ['timer-off', tr('Sharing stops at the door', 'Le partage s’arrête à l’arrivée'),
    tr('The link goes dark the moment your trip ends. Your contacts can’t see where you go next — and you can stop sharing any time.', 'Le lien s’éteint dès la fin du trajet. Vos proches ne voient pas où vous allez ensuite — et vous pouvez arrêter à tout moment.')],
  ['user-check', tr('Only who you choose', 'Seulement qui vous voulez'),
    tr('Live trips are visible to the people you send the link to — nobody else. You decide who, and for which rides.', 'Vos trajets en direct sont visibles uniquement par les personnes à qui vous envoyez le lien — personne d’autre. Vous décidez qui, et pour quelles courses.')],
];

function Hero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 900 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Safety', 'Sécurité')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Let someone follow you home.', 'Laissez un proche vous suivre jusqu’à la maison.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 600 }}>
          {tr('Share your live Tako trip with the people you trust. They see your route, your car and your ETA until you’re safely there — no app, no fuss, just peace of mind on both ends.', 'Partagez votre trajet Tako en direct avec vos proches. Ils voient votre itinéraire, votre voiture et votre arrivée jusqu’à ce que vous soyez en sécurité — sans app, sans complication, l’esprit tranquille des deux côtés.')}
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
          <SBtn variant="amber" href="ride.html" icon="arrow-right">{tr('Book a ride', 'Réserver une course')}</SBtn>
          <SBtn variant="outlineLight" href="safety.html">{tr('All safety features', 'Toutes les protections')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('How it works', 'Comment ça marche')} title={tr('Sharing takes one tap', 'Partager, c’est une seule tape')}
        sub={tr('Set it up once, then share any ride the moment you get in — or let Tako do it for you.', 'Configurez-le une fois, puis partagez chaque course dès que vous montez — ou laissez Tako le faire pour vous.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {STEPS.map(([ic, t, d], i) => (
          <Reveal key={t} delay={i * 80} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={24} /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--tako-amber-deep)' }}>{tr('Step', 'Étape')} {i + 1}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AutoShare() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP }} className="stack-pad">
        <SectionHead over={tr('Always-on options', 'Options permanentes')} title={tr('Set it once, never think about it', 'Réglez-le une fois, n’y pensez plus')}
          sub={tr('The safest habit is the one you don’t have to remember. Let sharing happen on its own when it matters most.', 'La meilleure habitude est celle qu’on n’a pas à se rappeler. Laissez le partage se déclencher seul quand c’est important.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {AUTO_OPTIONS.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 80} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={26} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatTheySee() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="grid-2">
        <div>
          <SectionHead over={tr('What they see', 'Ce qu’ils voient')} title={tr('Enough to help — never more', 'Assez pour aider — jamais plus')}
            sub={tr('Your contacts get exactly what they need to know you’re alright. Your privacy is protected the whole way.', 'Vos proches reçoivent exactement ce qu’il faut pour savoir que vous allez bien. Votre vie privée est protégée du début à la fin.')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {SEEN.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70} style={{ display: 'flex', gap: 18, border: '1px solid var(--border-1)', borderRadius: 18, padding: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={23} /></div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 6px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <SectionHead over={tr('Your privacy', 'Votre vie privée')} title={tr('Private by default', 'Privé par défaut')}
            sub={tr('Sharing a trip is about your safety, not your whole life. Here’s where we draw the line.', 'Partager un trajet, c’est votre sécurité, pas toute votre vie. Voici où nous traçons la limite.')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PRIVACY.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70} style={{ display: 'flex', gap: 18, background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 18, padding: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={23} /></div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 6px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.5, margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  const stats = [
    ['1 tap', tr('to share a live trip', 'pour partager un trajet')],
    [tr('No app', 'Sans app'), tr('needed for your contacts', 'pour vos proches')],
    ['100%', tr('of trips GPS-tracked', 'des trajets suivis par GPS')],
    [tr('At arrival', 'À l’arrivée'), tr('sharing ends automatically', 'le partage s’arrête seul')],
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
  const more = [
    ['user-check', tr('Driver screening', 'Vérification des chauffeurs'), 'safety-driver-screening.html'],
    ['siren', tr('Emergency assistance', 'Assistance d’urgence'), 'safety-emergency.html'],
    ['shield', tr('Community guidelines', 'Règles de la communauté'), 'safety-community-guidelines.html'],
    ['heart-handshake', tr('Insurance on every trip', 'Assurance sur chaque trajet'), 'safety-insurance.html'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 40 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', color: '#fff', borderRadius: 28, padding: '64px 56px' }}>
        <AnimatedLanes style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 620 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.2vw,44px)', letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 16px' }}>
            {tr('Ride knowing someone’s with you', 'Roulez en sachant qu’un proche veille')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', lineHeight: 1.5, margin: '0 0 28px' }}>
            {tr('Book your next trip and share it with the people who matter — or explore everything else Tako does to keep you safe.', 'Réservez votre prochain trajet et partagez-le avec ceux qui comptent — ou découvrez tout ce que Tako fait pour votre sécurité.')}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <SBtn variant="amber" href="ride.html" icon="arrow-right">{tr('Book a ride', 'Réserver une course')}</SBtn>
            <SBtn variant="outlineLight" href="safety.html">{tr('Safety overview', 'Aperçu sécurité')}</SBtn>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 56 }}>
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 20 }}>{tr('Explore more safety', 'Découvrez plus de sécurité')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="grid-4">
          {more.map(([ic, label, href]) => (
            <a key={href} href={href} className="link-card" style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px', textDecoration: 'none', color: 'var(--tako-black)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={22} /></div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareTrip() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="safety.html" />
      <Hero />
      <HowItWorks />
      <AutoShare />
      <WhatTheySee />
      <Commitment />
      <CTABand />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ShareTrip />);
