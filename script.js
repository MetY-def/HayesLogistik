/* ============================================
   HAYES LOGISTIK — SETTINGS
   Passe diese Werte an eure echten Daten an.
   ============================================ */
const CONFIG = {
  discordInvite: "https://discord.gg/JYTReebRTb",
  bewerbungsLink: "https://trucksbook.eu/company/226854",
  gegruendet: "2026",
};



/* ============================================
   ICONS (inline SVG, currentColor)
   ============================================ */
const ICON = {
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 7h11v9H2z"/><path d="M13 10h4l4 3v3h-8z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,
  route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="6" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="M5 8.3V13a4 4 0 0 0 4 4h6"/></svg>`,
  team: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="18" cy="9" r="2.4"/><path d="M16 14.2c2.7.4 5 2.4 5 5.8"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 20 5v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.9 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.9-4-9s1.4-6.4 4-9z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l5 5L20 6"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2.2 5.8L9 17l2.2-5.8z"/></svg>`,
  radio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="15" r="2"/><path d="M6 11a8 8 0 0 1 12 0M3 8a12 12 0 0 1 18 0"/></svg>`,
  weight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 4h8l2 4H6z"/><path d="M4 8h16l-2.2 12H6.2z"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5.4A17 17 0 0 0 15.6 4l-.3.6c1.7.4 2.7.9 3.7 1.6-1.6-.8-3.2-1.2-4.9-1.2s-3.3.4-4.9 1.2c1-.7 2.2-1.3 3.7-1.6L12.6 4A17 17 0 0 0 8.2 5.4C5.6 9.1 4.9 12.7 5.2 16.3a17 17 0 0 0 4.9 2.4l.6-1c-.9-.3-1.7-.7-2.4-1.2l.4-.3a11.6 11.6 0 0 0 9.6 0l.4.3c-.7.5-1.5.9-2.4 1.2l.6 1a17 17 0 0 0 4.9-2.4c.4-4.2-.6-7.8-2.8-10.9zM9.7 14.3c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm4.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>`,
};

/* ============================================
   HERO ROAD SVG
   ============================================ */
function heroRoadSVG(){
  return `
  <svg class="hero-road" viewBox="0 0 520 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <linearGradient id="fadeUp" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#e11c2e" stop-opacity="0"/>
        <stop offset="100%" stop-color="#e11c2e" stop-opacity=".9"/>
      </linearGradient>
    </defs>
    <path d="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"
          fill="none" stroke="#232630" stroke-width="34" stroke-linecap="round"/>
    <path d="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"
          fill="none" stroke="url(#fadeUp)" stroke-width="34" stroke-linecap="round" opacity=".5"/>
    <path id="dashline" d="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"
          fill="none" stroke="#f5f6f7" stroke-width="2.5" stroke-dasharray="14 16" stroke-linecap="round" opacity=".8"/>
    <circle r="5" fill="#ff3b4e">
      <animateMotion dur="3.2s" repeatCount="indefinite"
        path="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"/>
    </circle>
  </svg>`;
}

/* ============================================
   PAGE TEMPLATES
   ============================================ */
const routeLabel = (crumbs) => `
  <div class="route-label">
    ${crumbs.map((c,i)=> i < crumbs.length-1 ? `<span>${c}</span><span class="sep">/</span>` : `<span style="color:var(--silver)">${c}</span>`).join('')}
  </div>`;

const pages = {};

/* ---------- START ---------- */
pages['/'] = () => `
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-copy reveal in">
        <div class="eyebrow">Euro Truck Simulator 2 · Rollenspiel-Netzwerk</div>
        <h1>HAYES <span class="accent">LOGISTIK</span></h1>
        <div class="tagline">Gemeinsam. <span class="w">Weiter.</span> Ans Ziel.</div>
        <p class="hero-lede">Wir sind eine Community von Fahrerinnen und Fahrern, die im virtuellen Fernverkehr durch ganz Europa unterwegs sind — organisiert, verlässlich und mit echtem Team-Gedanken. Vom ersten Kilometer bis zur Ausfahrt im Konvoi.</p>
        <div class="hero-ctas">
          <a href="#/karriere" class="btn btn-primary" data-route="/karriere">Jetzt bewerben</a>
          <a href="#/kontakt" class="btn btn-ghost" data-route="/kontakt">Discord beitreten</a>
        </div>
      </div>
      <div class="hero-visual reveal in">${heroRoadSVG()}</div>
    </div>
  </section>

  <section class="stats-strip">
    <div class="container">
      <div class="stat"><span class="num">5</span><span class="label">Aktive Fahrer</span></div>
      <div class="stat"><span class="num">${CONFIG.gegruendet}</span><span class="label">Gegründet</span></div>
      <div class="stat"><span class="num">EU<span class="unit">-27</span> · USA</span><span class="label">Streckennetz</span></div>
      <div class="stat"><span class="num">DE<span class="unit">·AT·CH</span></span><span class="label">Sprachraum</span></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Was wir tun</div>
        <h2>Ein Fuhrpark, vier Sparten, ein Ziel</h2>
        <p>Von planbaren Linienrouten bis zum spontanen Sondertransport — bei Hayes Logistik findet jede Fahrerin und jeder Fahrer die Strecke, die zum eigenen Spielstil passt.</p>
      </div>
      <div class="grid grid-4">
        <div class="card reveal">
          <div class="icon">${ICON.route}</div>
          <h3>Fernverkehr Europa</h3>
          <p>Feste Linienrouten quer durch Europa, im Konvoi oder solo — planbar und mit klaren Zeitfenstern.</p>
          <a href="#/leistungen/fernverkehr" class="card-link" data-route="/leistungen/fernverkehr">Mehr erfahren</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.compass}</div>
          <h3>Fernverkehr USA</h3>
          <p>Neu seit 27.08.2026: Strecken quer durch die USA im American Truck Simulator, mit derselben Disposition wie in Europa.</p>
          <a href="#/leistungen/usa" class="card-link" data-route="/leistungen/usa">Mehr erfahren</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.weight}</div>
          <h3>Sondertransporte</h3>
          <p>Schwer- und Sondergüter, Eventfahrten und Begleitfahrzeuge für die anspruchsvollen Strecken.</p>
          <a href="#/leistungen/sondertransporte" class="card-link" data-route="/leistungen/sondertransporte">Mehr erfahren</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.radio}</div>
          <h3>Spedition &amp; Disposition</h3>
          <p>Routenplanung, Auftragsvergabe und Koordination — organisiert über unseren Discord-Server.</p>
          <a href="#/leistungen/spedition" class="card-link" data-route="/leistungen/spedition">Mehr erfahren</a>
        </div>
      </div>
    </div>
  </section>

  <div class="road-divider"></div>

  <section class="section">
    <div class="container">
      <div class="pillars reveal">
        <div class="pillar"><div class="icon">${ICON.team}</div><h4>Teamwork</h4></div>
        <div class="pillar"><div class="icon">${ICON.shield}</div><h4>Zuverlässigkeit</h4></div>
        <div class="pillar"><div class="icon">${ICON.route}</div><h4>Weg. Ziel. Zusammen.</h4></div>
        <div class="pillar"><div class="icon">${ICON.globe}</div><h4>Europaweit</h4></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="cta-banner reveal">
        <div>
          <h2>Lust, den Motor zu starten?</h2>
          <p>Wir suchen laufend neue Fahrerinnen und Fahrer, die Lust auf Community, Konvois und ein Stück virtuelle Straße haben.</p>
        </div>
        <div class="cta-banner-actions">
          <a href="#/karriere" class="btn btn-primary" data-route="/karriere">Bewerbung starten</a>
          <a href="#/flotte" class="btn btn-ghost" data-route="/flotte">Flotte ansehen</a>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- UNTERNEHMEN / ÜBER UNS ---------- */
pages['/unternehmen'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Unternehmen','Über uns'])}
      <h1>Über Hayes Logistik</h1>
      <p>Aus einer kleinen Fahrgemeinschaft im Discord ist ein festes Team geworden — mit eigener Flotte, eigenen Routen und eigenem Anspruch an Zuverlässigkeit.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">Unsere Geschichte</div>
          <h2>Von der ersten Fahrt zum festen Netzwerk</h2>
          <p>Hayes Logistik entstand ${CONFIG.gegruendet} aus dem Wunsch heraus, den virtuellen Fernverkehr in Euro Truck Simulator 2 nicht dem Zufall zu überlassen. Statt loser Solofahrten wollten wir feste Strukturen: geplante Routen, verlässliche Ansprechpartner und ein Team, auf das man sich verlassen kann — egal ob um Mitternacht auf der Autobahn oder beim gemeinsamen Konvoi am Wochenende.</p>
          <p>Heute sind wir eine feste Größe in unserer Community: mit eigenem Fuhrpark, klaren Zuständigkeiten in der Disposition und einem Bewerbungsprozess, der neue Fahrerinnen und Fahrer behutsam ins Team einführt.</p>
        </div>
        <div class="panel reveal" style="padding:40px;">
          <div class="quote-block">
            <p>„Es geht nicht nur um Kilometer. Es geht darum, gemeinsam anzukommen.“</p>
            <cite>— Gründungsteam, Hayes Logistik</cite>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="road-divider"></div>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Wie wir arbeiten</div>
        <h2>Strukturiert, aber ohne den Spaß zu verlieren</h2>
      </div>
      <div class="grid grid-3">
        <div class="card reveal">
          <div class="icon">${ICON.compass}</div>
          <h3>Feste Routen</h3>
          <p>Jede Fahrt ist geplant — von der Beladung bis zur Ankunft, abgestimmt über unsere Disposition.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.team}</div>
          <h3>Echtes Team</h3>
          <p>Konvois, gemeinsame Events und ein Discord, in dem man nie allein auf der Strecke ist.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.wrench}</div>
          <h3>Klare Standards</h3>
          <p>Von Fahrverhalten bis Funkdisziplin — feste Richtlinien sorgen für ein angenehmes Miteinander.</p>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- WERTE ---------- */
pages['/werte'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Unternehmen','Werte'])}
      <h1>Unsere Werte</h1>
      <p>Vier Grundsätze, die jede Fahrt bei Hayes Logistik tragen.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid grid-2">
        <div class="card reveal">
          <div class="icon">${ICON.team}</div>
          <h3>Teamwork</h3>
          <p>Keiner fährt allein, wenn er nicht möchte. Konvois, gegenseitige Unterstützung bei Problemen auf der Strecke und ein offenes Ohr in der Disposition gehören für uns zum Standard.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.shield}</div>
          <h3>Zuverlässigkeit</h3>
          <p>Ein zugesagter Slot wird gehalten, eine Ladung kommt an. Verlässlichkeit ist die Grundlage, auf der unser gesamtes Netzwerk aufbaut.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.route}</div>
          <h3>Weg. Ziel. Zusammen.</h3>
          <p>Es zählt nicht nur die Ankunft — der gemeinsame Weg dorthin macht den Unterschied. Wir feiern Etappen genauso wie Ziele.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.globe}</div>
          <h3>Europaweit</h3>
          <p>Unser Streckennetz kennt keine Grenzen. Von Skandinavien bis zur Iberischen Halbinsel — wir sind überall dort unterwegs, wo die Straße hinführt.</p>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- TEAM ---------- */
pages['/team'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Unternehmen','Team & Disposition'])}
      <h1>Team &amp; Disposition</h1>
      <p>Die Köpfe hinter der Planung — vom Streckennetz bis zur Aufnahme neuer Fahrer.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="people-grid">
        <div class="person reveal">
          <div class="avatar">MH</div>
          <h4>Marla Hayes</h4>
          <div class="role">Inhaberin</div>
          <p>Gründerin von Hayes Logistik und verantwortlich für die Ausrichtung des gesamten Netzwerks.</p>
        </div>
        <div class="person reveal">
          <div class="avatar">KH</div>
          <h4>Kura Hayes</h4>
          <div class="role">Geschäftsführung</div>
          <p>Verantwortlich für die operative Leitung und das große Ganze im Tagesgeschäft.</p>
        </div>
        <div class="person reveal">
          <div class="avatar">?</div>
          <h4>Position offen</h4>
          <div class="role">Stellvertretung &amp; Disposition</div>
          <p>Vertritt die Geschäftsführung und plant gemeinsam die Routen und Aufträge des Teams.</p>
        </div>
        <div class="person reveal">
          <div class="avatar">?</div>
          <h4>Position offen</h4>
          <div class="role">Stellvertretung</div>
          <p>Vertritt die Geschäftsführung und unterstützt bei allen organisatorischen Fragen.</p>
        </div>
      </div>
      <p style="margin-top:36px;font-size:.92rem;color:var(--muted);max-width:640px;">Namen und Rollen der Disposition findet ihr im Detail auf unserem Discord-Server — dort ist das Team auch direkt ansprechbar.</p>
    </div>
  </section>
`;

/* ---------- LEISTUNGEN — ÜBERSICHT ---------- */
pages['/leistungen'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Leistungen','Übersicht'])}
      <h1>Leistungen</h1>
      <p>Drei Sparten, die unser Streckennetz tragen — jede mit eigenem Anspruch und eigener Zielgruppe.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid grid-4">
        <div class="card reveal">
          <div class="icon">${ICON.route}</div>
          <h3>Fernverkehr Europa</h3>
          <p>Planbare Linienrouten quer durch Europa — solo oder im Konvoi, mit festen Zeitfenstern.</p>
          <a href="#/leistungen/fernverkehr" class="card-link" data-route="/leistungen/fernverkehr">Details ansehen</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.compass}</div>
          <h3>Fernverkehr USA</h3>
          <p>Unsere neue Sparte im American Truck Simulator — Strecken quer durch die USA, seit 27.08.2026.</p>
          <a href="#/leistungen/usa" class="card-link" data-route="/leistungen/usa">Details ansehen</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.weight}</div>
          <h3>Sondertransporte</h3>
          <p>Schwergut, Eventfahrten und Sondergüter für alle, die es etwas anspruchsvoller mögen.</p>
          <a href="#/leistungen/sondertransporte" class="card-link" data-route="/leistungen/sondertransporte">Details ansehen</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.radio}</div>
          <h3>Spedition &amp; Disposition</h3>
          <p>Koordination, Routenplanung und Auftragsvergabe für ein reibungsloses Netzwerk.</p>
          <a href="#/leistungen/spedition" class="card-link" data-route="/leistungen/spedition">Details ansehen</a>
        </div>
      </div>
    </div>
  </section>
`;

const serviceDetail = (title, eyebrow, lede, points, icon) => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Leistungen', title])}
      <h1>${title}</h1>
      <p>${lede}</p>
    </div>
  </div>
  <section class="section">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">${eyebrow}</div>
          <h2>Was das für euch bedeutet</h2>
          <ul class="check-list" style="grid-template-columns:1fr;margin-top:22px;">
            ${points.map(p => `<li>${ICON.check}<span>${p}</span></li>`).join('')}
          </ul>
        </div>
        <div class="panel reveal" style="padding:48px;display:flex;align-items:center;justify-content:center;">
          <div style="width:120px;height:120px;color:var(--red);">${icon}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="cta-banner reveal">
        <div>
          <h2>Klingt nach eurer Strecke?</h2>
          <p>Bewerbt euch bei Hayes Logistik und werdet Teil unseres Fernverkehrs-Netzwerks.</p>
        </div>
        <div class="cta-banner-actions">
          <a href="#/karriere" class="btn btn-primary" data-route="/karriere">Jetzt bewerben</a>
        </div>
      </div>
    </div>
  </section>
`;

pages['/leistungen/fernverkehr'] = () => serviceDetail(
  'Fernverkehr Europa',
  'Linienverkehr',
  'Unser Kerngeschäft: geplante Langstrecken durch ganz Europa, mit festen Abfahrtszeiten und klaren Zielen.',
  [
    'Feste Linienrouten mit veröffentlichtem Fahrplan im Discord',
    'Fahrten solo oder im organisierten Konvoi',
    'Abstimmung von Lade- und Zielorten über die Disposition',
    'Regelmäßige Strecken für alle, die Planbarkeit schätzen',
  ],
  ICON.route
);

pages['/leistungen/sondertransporte'] = () => serviceDetail(
  'Sondertransporte',
  'Schwergut & Events',
  'Für alles, was nicht in den normalen Fahrplan passt: Schwertransporte, Sondergüter und Fahrten zu besonderen Anlässen.',
  [
    'Schwer- und Sperrguttransporte mit Begleitfahrzeugen',
    'Eventfahrten zu Community-Treffen und Sonderaktionen',
    'Enge Abstimmung mit der Disposition wegen Routenwahl',
    'Ideal für erfahrenere Fahrerinnen und Fahrer',
  ],
  ICON.weight
);

pages['/leistungen/spedition'] = () => serviceDetail(
  'Spedition & Disposition',
  'Koordination',
  'Das organisatorische Rückgrat von Hayes Logistik — hier laufen Routen, Aufträge und Absprachen zusammen.',
  [
    'Routenplanung und Zuteilung von Aufträgen im Discord',
    'Koordination von Konvois und gemeinsamen Fahrten',
    'Ansprechpartner bei Fragen rund um Strecken und Zeitfenster',
    'Laufende Abstimmung zwischen Fahrern und Team',
  ],
  ICON.radio
);

pages['/leistungen/usa'] = () => serviceDetail(
  'Fernverkehr USA',
  'Expansion · seit 27.08.2026',
  'Unsere neue Sparte im American Truck Simulator — Hayes Logistik ist jetzt auch auf den Straßen der USA unterwegs.',
  [
    'Strecken quer durch die USA im American Truck Simulator',
    'Gleiche Disposition und Absprache wie im Europa-Netzwerk',
    'Für Fahrerinnen und Fahrer, die neben ETS2 auch ATS besitzen',
    'Wird laufend um weitere Routen und Bundesstaaten erweitert',
  ],
  ICON.compass
);

/* ---------- FLOTTE ---------- */
pages['/flotte'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Flotte'])}
      <h1>Unsere Flotte</h1>
      <p>Vom Fernverkehrs-Zugmaschinen bis zum Sondertransport — unser Fuhrpark wächst mit dem Team.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="fleet-grid">
        <div class="fleet-card reveal">
          <div class="fleet-art">${truckIcon()}</div>
          <div class="body">
            <span class="fleet-tag">Fernverkehr</span>
            <h3>Standard-Zugmaschine</h3>
            <p>Das Arbeitstier unserer Linienrouten — zuverlässig auf jeder Langstrecke im Einsatz.</p>
          </div>
        </div>
        <div class="fleet-card reveal">
          <div class="fleet-art">${truckIcon()}</div>
          <div class="body">
            <span class="fleet-tag">Sondertransport</span>
            <h3>Schwerlast-Zugmaschine</h3>
            <p>Für Übergröße und Schwergut ausgelegt, meist mit Begleitfahrzeug unterwegs.</p>
          </div>
        </div>
        <div class="fleet-card reveal">
          <div class="fleet-art">${truckIcon()}</div>
          <div class="body">
            <span class="fleet-tag">Konvoi</span>
            <h3>Community-Lackierung</h3>
            <p>Unsere Event-Fahrzeuge im Hayes-Design — erkennbar bei jedem gemeinsamen Konvoi.</p>
          </div>
        </div>
      </div>
      <p style="margin-top:32px;font-size:.92rem;color:var(--muted);max-width:640px;">Aktuelle Skins und Fahrzeugbilder teilen wir laufend in unserem Discord-Server.</p>
    </div>
  </section>
`;

function truckIcon(){
  return `<svg viewBox="0 0 120 80" width="70%" style="color:var(--line-strong)" fill="none" stroke="currentColor" stroke-width="2.4">
    <path d="M6 20h58v40H6z"/>
    <path d="M64 34h20l22 14v12H64z"/>
    <circle cx="28" cy="64" r="8" stroke="var(--red)"/>
    <circle cx="90" cy="64" r="8" stroke="var(--red)"/>
    <line x1="6" y1="30" x2="64" y2="30" stroke="var(--red)" stroke-width="1.5" opacity=".5"/>
  </svg>`;
}

/* ---------- KARRIERE ---------- */
pages['/karriere'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Karriere'])}
      <h1>Werde Teil des Teams</h1>
      <p>Wir suchen Fahrerinnen und Fahrer, die Lust auf gemeinsame Strecken, Konvois und ein verlässliches Team haben.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px;">
        <span class="fleet-tag">Gesucht: Fahrer/in (m/w/d)</span>
        <span class="fleet-tag">Gesucht: Disponent/in (m/w/d)</span>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Ablauf</div>
        <h2>So läuft eure Bewerbung</h2>
      </div>
      <div class="steps">
        <div class="step reveal">
          <span class="num">01</span>
          <div><h3>Bewerbungsformular ausfüllen</h3><p>Über den Button oben gelangt ihr zu unserem Bewerbungsformular. Kurze Angaben zu euch reichen für den Anfang.</p></div>
        </div>
        <div class="step reveal">
          <span class="num">02</span>
          <div><h3>Kennenlerngespräch im Discord</h3><p>Ein Mitglied der Personalabteilung meldet sich bei euch und stellt Team und Abläufe vor.</p></div>
        </div>
        <div class="step reveal">
          <span class="num">03</span>
          <div><h3>Erste Konvoifahrt</h3><p>Ihr begleitet ein Team-Mitglied auf einer gemeinsamen Fahrt und lernt die Disposition in der Praxis kennen.</p></div>
        </div>
        <div class="step reveal">
          <span class="num">04</span>
          <div><h3>Aufnahme ins Team</h3><p>Nach erfolgreicher Probefahrt seid ihr offiziell Teil von Hayes Logistik — willkommen an Bord.</p></div>
        </div>
      </div>
    </div>
  </section>

  <div class="road-divider"></div>

  <section class="section">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">Was ihr mitbringen solltet</div>
          <h2>Voraussetzungen</h2>
          <ul class="check-list" style="grid-template-columns:1fr;margin-top:22px;">
            <li>${ICON.check}<span>Mindestalter von 18 Jahren</span></li>
            <li>${ICON.check}<span>Euro Truck Simulator 2 mit aktivem Multiplayer-Mod</span></li>
            <li>${ICON.check}<span>Ein aktiver Discord-Account für Absprache und Konvois</span></li>
            <li>${ICON.check}<span>Zuverlässigkeit — zugesagte Fahrten auch einhalten</span></li>
            <li>${ICON.check}<span>Grundlegendes Verständnis für Rollenspiel-Regeln im Straßenverkehr</span></li>
            <li>${ICON.check}<span>Lust, Teil einer Community zu sein — kein Solo-Ritt</span></li>
          </ul>
        </div>
        <div class="panel reveal" style="padding:44px;">
          <h3 style="margin-bottom:14px;">Bereit loszufahren?</h3>
          <p style="margin-bottom:26px;">Die Bewerbung läuft über unser Bewerbungsformular — dauert nur wenige Minuten.</p>
          <a href="${CONFIG.bewerbungsLink}" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-block">Bewerbung starten</a>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- KONTAKT ---------- */
pages['/kontakt'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Kontakt'])}
      <h1>Kontakt &amp; Discord</h1>
      <p>Der schnellste Weg zu uns führt über unseren Discord-Server — dort läuft alles zusammen.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="discord-panel reveal">
        <div class="discord-info">
          <div class="icon" style="margin-bottom:20px;">${ICON.discord}</div>
          <h2 style="font-size:1.7rem;margin-bottom:14px;">Tritt unserem Discord bei</h2>
          <p style="margin-bottom:26px;">Disposition, Konvoi-Ansagen, Team-Chat und alle aktuellen Infos rund um Hayes Logistik findet ihr auf unserem Server.</p>
          <a href="${CONFIG.discordInvite}" target="_blank" rel="noopener" class="btn btn-primary">Discord öffnen</a>
        </div>
        <div class="discord-visual">
          <div class="discord-stat"><span class="k">Server</span><span class="v">Hayes Logistik</span></div>
          <div class="discord-stat"><span class="k">Sprache</span><span class="v">Deutsch</span></div>
          <div class="discord-stat"><span class="k">Disposition</span><span class="v">Nach Absprache erreichbar</span></div>
          <div class="discord-stat"><span class="k">Bewerbung</span><span class="v">Jederzeit offen</span></div>
        </div>
      </div>
    </div>
  </section>
`;

/* ============================================
   ROUTER
   ============================================ */
const app = document.getElementById('app');
const header = document.getElementById('site-header');

function currentPath(){
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return hash;
}

function render(){
  const path = currentPath();
  const template = pages[path] || pages['/'];
  app.innerHTML = template();
  document.title = path === '/' ? 'Hayes Logistik — Gemeinsam. Weiter. Ans Ziel.' : `Hayes Logistik — ${document.querySelector('#app h1')?.textContent || ''}`;

  // active nav state
  document.querySelectorAll('[data-route]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-route') === path);
  });

  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  app.focus();
  closeMobileNav();
  initReveal();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  if(!window.location.hash) window.location.hash = '#/';
  render();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ============================================
   MOBILE NAV
   ============================================ */
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('mobile-open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeMobileNav(){
  mainNav.classList.remove('mobile-open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

/* ============================================
   REVEAL ON SCROLL
   ============================================ */
function initReveal(){
  const items = document.querySelectorAll('.reveal:not(.in)');
  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  items.forEach(el => io.observe(el));
}
