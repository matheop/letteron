# @letteron/design-system

Le design system de LetterOn dans le repo : les tokens (couleurs clair/sombre, typo, espacements, arrondis, ombres) et les composants.

## Ce qu'il y a dedans

| Dossier | Contenu | On l'édite ? |
| --- | --- | --- |
| `artifact/` | Copie miroir de l'artifact « LetterOn » (design system sur claude.ai) : `README.md` (la charte), `tokens.json`, `components/` (bundle, styles, types, guide et aperçu par composant) | Non, on le resynchronise |
| `scripts/build-tokens.mjs` | Génère `dist/tokens.css` depuis `artifact/tokens.json` | Oui |
| `dist/tokens.css` | Variables CSS (`--paper`, `--coral-strong`, `--space-4`…) + classes `.lo-text-*` | Non, généré |

```bash
npm run tokens     # régénère dist/tokens.css
npm run check -w @letteron/design-system   # vérifie qu'il est à jour
```

Côté app : importer `@letteron/design-system/tokens.css` une fois, puis n'utiliser que les variables. Thème : clair par défaut, sombre avec `data-theme="dark"` sur `<html>` ou via le réglage système.

## Source de vérité

- **Aujourd'hui (avant le code)** : l'artifact claude.ai fait foi. On y promeut les composants validés sur le canevas, puis on resynchronise `artifact/` ici.
- **Dès que `apps/web` démarre** : on bascule. Les composants deviennent du vrai code React dans `src/` (réécrits depuis `artifact/components/bundle.js` et `index.d.ts`), et l'artifact est resynchronisé depuis ce package.

Un seul côté fait foi à la fois. La bascule est notée dans `docs/README.md`.

## Composants (artifact)

Fondations : Icon, Logo, Wordmark, Kbd. Logo : SVG du symbole et des icônes d'app dans `artifact/assets/Logo/`. Actions : Button, IconButton. Formulaires : TextField, SearchField. Filtres : Chip, FilterButton, Menu, SegmentedControl. Navigation : NavItem. Contenu : BookmarkCard, TypeTag, Avatar, Badge. Retours : Alert, Toast, Dialog, EmptyState, Skeleton, SkeletonBookmark. Écrans d'exemple : LibraryScreen, ReaderScreen.

Utilitaires : `formatAddedAt(date, now)` et `formatReadingTime(minutes)`, la règle d'affichage des métadonnées d'un bookmark.

## Consulter le design system en local

```bash
npm run preview -w packages/design-system   # http://localhost:4173
```

Sert un catalogue en lecture seule : chaque composant (`artifact/components/*/preview.html`) est affiché avec React 18, `tokens.css` régénéré et le bundle, avec bascule clair/sombre. React est chargé depuis unpkg (connexion requise). Le dossier `artifact/` n'est jamais modifié.
