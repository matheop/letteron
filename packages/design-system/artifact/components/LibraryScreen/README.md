# LibraryScreen

Écran d'exemple de la bibliothèque web, sur desktop (1280 × 820) : la file « To read », écran d'arrivée de l'app. Tout est cliquable dans l'aperçu : filtres, recherche, bascule List/Grid, actions au survol.

- **Barre latérale** (`NavItem`) : To read (compteur `sun`), Archive, les collections à plat avec leur pastille, « New collection », puis les tags.
- **Barre d'outils** : `SearchField` (titre et tags), `FilterButton` Type / Collection / Tag / Status, `SegmentedControl` List/Grid, `Avatar` du compte.
- **Filtres appliqués** : une rangée de `Chip` retirables et « Clear all ».
- **Contenu** : des `BookmarkCard` en grille de 4 colonnes ou en liste, du plus récent au plus ancien, avec source, durée ou temps de lecture, date d'ajout et extrait.
- **Confirmation de capture** : le `Toast` « Saved ».
