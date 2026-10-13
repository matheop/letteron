# LetterOn

Everything you want to read, in one place.

LetterOn est une app « à lire plus tard » : on y enregistre en un clic depuis Chrome des vidéos YouTube, des posts X, des articles et des liens, puis on les range (collections et tags), on les lit et on les archive. Le style est chaleureux, clair et un peu joueur : un fond couleur papier, un corail vif comme signature, un jaune soleil pour les bonnes nouvelles, des formes très arrondies. La typographie mêle une serif éditoriale pour les titres et une sans ronde et moderne pour l'interface. Il existe en thème clair et en thème sombre (une nuit prune), soignés tous les deux. Charte validée le 2026-10-11 (LET-14). Ce qui manque encore (mise en page, états des contrôles, mouvement, illustrations) est suivi dans LET-20.

Les valeurs exactes sont dans les tokens (`tokens/*.tokens.json`) ; les règles d'usage, de nommage et d'évolution dans [`CONVENTIONS.md`](CONVENTIONS.md). Cette charte dit l'intention.

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
- **Typographie** — deux familles. Libre Baskerville (700) pour les titres : `display`, `title`, `heading`, `item-title`, et en 400 pour le corps des articles (`reading`, 18/31, colonne de 640 px max). Plus Jakarta Sans pour l'interface : `body` (16/24), `body-sm` (14/20, texte secondaire en `ink-muted`), `label` (14/20, 600), `label-sm` (13/20, 600, contrôles compacts) et `caption` (12/16). Dans les maquettes et le code, on utilise toujours ces styles (classes `lo-text-*` ou variables `--text-*`), jamais une taille écrite à la main.
- **Espacement** — échelle `space-N` = N × 4 px, de 2 à 40 px. La mise en page des écrans suit un pas de 8 px : `space-2`, `space-4`, `space-6`, `space-10`. Les pas intermédiaires (2, 4, 6, 10, 12, 14, 20, 32 px) servent à l'intérieur des composants. En cas de doute, on prend le plus grand.
- **Formes** — `radius-lg` pour tout ce qui contient (cartes, feuilles, menus, modales), `radius-full` pour ce qui se touche (boutons, recherche, puces, navigation, avatars), `radius-sm` pour les champs, bandeaux, badges et touches, `radius-md` pour les vignettes et les grands squelettes. Pas d'angle vif.
- **Profondeur** — plutôt des aplats et des filets `line` que des ombres. Une seule ombre, `shadow-float`, pour ce qui flotte (menus, toasts, modales). Pas de dégradés dans l'interface : le verre du logo est la seule exception.
- **Focus** — le token `focus-ring` sur tout élément interactif : un anneau `coral-strong` de 2 px, détaché du bord.
- **Cibles** — 44 px (`size-control-lg`) pour les contrôles principaux, 36 px (`size-control-md`) au minimum dans les barres denses, y compris les petits boutons.

## Iconographie et logo

Le logo est une enveloppe en verre et un soleil qui se lève derrière elle : la lettre qui arrive, à lire plus tard. Le verre (translucide, reflet en haut, liseré lumineux, ombre douce corail) est le seul effet « liquid glass » de l'interface : on ne l'utilise pas ailleurs. `Logo` propose le lockup (symbole + « letteron » en Plus Jakarta Sans 600, minuscules), le symbole seul et l'icône d'app ; `Wordmark` est le lockup en trois tailles de texte. Tons : `color`, `mono` (une couleur), `reverse` (verre blanc `on-image`, sur `coral-strong` ou une photo) et `dark` (icône d'app sur la nuit prune). À 32 px et en dessous, le composant passe à une version plate (sans flou) pour rester net. Les SVG du symbole et des icônes d'app sont dans `artifact/assets/Logo/` : favicon, icône d'extension, stores.

Les icônes viennent de `Icon` (trait arrondi de 2 px, style Lucide), par nom : `bookmark`, `archive`, `trash`, `search`, `folder`… en `ink`, `ink-muted` ou `coral-strong`.

## Composants

Les composants sont décrits dans `artifact/components/` (le prototype de l'artifact claude.ai : un guide et un aperçu par composant) et portés en React dans `src/` (LET-18). Quand utiliser lequel : [`CONVENTIONS.md`](CONVENTIONS.md).

- **Fondations** : `Icon`, `Logo`, `Wordmark`, `Kbd`.
- **Actions** : `Button` (pilules, `primary` une fois par écran), `IconButton`.
- **Formulaires** : `TextField` (libellé toujours visible), `SearchField`.
- **Filtres** : `Chip` (filtres combinables et filtres appliqués), `FilterButton` + `Menu`, `SegmentedControl`.
- **Navigation** : `NavItem`.
- **Contenu** : `BookmarkCard`, `TypeTag`, `Avatar`, `Badge`.
- **Retours** : `Alert`, `Toast`, `Dialog`, `EmptyState`, `Skeleton`, `SkeletonBookmark`.

Deux écrans d'exemple, `LibraryScreen` et `ReaderScreen`, montrent comment les assembler. Ce sont des aperçus, pas des composants : ils ne sont ni exportés ni portés en React.

