/* =========================================================
   Happy Birthday Yogeshwar — script
   Edit CONFIG below to personalise names, dates & captions.
   ========================================================= */
const CONFIG = {
  friendName: 'Yogeshwar',
  nickName:   'Yogo',
  fromName:   'Raviraj',
  friendsSince: '2017-03-24',   // ← set the date (or year-01-01) you two became friends
  birthday: { month: 11, day: 11 },
};

/* 18 photos, oldest → newest */
const PHOTOS = [
  { src: '01.jpg', year: 'Mar 2017', cap: 'Where it all started' },
  { src: '02.jpg', year: 'Nov 2017', cap: 'The thinker on a phone call 📞' },
  { src: '03.jpg', year: 'Nov 2017', cap: 'Those iconic blue specs 👓' },
  { src: '04.jpg', year: 'Nov 2017', cap: 'Studying… or pretending 😂' },
  { src: '05.jpg', year: 'Nov 2017', cap: 'Sunny days, zero worries' },
  { src: '06.jpg', year: 'Nov 2017', cap: 'Same frame, same vibe' },
  { src: '07.jpg', year: 'Nov 2017', cap: 'Computer lab legends' },
  { src: '08.jpg', year: 'Jan 2018', cap: 'Peace ✌️ & full masti' },
  { src: '09.jpg', year: 'Sep 2019', cap: 'Growing up, side by side' },
  { src: '10.jpg', year: 'Dec 2020', cap: 'Miles apart, one call away' },
  { src: '11.jpg', year: 'Apr 2024', cap: 'Brothers. Always. 🤝' },
  { src: '12.jpg', year: 'Apr 2024', cap: 'Night skies & deep talks' },
  { src: '13.jpg', year: 'Jan 2025', cap: 'Mumbai, we have arrived 😎' },
  { src: '14.jpg', year: 'Jan 2025', cap: 'Pune swag × Mumbai style' },
  { src: '15.jpg', year: 'Jan 2025', cap: 'Sea-face sessions 🌊' },
  { src: '16.jpg', year: 'Jan 2025', cap: 'Marine Drive mood' },
  { src: '17.jpg', year: 'Jan 2025', cap: 'The squad, Mumbai edition' },
  { src: '18.jpg', year: 'Jan 2025', cap: 'Gateway to many more memories' },
].map(p => ({ ...p, src: 'assets/photos/' + p.src }));

const LETTER = `Happy Birthday, ${'Yogeshwar'}! 🎂

Bhai, some people come into our life for a while… and some become a part of it forever. You're the forever kind.

From our childhood days in Pune to you now living your dreams in Mumbai, so much has changed. The cities changed, our looks changed (thank god 😂), but our yaari never changed one bit.

Thank you for every laugh, every crazy plan, every late-night talk and for always standing with me, no matter what.

Distance is just a number on the expressway. Whenever you need me, I'm just one call away.

Stay happy, stay crazy, and keep shining in the city of dreams. ✨`;

const REASONS = [
  { emo: '🛡️', t: 'Always has my back',       p: 6,  back: 'No matter what happens, you stand with me. Every single time.' },
  { emo: '😂', t: 'Best partner in crime',    p: 8,  back: 'Our jokes, our masti and our plans. Nobody else gets them.' },
  { emo: '📞', t: 'One call away',            p: 10, back: 'Pune to Mumbai is 150 km. A call from you makes it zero.' },
  { emo: '🌆', t: 'Conquering Mumbai',        p: 13, back: 'The Pune boy who made the city of dreams his own. Proud of you!' },
  { emo: '🤝', t: 'Family I chose',           p: 11, back: 'Not by blood but by heart. You\'re the elder brother life gifted me.' },
  { emo: '♾️', t: 'Since childhood. Forever.', p: 17, back: 'From growing up together in Pune to Marine Drive, and this is just the beginning.' },
];

const WISHES = [
  { e: '🎂', t: `Happy Birthday ${'Yogeshwar'}! May this year bring you everything you've been working so hard for.` },
  { e: '🙏', t: 'वाढदिवसाच्या हार्दिक शुभेच्छा, भावा! 🎉', hi: true },
  { e: '🌊', t: 'May your Mumbai dreams grow bigger than the Arabian Sea and brighter than Marine Drive at night.' },
  { e: '💪', t: 'Wishing you health, success, and a promotion that makes everyone jealous 😎' },
  { e: '❤️', t: 'जन्मदिन मुबारक हो भाई! तू हमेशा खुश रहे, यही दुआ है।', hi: true },
  { e: '✈️', t: 'More trips, more photos, more memories. Next plan is on you this time! 😂' },
  { e: '🌟', t: 'Keep smiling the same way you did in that 2017 photo. Some things should never change.' },
  { e: '🤝', t: 'Brothers since childhood, brothers till the end. Happy Birthday, partner!' },
  { e: '🎁', t: 'Your gift is that I didn\'t post the really embarrassing photos. You\'re welcome 😜' },
];

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const rand = (a, b) => Math.random() * (b - a) + a;
const isMobile = matchMedia('(max-width: 820px)').matches;

/* =========================================================
   1. Background star sky + shooting stars
   ========================================================= */
(function sky() {
  const c = $('#sky'), x = c.getContext('2d');
  let w, h, stars = [], shooters = [];
  const resize = () => {
    w = c.width = innerWidth * devicePixelRatio; h = c.height = innerHeight * devicePixelRatio;
    const n = Math.min(260, Math.floor(innerWidth * innerHeight / 5000));
    stars = Array.from({ length: n }, () => ({ x: rand(0, w), y: rand(0, h), r: rand(.3, 1.5) * devicePixelRatio, p: rand(0, 6.28), s: rand(.005, .03) }));
  };
  resize(); addEventListener('resize', resize);
  (function loop() {
    x.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.p += s.s; x.globalAlpha = .35 + Math.sin(s.p) * .35 + .3;
      x.fillStyle = '#fff'; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.28); x.fill();
    }
    if (Math.random() < .006) shooters.push({ x: rand(0, w), y: rand(0, h * .4), vx: rand(6, 11) * devicePixelRatio, vy: rand(2, 4) * devicePixelRatio, l: 1 });
    shooters = shooters.filter(s => s.l > 0);
    for (const s of shooters) {
      const g = x.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
      g.addColorStop(0, `rgba(255,255,255,${s.l})`); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.globalAlpha = 1; x.strokeStyle = g; x.lineWidth = 2 * devicePixelRatio;
      x.beginPath(); x.moveTo(s.x, s.y); x.lineTo(s.x - s.vx * 12, s.y - s.vy * 12); x.stroke();
      s.x += s.vx; s.y += s.vy; s.l -= .015;
    }
    requestAnimationFrame(loop);
  })();
})();

/* Floating hearts / sparkles */
function spawnFloaters(set = ['❤️', '💖', '✨', '🎈', '🤍', '💫']) {
  const box = $('#floaters');
  setInterval(() => {
    if (document.hidden || box.childElementCount > 26) return;
    const f = document.createElement('span');
    f.className = 'floater';
    f.textContent = set[Math.floor(Math.random() * set.length)];
    f.style.left = rand(0, 100) + 'vw';
    f.style.fontSize = rand(14, 30) + 'px';
    f.style.setProperty('--drift', rand(-80, 80) + 'px');
    f.style.setProperty('--rot', rand(-60, 60) + 'deg');
    f.style.animationDuration = rand(9, 16) + 's';
    box.appendChild(f);
    f.addEventListener('animationend', () => f.remove());
  }, 650);
}
spawnFloaters();

/* =========================================================
   2. Confetti + Fireworks engine
   ========================================================= */
const FX = (() => {
  const c = $('#fx'), x = c.getContext('2d');
  let parts = [], running = false;
  const DPR = Math.min(devicePixelRatio, 2);
  const size = () => { c.width = innerWidth * DPR; c.height = innerHeight * DPR; };
  size(); addEventListener('resize', size);
  const colors = ['#ff4d8d', '#ffcf6b', '#00d4ff', '#8a5cff', '#ffb347', '#7CFFB2', '#ffffff'];
  function tick() {
    x.clearRect(0, 0, c.width, c.height);
    parts = parts.filter(p => p.life > 0);
    for (const p of parts) {
      p.vy += p.g; p.vx *= p.drag; p.vy *= p.drag; p.x += p.vx; p.y += p.vy; p.life -= p.decay; p.rot += p.vr;
      x.globalAlpha = Math.max(0, Math.min(1, p.life));
      x.fillStyle = p.c;
      if (p.type === 'conf') {
        x.save(); x.translate(p.x, p.y); x.rotate(p.rot); x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore();
      } else {
        x.beginPath(); x.arc(p.x, p.y, p.s, 0, 6.28); x.fill();
      }
      if (p.type === 'rocket' && p.vy >= -1) { burst(p.x, p.y); p.life = 0; }
    }
    if (parts.length) requestAnimationFrame(tick); else { running = false; x.clearRect(0, 0, c.width, c.height); }
  }
  const go = () => { if (!running) { running = true; requestAnimationFrame(tick); } };
  function confetti(n = 160, ox = .5, oy = .35) {
    for (let i = 0; i < n; i++) {
      const a = rand(0, 6.28), v = rand(4, 14) * DPR;
      parts.push({ type: 'conf', x: c.width * ox, y: c.height * oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6 * DPR, g: .25 * DPR, drag: .985, s: rand(6, 12) * DPR, c: colors[i % colors.length], life: 1.6, decay: .006, rot: rand(0, 6), vr: rand(-.3, .3) });
    }
    go();
  }
  function burst(bx, by) {
    const col = colors[Math.floor(Math.random() * colors.length)], n = 70;
    const heart = Math.random() < .35;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * 6.28; let vx, vy;
      if (heart) { vx = 16 * Math.sin(t) ** 3; vy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)); vx *= .38 * DPR; vy *= .38 * DPR; }
      else { const v = rand(2, 7) * DPR; vx = Math.cos(t) * v; vy = Math.sin(t) * v; }
      parts.push({ type: 'spark', x: bx, y: by, vx, vy, g: .06 * DPR, drag: .975, s: rand(1.4, 2.6) * DPR, c: col, life: 1, decay: rand(.010, .018), rot: 0, vr: 0 });
    }
  }
  function fireworks(count = 7) {
    for (let i = 0; i < count; i++) setTimeout(() => {
      parts.push({ type: 'rocket', x: rand(.15, .85) * c.width, y: c.height, vx: rand(-1, 1) * DPR, vy: -rand(11, 15) * DPR, g: .18 * DPR, drag: .995, s: 2.4 * DPR, c: '#fff6d5', life: 3, decay: .002, rot: 0, vr: 0 });
      go();
    }, i * 380);
  }
  return { confetti, fireworks };
})();

/* =========================================================
   3. Intro → Picker → Main flow
   ========================================================= */
const audio = $('#audio');
const intro = $('#intro'), picker = $('#picker'), main = $('#main');

function openEnvelope() {
  const env = $('#envelope');
  if (env.classList.contains('open')) return;
  env.classList.add('open');
  FX.confetti(90, .5, .45);
  // unlock audio element inside the user gesture (iOS)
  audio.muted = true; audio.play().catch(() => {}); audio.pause(); audio.muted = false;
  setTimeout(() => { intro.classList.remove('active'); picker.classList.add('active'); }, 1700);
}
$('#envelope').addEventListener('click', openEnvelope);
$('#envelope').addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && openEnvelope());

function playSong(src, name) {
  audio.src = src; audio.loop = true; audio.volume = 1;
  audio.play().catch(() => { $('#player').classList.add('paused'); $('#playBtn').textContent = '▶'; });
  $('#songName').textContent = name;
  $$('.song-menu button').forEach(b => b.classList.toggle('on', b.dataset.song === src));
  $('#player').classList.remove('paused'); $('#playBtn').textContent = '❚❚';
}

$$('.vinyl-card').forEach(card => card.addEventListener('click', () => {
  $$('.vinyl-card').forEach(c => c.classList.remove('chosen'));
  card.classList.add('chosen');
  playSong(card.dataset.song, card.dataset.name);
  setTimeout(startMain, 1100);
}, { once: false }));

let started = false;
function startMain() {
  if (started) return; started = true;
  picker.classList.remove('active');
  setTimeout(() => {
    document.body.classList.remove('locked');
    main.classList.add('active');
    $('#player').hidden = false;
    window.scrollTo(0, 0);
    buildHero(); buildTimeline(); buildRing(); buildFlips(); buildWishes(); buildCake();
    initReveal(); initRoute(); initLetter3D();
    setTimeout(() => FX.confetti(220, .5, .3), 500);
    setTimeout(() => FX.fireworks(5), 1800);
  }, 700);
}

/* Player controls */
$('#playBtn').addEventListener('click', () => {
  if (audio.paused) { audio.play(); $('#player').classList.remove('paused'); $('#playBtn').textContent = '❚❚'; }
  else { audio.pause(); $('#player').classList.add('paused'); $('#playBtn').textContent = '▶'; }
});
$('#changeBtn').addEventListener('click', e => { e.stopPropagation(); $('#songMenu').hidden = !$('#songMenu').hidden; });
$$('.song-menu button').forEach(b => b.addEventListener('click', () => { playSong(b.dataset.song, b.dataset.name); $('#songMenu').hidden = true; }));
document.addEventListener('click', e => { if (!e.target.closest('#songMenu')) $('#songMenu').hidden = true; });

/* =========================================================
   4. Hero
   ========================================================= */
function splitText(el) {
  const txt = el.textContent; el.textContent = '';
  [...txt].forEach((ch, i) => {
    const s = document.createElement('span');
    s.className = 'ch'; s.style.setProperty('--i', i + (el.classList.contains('line2') ? 10 : 0));
    s.textContent = ch === ' ' ? ' ' : ch; el.appendChild(s);
  });
}
function buildHero() {
  $$('[data-split]').forEach(splitText);
  const box = $('#balloons'), cols = ['#ff4d8d', '#ffcf6b', '#00d4ff', '#8a5cff', '#ff8a65', '#7CFFB2'];
  for (let i = 0; i < (isMobile ? 8 : 14); i++) {
    const b = document.createElement('div'); const col = cols[i % cols.length];
    b.className = 'balloon'; b.innerHTML = '<i></i>';
    b.style.cssText = `left:${rand(2, 94)}%;background:radial-gradient(circle at 30% 30%, ${col}, ${col}cc 60%, ${col}88);--bc:${col};animation-duration:${rand(12, 22)}s;animation-delay:${-rand(0, 20)}s;transform:scale(${rand(.6, 1.1)})`;
    box.appendChild(b);
  }
  // years / days of friendship
  const since = new Date(CONFIG.friendsSince), now = new Date();
  const days = Math.floor((now - since) / 864e5);
  const years = Math.floor(days / 365.25);
  countUp($('#cYears'), years, 1800); countUp($('#cDays'), days, 2400);
}
function countUp(el, to, dur) {
  const t0 = performance.now() + 2200;
  (function f(t) {
    const k = Math.min(1, Math.max(0, (t - t0) / dur)); const e = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(to * e).toLocaleString('en-IN');
    if (k < 1) requestAnimationFrame(f);
  })(performance.now());
}

/* =========================================================
   5. Pune ❤ Mumbai route animation
   ========================================================= */
function initRoute() {
  const path = $('#routePath'), trav = $('#traveler'), L = path.getTotalLength(), km = $('#kmCount');
  let t = 0, dir = 1;
  (function f() {
    t += dir * .0035; if (t >= 1 || t <= 0) { dir *= -1; t = Math.max(0, Math.min(1, t)); }
    const e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const p = path.getPointAtLength(e * L);
    trav.setAttribute('transform', `translate(${p.x},${p.y}) scale(${1 + Math.sin(e * Math.PI) * .4})`);
    km.textContent = Math.round(150 * (dir > 0 ? 1 - e : e));
    requestAnimationFrame(f);
  })();
}

/* =========================================================
   6. Timeline
   ========================================================= */
function buildTimeline() {
  const list = $('#timelineList');
  PHOTOS.forEach((p, i) => {
    const it = document.createElement('div');
    it.className = 't-item reveal';
    it.innerHTML = `<span class="t-year">${p.year}</span>
      <div class="polaroid" style="--r:${(i % 2 ? 1 : -1) * rand(2, 5)}deg" data-idx="${i}">
        <div class="ph"><img src="${p.src}" alt="${p.cap}" loading="lazy"/></div>
        <p>${p.cap}</p>
      </div>`;
    list.appendChild(it);
  });
  list.addEventListener('click', e => { const p = e.target.closest('.polaroid'); if (p) openLB(+p.dataset.idx); });
}

/* =========================================================
   7. 3D Memory Wheel (drag + auto-rotate + inertia)
   ========================================================= */
function buildRing() {
  const ring = $('#ring'), stage = $('#stage');
  PHOTOS.forEach((p, i) => {
    const c = document.createElement('div'); c.className = 'card'; c.style.setProperty('--i', i); c.dataset.idx = i;
    c.innerHTML = `<img src="${p.src}" alt="${p.cap}" loading="lazy" draggable="false"/>`;
    ring.appendChild(c);
  });
  let rot = 0, vel = .18, drag = false, lastX = 0, moved = 0, tilt = -8;
  stage.addEventListener('pointerdown', e => { drag = true; lastX = e.clientX; moved = 0; stage.setPointerCapture(e.pointerId); });
  stage.addEventListener('pointermove', e => {
    if (!drag) return; const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx);
    rot += dx * .35; vel = dx * .35;
  });
  const end = e => {
    if (!drag) return; drag = false;
    if (moved < 6) { const el = document.elementsFromPoint(e.clientX, e.clientY).find(n => n.classList && n.classList.contains('card')); if (el) openLB(+el.dataset.idx); }
  };
  stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', () => drag = false);
  (function f() {
    if (!drag) { vel += (0.18 - vel) * .02; rot += vel; }
    ring.style.transform = `rotateX(${tilt}deg) rotateY(${rot}deg)`;
    requestAnimationFrame(f);
  })();
}

/* =========================================================
   8. Letter typewriter (starts when visible)
   ========================================================= */
let typedStarted = false;
const HIGHLIGHT = /^(forever|yaari|brother|Bhai|Yogeshwar|Mumbai|Pune|childhood|always|shining|one call away)/i;
function typeLetter() {
  if (typedStarted) return; typedStarted = true;
  const el = $('#typed'), txt = LETTER.replace(/Yogeshwar/g, CONFIG.friendName);
  el.innerHTML = '';
  const paras = txt.split(/\n\s*\n/);
  const quill = document.createElement('span'); quill.className = 'quill'; quill.textContent = '✒️';
  let delay = 0, pi = 0;
  const words = [];
  paras.forEach(p => {
    const pe = document.createElement('p'); pe.className = 'para'; el.appendChild(pe);
    p.trim().split(/\s+/).forEach(w => {
      const s = document.createElement('span'); s.className = 'w' + (HIGHLIGHT.test(w.replace(/[^\w]/g, '')) ? ' hl' : '');
      s.textContent = w; words.push([pe, s]);
    });
    words.push([pe, null]); // paragraph pause marker
  });
  let i = 0;
  (function next() {
    if (i >= words.length) { quill.remove(); finishLetter(); return; }
    const [pe, s] = words[i++];
    if (!s) { setTimeout(next, 450); return; }
    pe.appendChild(s); pe.appendChild(document.createTextNode(' ')); pe.appendChild(quill);
    const last = s.textContent.slice(-1);
    setTimeout(next, /[.!?]/.test(last) ? 320 : /,/.test(last) ? 180 : 75);
  })();
}
function finishLetter() {
  $('#sign').classList.add('show');
  setTimeout(() => {
    $('#waxSeal').classList.add('show');
    const r = $('#waxSeal').getBoundingClientRect();
    FX.confetti(70, (r.left + r.width / 2) / innerWidth, (r.top + r.height / 2) / innerHeight);
  }, 1800);
}
function initLetter3D() {
  const scene = $('#letterScene'), card = $('#letterCard'), glare = $('#glare');
  // become "live" (tiltable) after unfold animation
  card.addEventListener('animationend', e => { if (e.animationName === 'unfold') card.classList.add('live'); });
  const set = (x, y) => { // x,y in -1..1
    card.style.setProperty('--ry', (x * 10).toFixed(2) + 'deg');
    card.style.setProperty('--rx', (-y * 8).toFixed(2) + 'deg');
    glare.style.setProperty('--gx', (50 + x * 50) + '%'); glare.style.setProperty('--gy', (50 + y * 50) + '%');
  };
  scene.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const r = card.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
    glare.style.setProperty('--go', 1);
  });
  scene.addEventListener('pointerleave', () => { set(0, 0); glare.style.setProperty('--go', 0); });
  addEventListener('deviceorientation', e => {
    if (e.gamma == null) return;
    set(Math.max(-1, Math.min(1, e.gamma / 30)), Math.max(-1, Math.min(1, (e.beta - 45) / 30)));
    glare.style.setProperty('--go', .7);
  });
  // gentle idle sway on touch devices
  if (matchMedia('(hover: none)').matches) {
    let t = 0; (function sway() { if (!window.__gyro) { t += .015; set(Math.sin(t) * .5, Math.cos(t * .8) * .3); } requestAnimationFrame(sway); })();
    addEventListener('deviceorientation', () => window.__gyro = true, { once: true });
  }
  // floating hearts inside the paper
  const box = $('#letterHearts');
  setInterval(() => {
    if (!scene.classList.contains('in') || box.childElementCount > 10) return;
    const h = document.createElement('span');
    h.textContent = ['❤️', '💗', '✨', '💌'][Math.floor(Math.random() * 4)];
    h.style.left = rand(5, 95) + '%'; h.style.fontSize = rand(12, 24) + 'px';
    h.style.setProperty('--dx', rand(-40, 40) + 'px'); h.style.setProperty('--rt', rand(-40, 40) + 'deg');
    h.style.animationDuration = rand(6, 10) + 's';
    box.appendChild(h); h.addEventListener('animationend', () => h.remove());
  }, 900);
}

/* =========================================================
   9. Flip cards
   ========================================================= */
function buildFlips() {
  const g = $('#flipGrid');
  REASONS.forEach((r, i) => {
    const f = document.createElement('div'); f.className = 'flip reveal'; f.style.transitionDelay = (i % 3) * .12 + 's';
    f.innerHTML = `<div class="flip-inner">
      <div class="flip-face flip-front"><span class="num">0${i + 1}</span><span class="emo">${r.emo}</span><h4>${r.t}</h4><small>tap to flip</small></div>
      <div class="flip-face flip-back"><img src="${PHOTOS[r.p].src}" alt="" loading="lazy"/><p>${r.back}</p></div></div>`;
    f.addEventListener('click', () => f.classList.toggle('flipped'));
    g.appendChild(f);
  });
}

/* =========================================================
   10. Wishes
   ========================================================= */
function buildWishes() {
  const b = $('#wishBoard');
  WISHES.forEach((w, i) => {
    const d = document.createElement('div'); d.className = 'wish reveal' + (w.hi ? ' hi' : '');
    d.style.transitionDelay = (i % 3) * .1 + 's';
    d.innerHTML = `<span class="w-emo">${w.e}</span><p>${w.t.replace('Yogeshwar', CONFIG.friendName)}</p>`;
    b.appendChild(d);
  });
}

/* =========================================================
   11. Cake & candles
   ========================================================= */
function buildCake() {
  const box = $('#candles'); let out = 0; const N = 5;
  for (let i = 0; i < N; i++) {
    const c = document.createElement('div'); c.className = 'candle'; c.innerHTML = '<span class="flame"></span><span class="smoke"></span>';
    c.addEventListener('click', () => {
      if (c.classList.contains('out')) return; c.classList.add('out'); out++;
      if (out === N) {
        $('#cakeHint').innerHTML = '🎉 Wish granted! Happy Birthday, <b>' + CONFIG.nickName + '</b>! 🎉';
        FX.confetti(260, .5, .55); FX.fireworks(9);
        setTimeout(() => $('#finale').scrollIntoView({ behavior: 'smooth' }), 3200);
      }
    });
    box.appendChild(c);
  }
}
$('#replayFx').addEventListener('click', () => { FX.fireworks(10); FX.confetti(150, .5, .4); });

/* =========================================================
   12. Scroll reveals
   ========================================================= */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    if (e.target.id === 'letterScene') setTimeout(typeLetter, 1300);
    io.unobserve(e.target);
  }), { threshold: .18 });
  $$('.reveal').forEach(el => io.observe(el));
  // finale fireworks once
  const fo = new IntersectionObserver(es => { if (es[0].isIntersecting) { FX.fireworks(8); fo.disconnect(); } }, { threshold: .5 });
  fo.observe($('#finale'));
}

/* =========================================================
   13. Lightbox
   ========================================================= */
let lbIdx = 0;
function openLB(i) { lbIdx = (i + PHOTOS.length) % PHOTOS.length; const p = PHOTOS[lbIdx]; const img = $('#lbImg'); img.style.animation = 'none'; img.offsetHeight; img.style.animation = ''; img.src = p.src; $('#lbCap').textContent = p.cap + ' · ' + p.year; $('#lightbox').hidden = false; }
$('#lbClose').addEventListener('click', () => $('#lightbox').hidden = true);
$('#lbPrev').addEventListener('click', e => { e.stopPropagation(); openLB(lbIdx - 1); });
$('#lbNext').addEventListener('click', e => { e.stopPropagation(); openLB(lbIdx + 1); });
$('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') $('#lightbox').hidden = true; });
addEventListener('keydown', e => {
  if ($('#lightbox').hidden) return;
  if (e.key === 'Escape') $('#lightbox').hidden = true;
  if (e.key === 'ArrowLeft') openLB(lbIdx - 1);
  if (e.key === 'ArrowRight') openLB(lbIdx + 1);
});
let tsx = 0;
$('#lightbox').addEventListener('touchstart', e => tsx = e.touches[0].clientX, { passive: true });
$('#lightbox').addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tsx; if (Math.abs(d) > 50) openLB(lbIdx + (d < 0 ? 1 : -1)); });

/* Pause music when tab hidden? No — keep playing as requested. Preload first photos. */
PHOTOS.slice(0, 4).forEach(p => { const i = new Image(); i.src = p.src; });
