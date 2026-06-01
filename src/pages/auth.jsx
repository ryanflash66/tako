/* Tako — Onboarding / auth flow. A functional multi-step wizard. */

const COUNTRIES = [
  { code: 'CM', dial: '+237', name: 'Cameroon' },
  { code: 'NG', dial: '+234', name: 'Nigeria' },
  { code: 'GA', dial: '+241', name: 'Gabon' },
  { code: 'TD', dial: '+235', name: 'Chad' },
  { code: 'FR', dial: '+33', name: 'France' },
  { code: 'US', dial: '+1', name: 'United States' },
];

const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim());
const isPhoneish = (v) => /^[0-9\s().-]{6,}$/.test(v.trim());

function GoogleG({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" style={{ display: 'block' }}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 43.5c5.4 0 10.3-2 13.9-5.3l-6.4-5.4c-2 1.5-4.6 2.5-7.5 2.5-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.6 39 16.2 43.5 24 43.5z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.4 5.4c-.4.4 6.9-5 6.9-15 0-1.2-.1-2.3-.9-3.5z"/>
    </svg>
  );
}

// ---- Shared chrome ----------------------------------------------------------
function AuthHeader({ progress }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--tako-black)' }}>
      <div style={{ height: 64, display: 'flex', alignItems: 'center', padding: '0 28px' }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="assets/tako-mark.png" alt="Tako" style={{ height: 30, width: 30, objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: '#fff' }}>Tako</span>
        </a>
      </div>
      <div style={{ height: 3, background: 'rgba(255,255,255,0.10)' }}>
        <div style={{ height: '100%', width: `${progress * 100}%`, background: 'var(--tako-amber)', transition: 'width .4s cubic-bezier(.2,0,0,1)' }} />
      </div>
    </header>
  );
}

function NavButtons({ onBack, onNext, nextLabel = 'Next', nextDisabled, showBack = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 40 }}>
      {showBack && (
        <button onClick={onBack} aria-label="Back" style={{ width: 56, height: 56, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-200)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-3)'}>
          <SIcon name="arrow-left" size={22} color="var(--tako-black)" />
        </button>
      )}
      <button onClick={nextDisabled ? undefined : onNext} disabled={nextDisabled}
        style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', borderRadius: 999, padding: '15px 28px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16,
          cursor: nextDisabled ? 'not-allowed' : 'pointer', background: nextDisabled ? 'var(--bg-3)' : 'var(--tako-black)', color: nextDisabled ? 'var(--gray-400)' : '#fff', transition: 'background .15s, transform .12s' }}
        onMouseDown={e => { if (!nextDisabled) e.currentTarget.style.transform = 'scale(0.97)'; }} onMouseUp={e => e.currentTarget.style.transform = 'none'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
        {nextLabel} <SIcon name="arrow-right" size={18} />
      </button>
    </div>
  );
}

const titleStyle = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,32px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--tako-black)', margin: 0 };
const subStyle = { fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.5, margin: '12px 0 0' };
const fieldLabel = { display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)', marginBottom: 8 };

function softInput(extra = {}) {
  return { width: '100%', border: '1px solid transparent', background: 'var(--bg-3)', borderRadius: 12, padding: '16px 18px', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 16, color: 'var(--tako-black)', outline: 'none', transition: 'background .15s, border-color .15s, box-shadow .15s', ...extra };
}

// ---- Country selector -------------------------------------------------------
function CountrySelect({ value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ ...softInput(), width: 'auto', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', minWidth: 104 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, background: 'var(--tako-black)', color: '#fff', borderRadius: 5, padding: '2px 6px' }}>{value.code}</span>
        <span style={{ fontWeight: 700 }}>{value.dial}</span>
        <SIcon name="chevron-down" size={16} color="var(--fg-3)" style={{ marginLeft: 2 }} />
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 30, background: '#fff', borderRadius: 14, boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-1)', padding: 6, minWidth: 230, animation: 'float-up .16s cubic-bezier(.2,0,0,1)' }}>
          {COUNTRIES.map(co => (
            <button key={co.code} onClick={() => { onChange(co); setOpen(false); }} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '11px 12px', borderRadius: 9, border: 'none', cursor: 'pointer', background: value.code === co.code ? 'var(--bg-2)' : 'transparent', textAlign: 'left' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'} onMouseLeave={e => e.currentTarget.style.background = value.code === co.code ? 'var(--bg-2)' : 'transparent'}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, background: 'var(--tako-black)', color: '#fff', borderRadius: 5, padding: '2px 6px' }}>{co.code}</span>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, flex: 1 }}>{co.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg-3)' }}>{co.dial}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Step 1: contact entry + social + QR ------------------------------------
function EntryStep({ data, set, onContinue, onSocial, onQR }) {
  const [country, setCountry] = React.useState(COUNTRIES[0]);
  const [val, setVal] = React.useState(data.contactRaw || '');
  const [err, setErr] = React.useState('');
  const emailMode = isEmail(val) || (val.includes('@'));
  const submit = () => {
    const v = val.trim();
    if (!v) { setErr('Please enter a mobile number or email.'); return; }
    if (emailMode && !isEmail(v)) { setErr('Enter a valid email address.'); return; }
    if (!emailMode && !isPhoneish(v)) { setErr('Enter a valid mobile number.'); return; }
    // demo: numbers containing "000" are "blocked" → error modal
    if (!emailMode && v.replace(/\D/g, '').includes('000')) { onContinue({ blocked: true, country, val, emailMode }); return; }
    onContinue({ blocked: false, country, val, emailMode });
  };
  const divider = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '22px 0' }}>
      <span style={{ flex: 1, height: 1, background: 'var(--border-1)' }} />
      <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', fontWeight: 600 }}>or</span>
      <span style={{ flex: 1, height: 1, background: 'var(--border-1)' }} />
    </div>
  );
  const socialBtn = (icon, label, onClick) => (
    <button onClick={onClick} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: 'var(--bg-3)', border: 'none', borderRadius: 12, padding: '15px 18px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16, color: 'var(--tako-black)', cursor: 'pointer', transition: 'background .15s' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-200)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-3)'}>
      {icon} {label}
    </button>
  );
  return (
    <div>
      <h1 style={titleStyle}>What’s your mobile number or email?</h1>
      <div style={{ marginTop: 28, display: 'flex', gap: 10 }}>
        {!emailMode && <CountrySelect value={country} onChange={setCountry} />}
        <input autoFocus value={val} onChange={e => { setVal(e.target.value); setErr(''); }} onKeyDown={e => e.key === 'Enter' && submit()}
          placeholder="Enter mobile number or email"
          style={softInput({ flex: 1, borderColor: err ? 'var(--error)' : 'transparent' })}
          onFocus={e => { if (!err) e.target.style.boxShadow = '0 0 0 3px rgba(10,10,10,0.06)'; }} onBlur={e => e.target.style.boxShadow = 'none'} />
      </div>
      {err && <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600, color: 'var(--error)', margin: '10px 2px 0' }}>{err}</p>}
      <button onClick={submit} style={{ width: '100%', marginTop: 16, background: 'var(--tako-black)', color: '#fff', border: 'none', borderRadius: 12, padding: '16px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'filter .15s, transform .12s' }}
        onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.5)'} onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.99)'} onMouseUp={e => e.currentTarget.style.transform = 'none'}>Continue</button>
      {divider}
      <div style={{ display: 'grid', gap: 12 }}>
        {socialBtn(<GoogleG />, 'Continue with Google', () => onSocial('Google'))}
        {socialBtn(<AppleLogo size={20} color="var(--tako-black)" />, 'Continue with Apple', () => onSocial('Apple'))}
      </div>
      {divider}
      {socialBtn(<SIcon name="qr-code" size={20} />, 'Log in with QR code', onQR)}
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.5, margin: '24px 0 0' }}>
        By continuing, you agree to receive calls, WhatsApp or SMS messages from Tako, including by automated means. Reply STOP to opt out.
      </p>
    </div>
  );
}

// ---- QR login panel ---------------------------------------------------------
function QRPanel({ onBack }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={titleStyle}>Log in with QR code</h1>
      <p style={subStyle}>Open the Tako app, go to <strong>Account → Log in on web</strong>, and scan this code.</p>
      <div style={{ display: 'inline-block', marginTop: 28, padding: 18, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, boxShadow: 'var(--shadow-md)' }}>
        <QRCode value="tako-web-login-237" size={220} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20, color: 'var(--fg-2)' }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--tako-amber)' }} className="pulse" />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>Waiting for scan…</span>
      </div>
      <button onClick={onBack} style={{ marginTop: 28, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)', display: 'inline-flex', alignItems: 'center', gap: 8 }} className="link-amber">
        <SIcon name="arrow-left" size={18} /> Use phone or email instead
      </button>
    </div>
  );
}

// ---- Step 2: OTP ------------------------------------------------------------
function OtpStep({ data, onBack, onNext }) {
  const [digits, setDigits] = React.useState(['', '', '', '']);
  const [err, setErr] = React.useState(false);
  const [cooldown, setCooldown] = React.useState(0);
  const refs = React.useRef([]);
  React.useEffect(() => { refs.current[0] && refs.current[0].focus(); }, []);
  React.useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);
  const setAt = (i, v) => {
    v = v.replace(/\D/g, '').slice(-1);
    setErr(false);
    setDigits(d => { const n = [...d]; n[i] = v; return n; });
    if (v && i < 3) refs.current[i + 1] && refs.current[i + 1].focus();
  };
  const onKey = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) refs.current[i - 1] && refs.current[i - 1].focus();
  };
  const onPaste = (e) => {
    const txt = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 4);
    if (txt) { e.preventDefault(); const n = ['', '', '', '']; for (let i = 0; i < txt.length; i++) n[i] = txt[i]; setDigits(n); refs.current[Math.min(txt.length, 3)] && refs.current[Math.min(txt.length, 3)].focus(); }
  };
  const code = digits.join('');
  const full = code.length === 4;
  const submit = () => { if (!full) return; if (code === '0000') { setErr(true); return; } onNext(); };
  return (
    <div>
      <h1 style={titleStyle}>Enter the 4-digit code</h1>
      <p style={subStyle}>Sent to you at <strong style={{ color: 'var(--tako-black)' }}>{data.contact}</strong></p>
      <div style={{ display: 'flex', gap: 14, marginTop: 28 }} onPaste={onPaste}>
        {digits.map((d, i) => (
          <input key={i} ref={el => refs.current[i] = el} value={d} onChange={e => setAt(i, e.target.value)} onKeyDown={e => onKey(i, e)}
            inputMode="numeric" maxLength="1"
            style={{ width: 64, height: 72, textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--tako-black)',
              border: `2px solid ${err ? 'var(--error)' : d ? 'var(--tako-black)' : 'var(--border-1)'}`, borderRadius: 14, outline: 'none', background: '#fff', transition: 'border-color .15s' }}
            onFocus={e => { if (!err) e.target.style.borderColor = 'var(--tako-black)'; }}
            onBlur={e => { if (!err && !e.target.value) e.target.style.borderColor = 'var(--border-1)'; }} />
        ))}
      </div>
      {err && <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600, color: 'var(--error)', margin: '12px 2px 0' }}>The code you entered is incorrect.</p>}
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', margin: '14px 2px 0' }}>Tip: check your inbox and spam folders. (Demo: any 4 digits work; 0000 shows an error.)</p>
      <div style={{ marginTop: 22 }}>
        <button onClick={() => { if (cooldown === 0) setCooldown(30); }} disabled={cooldown > 0}
          style={{ background: 'var(--bg-3)', border: 'none', borderRadius: 999, padding: '10px 18px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: cooldown > 0 ? 'var(--fg-3)' : 'var(--tako-black)', cursor: cooldown > 0 ? 'default' : 'pointer' }}>
          {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend code'}
        </button>
      </div>
      <NavButtons onBack={onBack} onNext={submit} nextDisabled={!full} />
    </div>
  );
}

// ---- Step 3: name -----------------------------------------------------------
function NameStep({ data, set, onBack, onNext }) {
  const [first, setFirst] = React.useState(data.first || '');
  const [last, setLast] = React.useState(data.last || '');
  const ok = first.trim() && last.trim();
  const go = () => { if (!ok) return; set({ first: first.trim(), last: last.trim() }); onNext(); };
  return (
    <div>
      <h1 style={titleStyle}>What’s your name?</h1>
      <p style={subStyle}>Let us know how to address you.</p>
      <div style={{ marginTop: 28 }}>
        <label style={fieldLabel}>First name</label>
        <input autoFocus value={first} onChange={e => setFirst(e.target.value)} placeholder="Enter first name" style={softInput()}
          onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(10,10,10,0.06)'} onBlur={e => e.target.style.boxShadow = 'none'} />
      </div>
      <div style={{ marginTop: 18 }}>
        <label style={fieldLabel}>Last name</label>
        <input value={last} onChange={e => setLast(e.target.value)} onKeyDown={e => e.key === 'Enter' && go()} placeholder="Enter last name" style={softInput()}
          onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(10,10,10,0.06)'} onBlur={e => e.target.style.boxShadow = 'none'} />
      </div>
      <NavButtons onBack={onBack} onNext={go} nextDisabled={!ok} />
    </div>
  );
}

// ---- Step 4: mobile (optional) ---------------------------------------------
function MobileStep({ data, set, onBack, onNext }) {
  const [country, setCountry] = React.useState(COUNTRIES[0]);
  const [num, setNum] = React.useState(data.mobile || '');
  const save = () => { set({ mobile: num.trim() ? country.dial + ' ' + num.trim() : '' }); onNext(); };
  return (
    <div>
      <h1 style={titleStyle}>Add your mobile number <span style={{ color: 'var(--fg-3)', fontWeight: 700 }}>(optional)</span></h1>
      <p style={subStyle}>A mobile number helps with account recovery and ride updates.</p>
      <label style={{ ...fieldLabel, marginTop: 28 }}>Mobile</label>
      <div style={{ display: 'flex', gap: 10 }}>
        <CountrySelect value={country} onChange={setCountry} />
        <input autoFocus value={num} onChange={e => setNum(e.target.value)} onKeyDown={e => e.key === 'Enter' && save()} placeholder="6 71 23 45 67" style={softInput({ flex: 1 })}
          onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(10,10,10,0.06)'} onBlur={e => e.target.style.boxShadow = 'none'} />
      </div>
      <button onClick={save} style={{ marginTop: 22, background: 'var(--bg-3)', border: 'none', borderRadius: 999, padding: '10px 20px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--tako-black)', cursor: 'pointer' }}>Skip for now</button>
      <NavButtons onBack={onBack} onNext={save} nextLabel="Next" />
    </div>
  );
}

// ---- Step 5: terms ----------------------------------------------------------
function TermsStep({ data, set, onBack, onNext }) {
  const [agree, setAgree] = React.useState(!!data.agree);
  return (
    <div>
      <h1 style={titleStyle}>Accept Tako’s Terms &amp; review Privacy Notice</h1>
      <p style={subStyle}>
        By selecting “I agree” below, I have reviewed and agree to the <a href="#" className="link-amber" style={{ color: 'var(--tako-amber-deep)' }}>Terms of Use</a> and acknowledge the <a href="#" className="link-amber" style={{ color: 'var(--tako-amber-deep)' }}>Privacy Notice</a>. I am at least 18 years of age.
      </p>
      <div style={{ height: 1, background: 'var(--border-1)', margin: '32px 0 24px' }} />
      <button onClick={() => { setAgree(a => !a); set({ agree: !agree }); }} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--tako-black)' }}>I agree</span>
        <span style={{ width: 28, height: 28, borderRadius: 7, border: `2px solid ${agree ? 'var(--tako-black)' : 'var(--border-strong)'}`, background: agree ? 'var(--tako-black)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}>
          {agree && <SIcon name="check" size={18} color="#fff" />}
        </span>
      </button>
      <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!agree} nextLabel="Done" />
    </div>
  );
}

// ---- Success / redirect -----------------------------------------------------
function DoneStep({ data }) {
  React.useEffect(() => {
    try { localStorage.setItem('tako_user', JSON.stringify({ first: data.first, last: data.last, contact: data.contact, mobile: data.mobile })); } catch (e) {}
    const t = setTimeout(() => { window.location.href = 'index.html'; }, 1900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{ textAlign: 'center', paddingTop: 12 }}>
      <div style={{ width: 84, height: 84, borderRadius: 999, background: 'var(--tako-amber-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
        <div style={{ width: 60, height: 60, borderRadius: 999, background: 'var(--tako-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pulse">
          <SIcon name="check" size={30} color="var(--tako-black)" />
        </div>
      </div>
      <h1 style={titleStyle}>Welcome to Tako, {data.first || 'rider'}!</h1>
      <p style={subStyle}>Your account is ready. Taking you to your home screen…</p>
    </div>
  );
}

// ---- Error modal ------------------------------------------------------------
function ErrorModal({ onClose }) {
  const trace = React.useMemo(() => {
    const h = () => Math.abs(hash(Math.random() + '')).toString(16).padStart(8, '0').slice(0, 8);
    return `${h()}-${h().slice(0, 4)}-4${h().slice(0, 3)}-${h().slice(0, 4)}-${h()}${h().slice(0, 4)}`;
  }, []);
  const now = new Date().toString();
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(10,10,10,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'float-up .2s cubic-bezier(.2,0,0,1)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 20, padding: 36, maxWidth: 460, width: '100%', boxShadow: 'var(--shadow-xl)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: '0 0 12px', color: 'var(--tako-black)' }}>Unable to create account</h2>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>The number you entered is blocked. Choose another option to continue.</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', margin: '20px 0 4px' }}>Trace ID: {trace}</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', margin: 0 }}>{now}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 28 }}>
          <SBtn variant="primary" onClick={onClose}>Choose another option</SBtn>
        </div>
      </div>
    </div>
  );
}

// ---- Wizard root ------------------------------------------------------------
const ORDER = ['entry', 'otp', 'name', 'mobile', 'terms', 'done'];

function Auth() {
  useIcons();
  const [step, setStep] = React.useState('entry');
  const [mode, setMode] = React.useState('flow'); // 'flow' | 'qr'
  const [data, setData] = React.useState({ contact: '', contactRaw: '', first: '', last: '', mobile: '', agree: false, viaSocial: false });
  const [showError, setShowError] = React.useState(false);
  const set = (patch) => setData(d => ({ ...d, ...patch }));
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const progress = (ORDER.indexOf(step) + 1) / ORDER.length;

  const handleContinue = ({ blocked, country, val, emailMode }) => {
    if (blocked) { setShowError(true); return; }
    const contact = emailMode ? val.trim() : `${country.dial} ${val.trim()}`;
    set({ contact, contactRaw: val, viaSocial: false });
    setStep('otp');
  };
  const handleSocial = (provider) => {
    set({ contact: `${provider} account`, viaSocial: true });
    setStep('name'); // social skips OTP
  };

  const back = () => {
    if (step === 'name' && data.viaSocial) { setStep('entry'); return; }
    const i = ORDER.indexOf(step);
    if (i <= 0) { window.location.href = 'index.html'; return; }
    setStep(ORDER[i - 1]);
  };
  const next = () => { const i = ORDER.indexOf(step); setStep(ORDER[Math.min(ORDER.length - 1, i + 1)]); };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <AuthHeader progress={mode === 'qr' ? 0.16 : progress} />
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '6vh 24px 80px' }}>
        <div style={{ width: '100%', maxWidth: 440 }}>
          {mode === 'qr'
            ? <QRPanel onBack={() => setMode('flow')} />
            : (
              <React.Fragment>
                {step === 'entry' && <EntryStep data={data} set={set} onContinue={handleContinue} onSocial={handleSocial} onQR={() => setMode('qr')} />}
                {step === 'otp' && <OtpStep data={data} onBack={back} onNext={next} />}
                {step === 'name' && <NameStep data={data} set={set} onBack={back} onNext={next} />}
                {step === 'mobile' && <MobileStep data={data} set={set} onBack={back} onNext={next} />}
                {step === 'terms' && <TermsStep data={data} set={set} onBack={back} onNext={next} />}
                {step === 'done' && <DoneStep data={data} />}
              </React.Fragment>
            )}
        </div>
      </main>
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Auth />);
