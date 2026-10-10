# @letteron/design-system

Le design system de LetterOn dans le repo : les tokens (couleurs clair/sombre, typo, espacements, arrondis, ombres) et les composants.

## Ce qu'il y a dedans

| Dossier | Contenu | On l'édite ? |
| --- | --- | --- |
| `artifact/` | Import initial de l'artifact « LetterOn » (claude.ai) : `README.md` (la charte), `tokens.json`, `components/` (bundle, styles, types, guide et aperçu par composant) | Oui, dans le repo (plus de recopie depuis claude.ai) |
| `scripts/build-tokens.mjs` | Génère `dist/tokens.css` depuis `artifact/tokens.json` | Oui |
| `dist/tokens.css` | Variables CSS (`--paper`, `--coral-strong`, `--space-4`…) + classes `.lo-text-*` | Non, généré |

```bash
npm run tokens     # régénère dist/tokens.css
npm run check -w @letteron/design-system   # vérifie qu'il est à jour
```

Côté app : importer `@letteron/design-system/tokens.css` une fois, puis n'utiliser que les variables. Thème : clair par défaut, sombre avec `data-theme="dark"` sur `<html>` ou via le réglage système.

## Source de vérité

**Depuis le 2026-10-08, ce package fait foi** (bascule faite au démarrage de `apps/web`, LET-10, notée dans `docs/README.md`).

- Tokens, charte et composants se modifient ici, dans le repo. Les tokens restent dans `artifact/tokens.json` (source de `dist/tokens.css`) tant qu'ils n'ont pas migré.
- Les composants deviennent du vrai code React dans `src/` (réécrits depuis `artifact/components/bundle.js` et `index.d.ts`), au fil des besoins de `apps/web`.
- L'artifact claude.ai n'est plus la référence : il est resynchronisé depuis ce package si on veut garder l'aperçu.

Avant le 2026-10-08 (phase maquettes), c'était l'inverse : l'artifact faisait foi et `artifact/` en était le miroir.

## Composants (artifact)

Fondations : Icon, Logo, Wordmark, Kbd. Logo : SVG du symbole et des icônes d'app dans `artifact/assets/Logo/`. Actions : Button, IconButton. Formulaires : TextField, SearchField. Filtres : Chip, FilterButton, Menu, SegmentedControl. Navigation : NavItem. Contenu : BookmarkCard, TypeTag, Avatar, Badge. Retours : Alert, Toast, Dialog, EmptyState, Skeleton, SkeletonBookmark. Écrans d'exemple : LibraryScreen, ReaderScreen.

Utilitaires : `formatAddedAt(date, now)` et `formatReadingTime(minutes)`, la règle d'affichage des métadonnées d'un bookmark.

## Consulter le design system en local

```bash
npm run preview -w packages/design-system   # http://localhost:4173
```

Sert un catalogue en lecture seule : chaque composant (`artifact/components/*/preview.html`) est affiché avec React 18, `tokens.css` régénéré et le bundle, avec bascule clair/sombre. React est chargé depuis unpkg (connexion requise). Le dossier `artifact/` n'est jamais modifié.
