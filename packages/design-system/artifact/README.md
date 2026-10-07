# LetterOn

Everything you want to read, in one place.

LetterOn est une app « à lire plus tard » : on y enregistre en un clic depuis Chrome des vidéos YouTube, des posts X, des articles et des liens, puis on les range (collections et tags), on les lit et on les archive. Le style est chaleureux, clair et un peu joueur : un fond couleur papier, un corail vif comme signature, un jaune soleil pour les bonnes nouvelles, des formes très arrondies. La typographie mêle une serif éditoriale pour les titres et une sans ronde et moderne pour l'interface. Il existe en thème clair et en thème sombre (une nuit prune), soignés tous les deux. Ces valeurs sont une proposition à valider ; le logo (une enveloppe en verre et un soleil) est posé, la charte reste à compléter.

**Langue** — l'interface est écrite en anglais pour l'instant ; la traduction viendra plus tard. Cette charte reste en français.

## Ton (interface en anglais)

- On parle à la deuxième personne, en phrases courtes, comme un ami : « Saved », pas « Your content has been successfully saved ».
- On célèbre les petits moments (premier bookmark, file à lire vide) avec `sun`, sans en faire trop : pas d'emoji, un point d'exclamation au maximum par écran.
- On ne culpabilise pas sur la pile : « 12 to read », jamais « 12 overdue ».
- Majuscule au premier mot seulement : « Delete my account », « Clear all ».

## Vocabulaire

| Terme UI | Sens |
| --- | --- |
| **Bookmark** | Tout ce qu'on enregistre. Quatre types : **Video** (YouTube), **X post**, **Article**, **Link**. |
| **To read** / **Archive** | La file et les archives. Le statut d'un bookmark est « to read » ou « archived », indépendant des collections. |
| **Collection** | Un seul niveau, zéro ou une par bookmark. |
| **Tag** | Transverse, plusieurs par bookmark, affiché `#tag`. |
| **Save** | L'action de capture (« Save to LetterOn »). |

Il n'y a qu'une liste : chaque nouveau bookmark arrive en tête, « to read », sans collection ni tag. Pas de boîte de réception.

## Métadonnées d'un bookmark

Une carte montre une ligne de métadonnées construite par `BookmarkCard` à partir de champs séparés, dans cet ordre : **source · longueur · date d'ajout**.

- **Source** : chaîne (vidéo), site (article, lien), @auteur (post X).
- **Longueur** : durée pour une vidéo (« 18:42 »), temps de lecture pour un article (« 8 min read ») ; rien pour un post X ou un lien.
- **Date d'ajout** : « Just now », « 12m ago », « 3h ago », « 2d ago » jusqu'à 7 jours, puis « Sep 12 », et « Sep 12, 2025 » les années précédentes.

À part, sous le titre : l'**extrait** (`excerpt`), un texte courant de 2 lignes max, pour un article (chapô) ou un post X (début du texte). Jamais pour une vidéo ni un lien.

## Fondations visuelles

- **Couleurs** — `paper` en fond, `surface` pour les cartes, `ink` pour le texte, `line` pour les filets et `line-strong` pour les bordures de champs. `coral` est la couleur de marque en grands aplats (illustrations, formes) ; pour une action, un texte ou une erreur, on passe à `coral-strong`, qui garde un contraste d'au moins 4.5:1 dans les deux thèmes. Sur un aplat `coral-strong`, le texte est `on-coral`, jamais du blanc codé en dur. `sun` porte toujours du texte `on-sun`. `mint` (et `mint-soft`) ne signifie qu'une chose : c'est réussi (saved, archived, verified). `scrim` voile le fond derrière une modale.
- **Erreurs** — pas de rouge : `coral-strong` pour le texte et les bordures, `coral-soft` pour le fond d'un bandeau, toujours avec l'icône `alert` et un message qui dit quoi faire.
- **Types de contenu** — chaque type a une icône et un libellé ; la couleur (vidéo `coral`, article `sun`, post X `ink`, lien `coral-soft`) n'est qu'un repère en plus, jamais le seul signal.
- **Thèmes** — tous les tokens de couleur ont une valeur claire et une valeur sombre : on utilise toujours le token, jamais une couleur en dur.
- **Typographie** — deux familles. Libre Baskerville (700) pour les titres : `display`, `title`, `heading`, `item-title`, et en 400 pour le corps des articles (`reading`, 18/31, colonne de 640 px max). Plus Jakarta Sans pour l'interface : `body` (16/24), `body-sm` (14/20, texte secondaire en `ink-muted`), `label` (14/20, 600) et `caption` (12/16). Dans les maquettes et le code, on utilise toujours ces styles (classes `lo-text-*` ou variables `--text-*`), jamais une taille écrite à la main.
- **Espacement** — pas de 8 px : `space-2`, `space-4`, `space-6`, `space-10`. En cas de doute, on prend le plus grand.
- **Formes** — `radius-lg` pour tout ce qui contient (cartes, feuilles, menus, modales), `radius-full` pour ce qui se touche (boutons, recherche, puces, navigation, avatars), `radius-sm` pour les champs, bandeaux et vignettes. Pas d'angle vif.
- **Profondeur** — plutôt des aplats et des filets `line` que des ombres. Une seule ombre, `shadow-float`, pour ce qui flotte (menus, toasts, modales). Pas de dégradés dans l'interface : le verre du logo est la seule exception.
- **Focus** — le token `focus-ring` sur tout élément interactif : un anneau `coral-strong` de 2 px, détaché du bord.
- **Cibles** — 44 px pour les contrôles principaux, 36 px au minimum dans les barres denses.

## Iconographie et logo

Le logo est une enveloppe en verre et un soleil qui se lève derrière elle : la lettre qui arrive, à lire plus tard. Le verre (translucide, reflet en haut, liseré lumineux, ombre douce corail) est le seul effet « liquid glass » de l'interface : on ne l'utilise pas ailleurs. `Logo` propose le lockup (symbole + « letteron » en Plus Jakarta Sans 600, minuscules), le symbole seul et l'icône d'app ; `Wordmark` est le lockup en trois tailles de texte. Tons : `color`, `mono` (une couleur), `reverse` (sur `coral-strong` ou une photo) et `dark` (icône d'app sur la nuit prune). À 32 px et en dessous, le composant passe à une version plate (sans flou) pour rester net. Les SVG du symbole et des icônes d'app sont dans le groupe d'assets Logo (`assets/Logo/`) : favicon, icône d'extension, stores.

Les icônes viennent de `Icon` (trait arrondi de 2 px, style Lucide), par nom : `bookmark`, `archive`, `trash`, `search`, `folder`… en `ink`, `ink-muted` ou `coral-strong`.

## Composants

Composants React 18, exposés dans `window.LetterOn`. Le style est dans `components/bundle.css`, qui charge aussi les deux polices depuis Google Fonts.

- **Fondations** : `Icon`, `Logo`, `Wordmark`, `Kbd`.
- **Actions** : `Button` (pilules, `primary` une fois par écran), `IconButton`.
- **Formulaires** : `TextField` (libellé toujours visible), `SearchField`.
- **Filtres** : `Chip` (filtres combinables et filtres appliqués), `FilterButton` + `Menu`, `SegmentedControl`.
- **Navigation** : `NavItem`.
- **Contenu** : `BookmarkCard`, `TypeTag`, `Avatar`, `Badge`.
- **Retours** : `Alert`, `Toast`, `Dialog`, `EmptyState`, `Skeleton`, `SkeletonBookmark`.

Deux écrans d'exemple, `LibraryScreen` et `ReaderScreen`, montrent comment les assembler.

---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.LetterOn` (22 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs react 18 (not packed in this system: bring your own copy) (`window.React`), react-dom 18 (not packed in this system: bring your own copy) (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `components/bundle.css`, `components/bundle.js` and `components/index.d.ts` (for the editor’s props panel) onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); load the stylesheet before the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="LetterOn.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens only — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers.

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json`, `components/index.d.ts` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` is the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, palette, type, spacing, radius, shadow. (7.0k)

**Components** (`api/components/<Comp>.md`, 24; 2 of them showcase pages)

- **Fondations**: `Icon` — Les icônes de LetterOn, par nom : un trait arrondi de 2 px sur une grille de 24, dessiné en currentColor (il prend la couleur du texte autour) · `Wordmark` — « LetterOn » en Libre Baskerville 700, couleur ink, en attendant un vrai logo. md (22 px) dans la barre latérale et les en-têtes, lg (28 px) sur les pages de c… · `Kbd` — Une touche de clavier, pour expliquer le raccourci de l'extension (« Alt » « Shift » « S »)
- **Actions**: `Button` — Des boutons en pilule, avec un verbe d'abord : « Archive », « Save password ». primary (fond coral-strong, texte on-coral) ne sert qu'une fois par écran, pour… · `IconButton` — Un bouton rond qui ne montre qu'une icône : menu mobile, actions au survol d'un bookmark, fermer
- **Formulaires**: `TextField` — Un champ de saisie avec un libellé toujours visible au-dessus, et une aide ou une erreur en dessous · `SearchField` — Le champ de recherche de la liste, en pilule avec la loupe
- **Statut**: `Badge` — Un ou deux mots de statut, en pilule. neutral pour l'info, coral pour ce qui demande ton attention (« Not verified »), sun pour ce qui est nouveau ou à compter…
- **Filtres**: `Chip` — Une puce de filtre en pilule · `FilterButton` — Le déclencheur d'un filtre de la barre d'outils : « Type », « Collection », « Tag », « Status » · `Menu` — La liste de choix qui s'ouvre sous un FilterButton : des cases à cocher (plusieurs valeurs combinables), avec compteur ou icône optionnels · `SegmentedControl` — Un choix exclusif entre 2 ou 3 options, en pilule : la bascule List / Grid de la liste (iconOnly), le thème Light / Dark / System des réglages
- **Navigation**: `NavItem` — Une entrée de la barre latérale : « To read » (écran d'arrivée, compteur sun), « Archive », puis une entrée par collection avec sa pastille de couleur (dot, un…
- **Identité**: `Avatar` — Un rond avec la photo ou les initiales d'une personne
- `TypeTag` — Icon + label for a content type: Video, X post, Article, Link · `SkeletonBookmark` — SkeletonBookmark
- **Contenu**: `BookmarkCard` — Un bookmark (vidéo YouTube, post X, article ou lien), en grille avec une vignette 16:9 ou en liste compacte
- **Retours**: `Alert` — Un bandeau dans la page, au-dessus du formulaire ou du contenu qu'il concerne · `Toast` — La confirmation qui flotte en bas à droite après une action réussie, surtout une capture depuis l'extension : « Saved » + « At the top of your reading list. » · `Dialog` — La modale de confirmation, sur un voile scrim qui remplit son parent positionné · `EmptyState` — Ce qu'on montre quand il n'y a rien à montrer, pour ne jamais laisser croire que les bookmarks ont disparu · `Skeleton` — Les formes de chargement, en aplat line
- **Écrans**: `LibraryScreen` (showcase page) — Écran d'exemple de la bibliothèque web, sur desktop (1280 × 820) : la file « To read », écran d'arrivée de l'app · `ReaderScreen` (showcase page) — Écran d'exemple de la vue de lecture épurée d'un article, sur mobile (web responsive, 390 × 844)
