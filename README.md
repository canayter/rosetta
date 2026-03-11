# GlossaForge — The Human Language Atlas

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-single--file-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Leaflet.js-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet.js">
  <img src="https://img.shields.io/badge/PWA-offline--ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA">
  <img src="https://img.shields.io/badge/Data-530%2B%20Languages-00d4ff?style=for-the-badge" alt="530+ Languages">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <strong>An interactive cartographic atlas of human language — 530+ languages, typological depth, and peer-reviewed data, all in a single HTML file.</strong>
</p>

<p align="center">
  <a href="https://glossaforge.ayter.com">Live Demo</a> · <a href="#features">Features</a> · <a href="#data--methodology">Data & Methodology</a> · <a href="#scientific-sources">Sources</a>
</p>

---

## Overview

GlossaForge is a browser-based interactive atlas of the world's languages. It maps over 530 languages as geo-located, clickable markers — each carrying a dense card of typological, demographic, and bibliographic data drawn from the foremost scientific resources in the field: WALS, Ethnologue, Glottolog, and PHOIBLE.

The project sits at the intersection of cartography, comparative linguistics, and information design. It is built without a framework or build step — a single `index.html` file wired to structured external data files — making it trivially deployable on any static host while remaining fast, offline-capable, and academically grounded.

Whether you are a linguist cross-referencing morphological typologies, a language learner exploring a family tree, or simply a curious person who has wondered how many tonal languages exist in Southeast Asia — GlossaForge is designed for you.

---

## Live Demo

**[https://glossaforge.ayter.com](https://glossaforge.ayter.com)**

No installation required. The app is a PWA and caches data files via a service worker — it works offline after the first visit.

---

## ◈ Features

### Interactive Map

- **530+ languages** rendered as color-coded circle markers across the globe
- **5 basemap styles** switchable at runtime:
  - Physical — ESRI World Physical
  - Topographic — OpenTopoMap
  - Political — CartoDB Voyager
  - Satellite — ESRI World Imagery
  - Dark — CartoDB Dark Matter
- **3 data layers**, toggled independently:
  - **Language Family** — markers colored by phylogenetic family
  - **Endangerment Status** — UNESCO EGIDS gradient from green (safe) to red (extinct)
  - **Speaker Count** — size/color gradient scaled by magnitude of L1 speakers
- **Hover tooltips** surfacing key data at a glance
- **Overlap spiderfying** — when multiple languages share coordinates, hovering fans them radially outward with connecting spider lines, keeping dense regions navigable
- **Map bounds clamped** to a single world copy — no infinite horizontal scrolling

### Language Cards

Each language opens a richly structured detail card containing:

| Section | Data |
|---|---|
| Classification | Family › Subfamily › Branch |
| Demographics | L1 speakers, L2 speakers, Total speakers |
| Typology | Word order, morphological type, case alignment, tone system, gender system, evidentiality, vowel harmony, clicks, ejectives |
| Scripts | Writing systems and script families |
| Geography | Countries where spoken |
| Native sample | Proverb or literary quote in the native script (50+ languages) |
| Similar languages | "Most Similar" panel using intelligibility edges + grammatical feature scoring |
| Citations | Peer-reviewed sources (Cambridge UP, Oxford UP, Routledge, Brill, Indiana University Press) for 35+ languages |

### Language Family Explorer

A collapsible tree visualization of every family in the database, showing subfamily structure, member count, and family-level color coding — suitable for navigating from the macro level down to individual language entries.

### Language Explorer

A full-text searchable, multi-filterable table of all 530+ languages with filters for:

- Language family
- Geographic region
- UNESCO endangerment status
- Word order (SOV, SVO, VSO, VOS, OVS, OSV, free)
- Morphological type (isolating, agglutinative, fusional, polysynthetic)
- Tone system
- Show/hide extinct languages

### Linguistic Tools Suite

| Tool | Description |
|---|---|
| Mutual Intelligibility Calculator | Select two languages and compute an intelligibility score from the `INTELLIGIBILITY_EDGES` graph |
| Language Comparison Matrix | Side-by-side typological comparison of up to N languages |
| Extinct Language Timeline | Chronological visualization of language extinction events |
| World Statistics Dashboard | Aggregate statistics — family distribution, speaker totals, endangerment breakdown, typological feature frequency |
| Language Comparator | Deep feature-by-feature comparison between any two languages in the dataset |

### Floating Filter Bar

A persistent UI bar allowing real-time filtering of map markers by family, region, UNESCO status, word order, morphology, and tone — changes reflect on the map immediately.

### Theme & Persistence

- Light/Dark theme toggle with `localStorage` persistence
- Basemap preference persisted across sessions
- PWA manifest + service worker for offline access to data files

---

## Data & Methodology

### Language Entries

Each of the 530+ entries in `LANGUAGE_DATABASE` is a structured object encoding:

```
ISO 639-3 code · name · endonym · coordinates · family/subfamily/branch ·
L1/L2/total speakers · UNESCO status · word order · morphological type ·
case alignment · tone system · gender system · evidentiality · vowel harmony ·
clicks · ejectives · writing scripts · spoken countries ·
native-script sample · citations · intelligibility links
```

Typological features are sourced primarily from **WALS** (World Atlas of Language Structures), cross-referenced against individual language grammars from the Cambridge Language Surveys, Routledge Descriptive Grammars, and Brill's Languages of the World series.

Speaker counts follow **Ethnologue 27th edition** (2024) figures for L1 speakers. UNESCO endangerment classifications follow the **EGIDS scale** (Expanded Graded Intergenerational Disruption Scale).

Geolocation coordinates represent the geographic centroid of a language's primary speech community, sourced from **Glottolog 5.0**.

### Intelligibility Edges

The `INTELLIGIBILITY_EDGES` graph encodes pairwise mutual intelligibility scores (0.0–1.0) for language pairs where empirical or structural evidence exists. These are used both in the Mutual Intelligibility Calculator and in the "Most Similar Languages" ranking on language cards, which combines intelligibility score with a grammatical feature similarity metric computed at runtime.

### Family Tree

`FAMILY_TREE` encodes the phylogenetic hierarchy of every family represented in the dataset, with color assignments, subfamily lists, and display metadata. Family colors are perceptually distinct and consistent across all views.

---

## Scientific Sources

GlossaForge does not invent typological claims. Data is sourced from the following peer-reviewed and institutionally maintained resources:

| Source | Reference |
|---|---|
| **WALS** | Dryer, M.S. & Haspelmath, M. (eds.) (2013). *The World Atlas of Language Structures Online*. Leipzig: Max Planck Institute for Evolutionary Anthropology. |
| **Ethnologue** | Eberhard, D.M., Simons, G.F. & Fennig, C.D. (eds.) (2024). *Ethnologue: Languages of the World* (27th ed.). Dallas: SIL International. |
| **Glottolog** | Hammarström, H., Forkel, R., Haspelmath, M. & Bank, S. (2024). *Glottolog 5.0*. Leipzig: Max Planck Institute for Evolutionary Anthropology. |
| **PHOIBLE** | Moran, S. & McCloy, D. (eds.) (2019). *PHOIBLE 2.0*. Jena: Max Planck Institute for the Science of Human History. |
| **Turkic Languages** | Johanson, L. & Csató, É.Á. (eds.) (1998). *The Turkic Languages*. London & New York: Routledge. |
| **Language grammars** | Individual descriptive grammars from Cambridge University Press (Cambridge Language Surveys), Oxford University Press, Routledge (Descriptive Grammars series), Brill (Languages of the World), and Indiana University Press. |

Language cards for 35+ languages include inline citations traceable to the specific grammar or reference work used.

---

## Language Coverage

### Families Represented

Indo-European · Sino-Tibetan · Niger-Congo · Afro-Asiatic · Austronesian · Dravidian · Turkic · Uralic · Japonic · Koreanic · Tai-Kadai · Austroasiatic · Kartvelian · Mongolic · Nilo-Saharan · Quechuan · Otomanguean · and many more isolates and small families.

### Depth Spotlight — Turkic

The Turkic family is among the most thoroughly covered, with 24 languages including:

Turkish · Azerbaijani · Uzbek · Kazakh · Kyrgyz · Turkmen · Tatar · Bashkir · Chuvash · Yakut (Sakha) · Uyghur · Crimean Tatar · Kumyk · Karachay-Balkar · Nogai · Karakalpak · Southern Altai · Tuvan · Khakas · Qashqai · Khalaj · Salar · Dolgan · Shor

### Endangerment Distribution

| UNESCO Status | Description |
|---|---|
| Safe | Spoken across all generations; institutional support |
| Vulnerable | Most children speak it, but may be restricted to certain domains |
| Definitely Endangered | Children no longer learn it as mother tongue at home |
| Severely Endangered | Spoken by grandparents; parents may understand but do not use it with children |
| Critically Endangered | Youngest speakers are grandparents; language not used daily |
| Extinct | No living speakers |

---

## File Structure

```
glossaforge/
├── index.html              # Single-file application (~1,800 lines)
│                           # All UI, map logic, and tool code inline
├── data/
│   ├── languages.js        # LANGUAGE_DATABASE — 530+ language entries
│   ├── families.js         # FAMILY_TREE — phylogenetic hierarchy + color metadata
│   ├── intelligibility.js  # INTELLIGIBILITY_EDGES — pairwise intelligibility graph
│   └── countries.js        # COUNTRY_DATA — ISO country metadata
├── lib/                    # Vendored third-party assets
├── manifest.json           # PWA web app manifest
├── sw.js                   # Service worker (offline data caching)
└── _headers                # Netlify/CDN security header configuration
```

All application logic lives in `index.html`. Data files are loaded as JavaScript modules and kept separate to allow independent updates to the language database without touching application code.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Map engine | [Leaflet.js 1.9.4](https://leafletjs.com/) |
| Basemaps | ESRI World Physical, OpenTopoMap, CartoDB Voyager, ESRI Imagery, CartoDB Dark Matter |
| UI framework | Vanilla JavaScript — no React, no Vue, no build step |
| Fonts | Bebas Neue · Teko · Space Grotesk · Inter · JetBrains Mono |
| Offline | Service Worker + PWA manifest |
| Styling | CSS custom properties, dark/light theme via class toggle |
| Deployment | Static file hosting (Netlify recommended) |
| Data format | Plain JavaScript object literals (`.js` modules) |

---

## Deployment

GlossaForge is a fully static application. Any static host works.

### Netlify (recommended)

```bash
# Deploy root of repo as publish directory
# No build command required
```

The `_headers` file configures security headers automatically on Netlify. Ensure the service worker (`sw.js`) is served from the root origin.

### Local Development

```bash
# Any local HTTP server works — file:// protocol will block service worker
python -m http.server 8080
# or
npx serve .
```

Open `http://localhost:8080` in your browser.

### PWA / Offline

After the first visit, the service worker caches all four data files and the application shell. Subsequent loads work without a network connection.

---

## Browser Support

| Browser | Status |
|---|---|
| Chrome / Edge 90+ | Full support |
| Firefox 88+ | Full support |
| Safari 14+ (iOS & macOS) | Full support, iOS safe-area insets applied |
| Samsung Internet 14+ | Full support |

Minimum requirement: ES2020, CSS custom properties, service worker support.

---

## Author

**Can Ayter**
[ayter.com](https://ayter.com)

---

*GlossaForge is an independent research and engineering project. Typological data is sourced from peer-reviewed academic resources and is attributed throughout the application. No claim of completeness is made — the study of human language is, by nature, ongoing.*
