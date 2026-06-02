/* Tako — Safety: Emergency button & RideCheck */
import { t as tr } from '../lib/i18n.js';

function EmergencyHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 900 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Safety', 'Sécurité')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('In an emergency, help is one tap away.', 'En cas d’urgence, l’aide est à une tape.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 640 }}>
          {tr('The emergency button connects you to local response and shares exactly where you are. RideCheck quietly watches every trip and steps in the moment something looks wrong — on Douala’s avenues or a quiet road home.', 'Le bouton d’urgence vous met en relation avec les secours locaux et partage votre position exacte. RideCheck surveille discrètement chaque trajet et intervient dès que quelque chose semble anormal — sur les avenues de Douala comme sur une route tranquille du retour.')}
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
          <SBtn variant="amber" href="safety.html" iconLeft="shield">{tr('All safety features', 'Toutes les fonctions de sécurité')}</SBtn>
          <SBtn variant="outlineLight" href="help.html">{tr('Get help now', 'Obtenir de l’aide')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function EmergencyButton() {
  const steps = [
    ['phone-call', tr('One tap, any time', 'Une tape, à tout moment'),
      tr('The emergency button sits in the safety toolkit on every trip screen — hold it for a moment so it’s never triggered by accident.', 'Le bouton d’urgence se trouve dans la trousse de sécurité sur chaque écran de trajet — maintenez-le un instant pour éviter tout déclenchement accidentel.')],
    ['map-pinned', tr('Your exact live location', 'Votre position exacte en direct'),
      tr('Tako shares your precise GPS position as it moves, so you can read it out to the 117 dispatcher or send it to a trusted contact.', 'Tako partage votre position GPS précise en temps réel, pour que vous puissiez la communiquer au 117 ou l’envoyer à un proche de confiance.')],
    ['car-front', tr('Vehicle and plate, ready to relay', 'Véhicule et plaque, prêts à transmettre'),
      tr('The make, colour and number plate appear on screen with the driver’s name, so responders know exactly which car to look for.', 'La marque, la couleur et la plaque s’affichent à l’écran avec le nom du chauffeur, pour que les secours sachent exactement quelle voiture chercher.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 80 }} className="stack-pad">
      <SectionHead over={tr('Emergency button', 'Bouton d’urgence')}
        title={tr('When seconds matter, skip the search for a number', 'Quand chaque seconde compte, oubliez la recherche d’un numéro')}
        sub={tr('Tako does not replace the emergency services — it gets you to them faster, with the details they need already on the screen in front of you.', 'Tako ne remplace pas les services d’urgence — il vous y connecte plus vite, avec les informations dont ils ont besoin déjà affichées devant vous.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {steps.map(([ic, t, d], i) => (
          <Reveal key={t} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function RideCheck() {
  const signals = [
    ['route', tr('Off-route detours', 'Détours hors itinéraire'),
      tr('If a trip wanders far from the expected route for no clear reason, RideCheck takes notice.', 'Si un trajet s’écarte nettement de l’itinéraire prévu sans raison apparente, RideCheck le remarque.')],
    ['clock', tr('Long unexpected stops', 'Arrêts prolongés inattendus'),
      tr('A vehicle parked far longer than traffic or a junction would explain triggers a quiet check.', 'Un véhicule à l’arrêt bien plus longtemps qu’un feu ou un embouteillage ne l’expliquerait déclenche une vérification discrète.')],
    ['shield', tr('A possible crash', 'Un possible accident'),
      tr('Phone sensors and GPS can flag the sudden motion of a collision, even before anyone can reach for the phone.', 'Les capteurs du téléphone et le GPS peuvent détecter le mouvement brutal d’une collision, avant même que quiconque puisse saisir son téléphone.')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP }} className="stack-pad">
        <SectionHead over={tr('RideCheck · route monitoring', 'RideCheck · surveillance de l’itinéraire')}
          title={tr('Tako notices when a trip doesn’t feel right', 'Tako remarque quand un trajet ne se passe pas comme prévu')}
          sub={tr('Using GPS and your phone’s motion sensors, RideCheck watches each ride in the background. If something looks off, Tako asks “Is everything OK?” and offers a way to act.', 'Grâce au GPS et aux capteurs de mouvement de votre téléphone, RideCheck surveille chaque course en arrière-plan. Si quelque chose semble anormal, Tako demande « Tout va bien ? » et propose d’agir.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 28 }} className="grid-3">
          {signals.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="life-buoy" size={26} /></div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 6px' }}>{tr('A check-in, and a clear next step', 'Une vérification, et une suite claire')}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{tr('Tap to confirm you’re fine and the trip carries on. If you’re not, call for help, share your trip, or report it — all from the same screen, without typing a word.', 'Tapez pour confirmer que tout va bien et le trajet continue. Sinon, appelez les secours, partagez votre trajet ou signalez-le — depuis le même écran, sans écrire un mot.')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AfterIncident() {
  const items = [
    ['file-text', tr('Report from any past trip', 'Signalez depuis n’importe quel trajet'),
      tr('Open your trip history, pick the ride and tell us what happened — minutes after, or days later. There’s no time limit.', 'Ouvrez votre historique, choisissez la course et dites-nous ce qui s’est passé — quelques minutes après, ou plusieurs jours plus tard. Aucune limite de temps.')],
    ['shield-check', tr('Every report is investigated', 'Chaque signalement fait l’objet d’une enquête'),
      tr('Our Cameroon safety team reviews every report, can reach out for details, and acts on what we find — including removing a driver.', 'Notre équipe sécurité au Cameroun examine chaque signalement, peut vous recontacter pour des précisions et agit selon ses conclusions — y compris en excluant un chauffeur.')],
    ['eye-off', tr('Handled with care', 'Traité avec soin'),
      tr('What you share stays confidential and is used only to keep the community safe. Phone numbers stay masked throughout.', 'Ce que vous partagez reste confidentiel et ne sert qu’à protéger la communauté. Les numéros de téléphone restent masqués tout du long.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 80 }} className="stack-pad">
      <SectionHead over={tr('After an incident', 'Après un incident')}
        title={tr('If something happens, we follow through', 'Si quelque chose arrive, nous allons au bout')} />
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

function Commitment() {
  const stats = [
    ['< 30s', tr('avg emergency connect time', 'connexion d’urgence moy.')],
    ['24/7', tr('in-app safety support', 'assistance sécurité dans l’app')],
    [tr('Every trip', 'Chaque trajet'), tr('watched by RideCheck', 'surveillé par RideCheck')],
    ['100%', tr('of reports investigated', 'des signalements examinés')],
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
    ['share-2', tr('Share your trip', 'Partagez votre trajet'), 'safety-share-trip.html'],
    ['users', tr('Community guidelines', 'Règles de la communauté'), 'safety-community-guidelines.html'],
    ['handshake', tr('Insurance on every trip', 'Assurance sur chaque trajet'), 'safety-insurance.html'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '44px 44px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', marginBottom: 32 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="siren" size={30} /></div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{tr('Help is built into every ride', 'L’aide est intégrée à chaque course')}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-700)', margin: 0 }}>{tr('Explore how Tako looks out for you before, during and after every trip.', 'Découvrez comment Tako veille sur vous avant, pendant et après chaque trajet.')}</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="primary" href="safety.html">{tr('All safety features', 'Toutes les fonctions')}</SBtn>
            <SBtn variant="outline" href="help.html">{tr('Help Centre', 'Centre d’aide')}</SBtn>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--tako-amber)', paddingTop: 24 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 16 }}>{tr('Explore more safety', 'Explorer plus de sécurité')}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }} className="grid-4">
            {more.map(([ic, label, href]) => (
              <a key={href} href={href} className="link-amber" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: '#fff', border: '1px solid var(--tako-amber)', borderRadius: 14, padding: '14px 16px', color: 'var(--tako-black)', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15 }}>
                <SIcon name={ic} size={20} color="var(--tako-amber-deep)" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyEmergency() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="safety.html" />
      <EmergencyHero />
      <EmergencyButton />
      <RideCheck />
      <AfterIncident />
      <Commitment />
      <CTABand />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SafetyEmergency />);
