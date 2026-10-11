# Conventions du design system LetterOn

Le point d'entrée unique des règles du design system : comment l'utiliser, le nommer et le faire évoluer. Il s'adresse aux agents de code comme aux humains. Les règles marquées **(à valider, Pn)** attendent une décision de Mathéo (LET-14).

## Où est quoi

| Sujet | Fichier | Rôle |
| --- | --- | --- |
| Valeurs du style | `tokens/*.tokens.json` (format DTCG) | Source de vérité : couleurs, typo, espacements, rayons, tailles, ombres, mouvement. Chaque token a une `$description` qui dit quand l'utiliser. |
| Variables CSS | `dist/tokens.css` (généré, ne pas éditer) | Ce que les apps importent : `@import "@letteron/design-system/tokens.css"`. |
| Charte | `artifact/README.md` | L'intention : ton de l'interface, vocabulaire, métadonnées d'un bookmark, fondations visuelles, logo. Ce fichier n'en recopie rien. |
| Guide d'un composant | `artifact/components/<Composant>/README.md` | Quand et comment utiliser ce composant, ses variantes, ses textes. |
| API d'un composant | `artifact/components/index.d.ts` | Noms et props (types commentés). |
| Valeurs en dur à remplacer | `INVENTAIRE-VALEURS.md` | Pour le port des composants en React (LET-18) : le token qui remplace chaque valeur. |

**En cas de conflit** : une décision du journal (D-xx) fait foi, puis les tokens, puis ce fichier, puis la charte, puis le README d'un composant. Un conflit repéré se signale (Needs approval), il ne se tranche pas en silence.

## 1. Principes

1. **L'interface n'utilise que le design system.** D'abord un composant de `@letteron/design-system`, sinon les variables de `dist/tokens.css`. Jamais de couleur, taille, espacement, rayon, ombre ou durée écrits en dur.
2. **Clair et sombre, toujours.** On passe par les tokens (ils changent seuls avec le thème) et on vérifie le rendu dans les deux thèmes.
3. **Accessibilité** :
   - texte : contraste d'au moins 4.5:1 ; contrôles, bordures de champ et gros texte : au moins 3:1 (ces paires sont vérifiées par `npm run check`) ;
   - le `--focus-ring` est visible sur tout élément interactif ;
   - vrais `<button>`, `<a>`, `<label>` ; une icône seule a toujours un nom accessible ;
   - la couleur n'est jamais le seul signal : une icône ou un texte l'accompagne ;
   - cibles : `--size-control-lg` (44 px) pour les contrôles principaux, `--size-control-md` (36 px) au minimum dans les barres denses **(à valider, P3)**.
4. **Sobriété** : aplats et filets plutôt qu'ombres, une seule ombre (`--shadow-float`) pour ce qui flotte, pas de dégradé hors du logo.
5. **Ton et vocabulaire** : ceux de la charte (anglais, deuxième personne, majuscule au premier mot seulement, « bookmark », « To read »…).

## 2. Tokens

### Lire un token

- Avant d'utiliser une valeur, lis le token et sa `$description` dans `tokens/*.tokens.json` (les mêmes descriptions sont en commentaire dans `dist/variables.css`).
- Nom CSS = chemin du token, sans le préfixe `color.` : `color.coral-strong` → `--coral-strong`, `space.4` → `--space-4`, `size.control.lg` → `--size-control-lg`.
- Thème : une couleur ou une ombre a sa valeur claire dans `color.tokens.json` et sa valeur sombre dans `dark.tokens.json`.

### Groupes et règles d'usage

| Groupe | Variables | Règle |
| --- | --- | --- |
| `color` | `--paper`, `--ink`, `--coral-strong`… | Par rôle, jamais par teinte : `ink` pour le texte, `coral-strong` pour une action, un lien ou une erreur, `mint` uniquement pour une réussite. Un texte sur un aplat prend le `on-*` de cet aplat (`on-coral`, `on-sun`, `on-image`). Détail : charte, « Fondations visuelles ». |
| `shadow`, `focus` | `--shadow-float`, `--focus-ring` | Seules ombres autorisées. |
| `text` | classes `.lo-text-*`, variables `--text-<style>-font\|size\|line\|weight\|tracking` | Un texte prend toujours un style complet (classe, ou les variables d'un même style) : jamais une taille seule. |
| `space` | `--space-0-5` (2 px) … `--space-10` (40 px), `space-N` = N × 4 px | Mise en page des écrans : pas de 8 px (`space-2`, `-4`, `-6`, `-10`). Les pas intermédiaires (`0-5`, `1`, `1-5`, `2-5`, `3`, `3-5`, `5`, `8`) servent à l'intérieur des composants **(à valider, P2)**. En cas de doute, le plus grand. |
| `radius` | `--radius-sm` 8, `--radius-md` 14, `--radius-lg` 20, `--radius-full` | `lg` : ce qui contient ; `full` : ce qui se touche ; `sm` : champs, bandeaux, badges ; `md` : vignettes et grands squelettes. |
| `size` | `--size-control-*`, `--size-icon-*`, `--size-media-*`, `--size-illustration-*`, `--size-dot`, `--size-width-*` | Hauteurs de contrôles, tailles d'icônes, médias et largeurs : on prend le token, on n'invente pas de taille. |
| `border-width` | `--border-width-thin` 1, `--border-width-thick` 2 | `thin` pour les filets, `thick` pour les contours de contrôles et l'outline de secours du focus. |
| `duration`, `easing` | `--duration-fast`, `--easing-standard` | Toute transition. Pas d'animation clignotante. |

### Nommer un token

- kebab-case, chemin = `groupe.rôle` ou `groupe.rôle.variante` (vérifié par `npm run check`).
- Couleurs nommées par rôle (`paper`, `surface`, `ink`, `line`) ou par famille de marque avec un niveau (`coral`, `coral-strong`, `coral-soft`) ; le texte posé sur un aplat s'appelle `on-<aplat>`.
- Échelles : `space-N` (N × 4 px, `0-5` pour 2 px), tailles `xs`, `sm`, `md`, `lg`, `xl`.

### Ajouter ou modifier un token

1. C'est un choix visuel : **Needs approval** avant de l'ajouter (Mathéo décide).
2. Une `$description` obligatoire : quand l'utiliser, sur quel fond pour une couleur, le contraste visé.
3. Une couleur ou une ombre a une valeur claire et une valeur sombre. Une nouvelle paire texte/fond s'ajoute à `CONTRAST_PAIRS` dans `terrazzo.config.mjs`.
4. `npm run tokens && npm run check -w @letteron/design-system`.

### Exceptions sans token

Seules exceptions acceptées (LET-19, Q6), toujours commentées `/* exception DS : <raison> */` dans le code :

- `1px` de la classe « visible uniquement aux lecteurs d'écran » (`.lo-sr`) ;
- `420px` de `.lo-stack`, aide de mise en page des aperçus, pas un composant ;
- interlettrage `-0.03em` du texte du logo (il fait partie de la marque, comme ses SVG) ;
- décalages optiques d'icônes (1, 3 et -6 px dans les aides de champ et les bandeaux), à supprimer si un alignement CSS suffit.

## 3. Composants

### Index

| Composant | Quand l'utiliser | Guide |
| --- | --- | --- |
| `Icon` | Toute icône, par nom ; décorative par défaut, `label` si elle porte seule le sens. | [README](artifact/components/Icon/README.md) |
| `Logo` | Le logo (lockup, symbole seul, icône d'app) dans tous ses tons. | [README](artifact/components/Logo/README.md) |
| `Wordmark` | Le lockup horizontal en trois tailles de texte, dans la barre latérale et les en-têtes. | [README](artifact/components/Wordmark/README.md) |
| `Kbd` | Une touche de clavier, pour expliquer le raccourci de l'extension. | [README](artifact/components/Kbd/README.md) |
| `Button` | Une action avec un libellé (verbe d'abord) ; `primary` une seule fois par écran. | [README](artifact/components/Button/README.md) |
| `IconButton` | Une action sans libellé visible (fermer, menu, actions d'une carte) ; `label` obligatoire. | [README](artifact/components/IconButton/README.md) |
| `TextField` | Une saisie avec libellé toujours visible (compte, nom de collection, confirmation). | [README](artifact/components/TextField/README.md) |
| `SearchField` | La recherche de la liste (titres et tags). | [README](artifact/components/SearchField/README.md) |
| `Chip` | Un filtre qu'on active en un clic, ou un filtre appliqué qu'on retire (`onRemove`). | [README](artifact/components/Chip/README.md) |
| `FilterButton` + `Menu` | Un filtre à plusieurs valeurs (Type, Collection, Tag, Status) : le bouton ouvre la liste de cases à cocher. | [FilterButton](artifact/components/FilterButton/README.md), [Menu](artifact/components/Menu/README.md) |
| `SegmentedControl` | Un choix exclusif entre 2 ou 3 options (List/Grid, thème). | [README](artifact/components/SegmentedControl/README.md) |
| `NavItem` | Une entrée de la barre latérale (To read, Archive, une collection). | [README](artifact/components/NavItem/README.md) |
| `BookmarkCard` | Un bookmark, en grille ou en liste ; compose seul la ligne de métadonnées. | [README](artifact/components/BookmarkCard/README.md) |
| `TypeTag` | Le type d'un contenu (icône + libellé : Video, X post, Article, Link). | `index.d.ts` (pas de README) |
| `Avatar` | Une personne (photo ou initiales). | [README](artifact/components/Avatar/README.md) |
| `Badge` | Un statut d'un ou deux mots, non interactif. | [README](artifact/components/Badge/README.md) |
| `Alert` | Un message dans la page, au-dessus de ce qu'il concerne (erreur, info, succès). | [README](artifact/components/Alert/README.md) |
| `Toast` | La confirmation qui flotte après une action réussie, et disparaît seule. | [README](artifact/components/Toast/README.md) |
| `Dialog` | La confirmation d'une action sans retour (suppression). | [README](artifact/components/Dialog/README.md) |
| `EmptyState` | Ce qu'on montre quand il n'y a rien (file vide, recherche sans résultat). | [README](artifact/components/EmptyState/README.md) |
| `Skeleton`, `SkeletonBookmark` | Les formes de chargement ; `SkeletonBookmark` prend exactement la place d'une carte. | [README](artifact/components/Skeleton/README.md) |
| `formatAddedAt`, `formatReadingTime` | Les règles d'affichage de la date d'ajout et du temps de lecture (utilisées par `BookmarkCard`). | `index.d.ts` |

`LibraryScreen` et `ReaderScreen` sont des écrans d'exemple qui montrent comment assembler les composants : ce ne sont pas des composants **(à valider, P6)**.

### Choisir entre composants proches

- **`Button` ou `IconButton`** : un libellé visible tient → `Button` (avec `icon` si besoin). Seulement une icône (barre dense, carte, fermer) → `IconButton`.
- **`Chip`, `FilterButton` + `Menu` ou `SegmentedControl`** : une valeur qu'on active ou retire d'un clic → `Chip` ; une dimension à plusieurs valeurs combinables → `FilterButton` + `Menu` (chaque valeur appliquée réapparaît en `Chip` retirable) ; un choix exclusif entre 2 ou 3 options → `SegmentedControl`.
- **`Badge`, `TypeTag` ou `Chip`** : un statut qu'on lit → `Badge` ; le type d'un contenu → `TypeTag` ; quelque chose qu'on clique → `Chip`.
- **`Alert`, `Toast` ou `Dialog`** : le message reste lié à un formulaire ou un contenu → `Alert` ; confirmer qu'une action a réussi, sans bloquer → `Toast` ; demander confirmation avant une action sans retour → `Dialog`.
- **`EmptyState` ou `Skeleton`** : il n'y a rien → `EmptyState` ; ça arrive → `Skeleton` (`SkeletonBookmark` pour une carte).
- **`Logo` ou `Wordmark`** : le lockup en en-tête → `Wordmark` ; un autre ton, le symbole seul ou l'icône d'app → `Logo`.

### API des composants

- `variant` : le style visuel (`primary`, `secondary`, `ghost`, `danger`).
- `size` : `sm`, `md` (défaut), `lg`.
- `tone` : sur un élément décoratif, une famille de couleur (`coral`, `sun`, `mint`) ; sur un message, une intention (`error`, `info`, `success`, `danger`) **(à valider, P5)**.
- `icon` : un nom d'`Icon` ou un SVG en `currentColor`.
- `label` : obligatoire dès qu'il n'y a pas de texte visible (il devient le nom accessible).
- `href` : rend un lien qui a l'apparence du composant.
- `className` : accepté par tous, pour la mise en page uniquement (jamais pour changer couleurs, tailles ou rayons).

## 4. Nommage

- **Composants** : PascalCase, en anglais, avec le vocabulaire de l'interface (`BookmarkCard`, pas `ItemCard`). Un dossier par composant avec son code, son `README.md` (quand l'utiliser), son test et son aperçu.
- **Props** : camelCase ; booléens en adjectif ou participe (`selected`, `open`, `archived`, `block`) ; callbacks en `onX` (`onRemove`, `onArchive`) ; valeurs d'énumération en minuscules (`grid`, `list`).
- **Classes CSS publiques** : préfixe `lo-` (`.lo-text-body`) ; elles font partie de l'API du package.
- **Tokens** : voir « Nommer un token ».

## 5. Faire évoluer le design system

1. **Explorer** : un nouveau motif s'explore d'abord dans les maquettes.
2. **Signaler un manque** : dans une feature, s'il manque un composant, on le crée localement dans le dossier de la feature et on ajoute dans la PR une ligne `DS-GAP: <Composant> — <besoin> (<chemin du composant local>)`. S'il manque un token : Needs approval, jamais de valeur en dur.
3. **Promouvoir** : un motif validé et utilisé sur au moins 2 écrans entre dans le design system **(à valider, P1)**, avec son `README.md`, ses tests et son aperçu.
4. **Qui fait quoi** :
   - un agent de feature utilise le design system, ne crée pas de composant générique et ne modifie ni un composant ni un token ;
   - l'agent design system (issues `design-system`) crée et modifie les composants ;
   - les tokens ne changent qu'avec l'accord de Mathéo.
5. **Needs approval** obligatoire pour : un nouveau token ou une valeur modifiée ; un nouveau composant générique hors d'une issue `design-system` ; un changement d'API publique d'un composant (props, classes `lo-`) ; un écart à la charte ; une valeur sans token.

## 6. Règles vérifiables

Règles mécaniques, testables par un outil (lint ou test) : c'est la base de LET-15. Champ : le code des apps (`apps/**`) et les composants du package (`packages/design-system/src/**`).

| # | Règle | Exceptions | Vérifiable par |
| --- | --- | --- | --- |
| R1 | Aucune couleur littérale (`#…`, `rgb()`, `hsl()`, noms de couleur) dans le CSS ou les styles inline. | `transparent`, `currentColor`, `inherit` | Stylelint (`color-no-hex`, `color-named`, fonctions interdites) |
| R2 | Aucune longueur en px, rem ou em pour `margin`, `padding`, `gap`, `inset`, `width`, `height`, `border-radius`, `border-width`, `font-size`, `line-height`, `letter-spacing` : uniquement `var(--…)`. | `0`, `auto`, `%`, `fr`, `vw`/`vh`, ligne commentée `exception DS` | Stylelint (`declaration-property-unit-disallowed-list` ou règle sur les valeurs) |
| R3 | `font-size`, `line-height`, `font-weight`, `font-family` uniquement via un style de texte (`.lo-text-*` ou les variables `--text-<style>-*`). | aucune | Stylelint (valeurs autorisées par propriété) |
| R4 | `box-shadow` uniquement `var(--shadow-float)` ou `var(--focus-ring)`. | aucune | Stylelint |
| R5 | `transition` et `animation` : durées et courbes via `--duration-*` et `--easing-*`. | aucune | Stylelint |
| R6 | Toute variable `var(--…)` utilisée existe dans `dist/variables.css`. | variables locales d'un composant, préfixées `--_` | Script ou plugin Stylelint qui lit `dist/variables.css` |
| R7 | Les apps importent les composants depuis `@letteron/design-system` (exports du package), jamais `artifact/`, `dist/` ni un chemin interne. | `@letteron/design-system/tokens.css` | ESLint (`no-restricted-imports`) |
| R8 | Un `IconButton` (ou toute icône seule interactive) a un `label`. | aucune | TypeScript (prop obligatoire) + test |
| R9 | Chaque token a une `$description`, un nom en kebab-case, et les paires de contraste déclarées passent (AA). | aucune | `npm run check -w @letteron/design-system` (déjà en place) |
| R10 | Une valeur marquée `exception DS` figure dans la liste « Exceptions sans token » ci-dessus. | aucune | Script (recherche des commentaires `exception DS`) |
