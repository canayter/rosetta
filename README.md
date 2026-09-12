# Rosetta

*[Türkçe](README.tr.md)*

An interactive map of the world's languages: 500+ entries, each geolocated and carrying a structured card of typological, demographic, and bibliographic data. Built to let a linguist, a language learner, or someone just curious move from "how many tonal languages are there in Southeast Asia" to a specific, cited answer in a few clicks.

Formerly called GlossaForge. Same dataset and engine, renamed for a shorter, plainer name.

**Live:** [ayter.com/rosetta](https://ayter.com/rosetta)
**Author:** [Can Ayter](https://ayter.com)

## What it does

**The map.** 500+ languages as markers on a Leaflet map, five switchable basemaps (physical, topographic, political, satellite, dark), and three color layers: language family, UNESCO endangerment status, and speaker count. When several languages share a location, hovering fans them out radially so dense regions stay clickable.

**Language cards.** Opening a language shows its classification (family, subfamily, branch), speaker numbers, typology (word order, morphological type, case alignment, tone, gender, evidentiality, vowel harmony, clicks, ejectives), writing systems, the countries it's spoken in, and — for 35+ languages — a proverb or short literary line in the native script. A "most similar" panel ranks related languages using a mix of intelligibility data and shared grammatical features.

**Explorer views.** A collapsible family tree of every phylogenetic group in the dataset, and a searchable, filterable table of all languages (by family, region, endangerment status, word order, morphology, tone).

**Tools.** A mutual intelligibility calculator between any two languages, a side-by-side typological comparison for several languages at once, an extinct-language timeline, and a dashboard of aggregate statistics across the dataset.

Works offline after the first visit (service worker + PWA manifest), and remembers your theme and basemap choice.

## Where the data comes from

Typological features are drawn mainly from **WALS** (World Atlas of Language Structures), cross-checked against individual grammars from the Cambridge Language Surveys, Routledge's Descriptive Grammars series, and Brill's Languages of the World. Speaker counts follow **Ethnologue**, 27th edition (2024). Endangerment status follows UNESCO's **EGIDS** scale. Coordinates come from **Glottolog** 5.0.

Full references:

- Dryer, M. S., & Haspelmath, M. (eds.) (2013). *The World Atlas of Language Structures Online*. Max Planck Institute for Evolutionary Anthropology.
- Eberhard, D. M., Simons, G. F., & Fennig, C. D. (eds.) (2024). *Ethnologue: Languages of the World* (27th ed.). SIL International.
- Hammarström, H., Forkel, R., Haspelmath, M., & Bank, S. (2024). *Glottolog 5.0*. Max Planck Institute for Evolutionary Anthropology.
- Moran, S., & McCloy, D. (eds.) (2019). *PHOIBLE 2.0*. Max Planck Institute for the Science of Human History.
- Johanson, L., & Csató, É. Á. (eds.) (1998). *The Turkic Languages*. Routledge.

No typological claim is invented; where a language's card cites a specific grammar, that citation is traceable. The dataset covers roughly 500 of the world's ~7,000 languages, and does not claim to be complete — the Turkic family gets the deepest coverage (24 languages, from Turkish and Azerbaijani down to smaller ones like Dolgan and Khalaj), reflecting where the author's own linguistic interest sits, not a claim that other families matter less.

## Project structure

```
rosetta/
├── index.html               single-file application: map, UI, and tool logic
├── data/
│   ├── languages.js          the language database, ~500 entries
│   ├── intelligibility.js    pairwise mutual-intelligibility scores
│   └── world.js               country/region metadata
├── lib/                      vendored Leaflet and basemap assets
├── manifest.json              PWA manifest
└── sw.js                      service worker, caches data for offline use
```

## Stack

Vanilla JavaScript, Leaflet.js for the map, no framework, no build step. Any static host works — the `_headers` file is written for Netlify-style header configuration.

## Author

**Can Ayter** — [ayter.com](https://ayter.com)

MIT License.
