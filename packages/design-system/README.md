# @letteron/design-system

Le design system de LetterOn dans le repo : les tokens (couleurs clair/sombre, typo, espacements, arrondis, ombres) et les composants. Règles : [`CONVENTIONS.md`](CONVENTIONS.md).

## Ce qu'il y a dedans

| Dossier | Contenu | On l'édite ? |
| --- | --- | --- |
| `tokens/` | **Source de vérité du style**, au format standard [DTCG 2025.10](https://www.designtokens.org/TR/2025.10/format) : `foundation.tokens.json` (polices, styles de texte, espacements, rayons, tailles, épaisseurs de trait, durée et courbe des transitions, focus), `color.tokens.json` (couleurs et ombre, thème clair), `dark.tokens.json` (valeurs du thème sombre), `letteron.resolver.json` (assemble le tout et déclare le thème clair/sombre) | Oui |
| `terrazzo.config.mjs` | Génération du CSS avec [Terrazzo](https://terrazzo.app) et règles de vérification des tokens | Oui |
| `dist/tokens.css` | Point d'entrée importé par les apps : `@import` de `dist/variables.css` (variables `--paper`, `--coral-strong`, `--space-4`…) + classes `.lo-text-*` | Non, généré |
| `artifact/` | Import initial de l'artifact « LetterOn » (claude.ai) : `README.md` (la charte), `components/` (bundle, styles, types, guide et aperçu par composant) | Oui, dans le repo (plus de recopie depuis claude.ai) |
| `INVENTAIRE-VALEURS.md` | Valeurs en dur de `bundle.css`, le token qui les remplace et les exceptions acceptées (document de travail de LET-18) | Oui |

```bash
npm run tokens                             # régénère dist/ (tz build)
npm run check -w @letteron/design-system   # valide les tokens (tz check)
```

`npm run check` vérifie la syntaxe DTCG, que chaque token a une `$description`, le nommage en kebab-case et les contrastes promis par les descriptions des couleurs (WCAG AA, thème clair).

Côté app : importer `@letteron/design-system/tokens.css` une fois, puis n'utiliser que les variables. Thème : clair par défaut, sombre avec `data-theme="dark"` sur `<html>` ou via le réglage système.

## Règles

Toutes les règles (principes, usage et nommage des tokens, quel composant choisir, faire évoluer le design system, règles vérifiables) sont dans [`CONVENTIONS.md`](CONVENTIONS.md). En bref : on n'utilise que les composants et les tokens, on lit la `$description` d'un token avant de l'utiliser, et un nouveau token passe par Needs approval.

## Source de vérité

**Depuis le 2026-10-08, ce package fait foi** (bascule faite au démarrage de `apps/web`, LET-10, notée dans `docs/README.md`).

- Tokens, charte et composants se modifient ici, dans le repo. Les tokens DTCG de `tokens/` sont la source de vérité du style (LET-19) : `dist/` en est généré.
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

Sert un catalogue en lecture seule : chaque composant (`artifact/components/*/preview.html`) est affiché avec React 18, `tokens.css` régénéré par Terrazzo et le bundle, avec bascule clair/sombre. React est chargé depuis unpkg (connexion requise). Le dossier `artifact/` n'est jamais modifié.
