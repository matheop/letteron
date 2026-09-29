# BookmarkCard

Un bookmark (vidéo YouTube, post X, article ou lien), en grille avec une vignette 16:9 ou en liste compacte. De haut en bas : le type (icône et libellé), la collection s'il y en a une, le titre en Libre Baskerville (2 lignes max en grille, 1 en liste), la ligne de métadonnées, l'extrait, puis les tags.

- **Métadonnées** : le composant les compose lui-même, `source · longueur · date`, à partir de `source`, `duration` (vidéo, « 18:42 »), `readingTime` (article, en minutes → « 8 min read ») et `addedAt` (« 3h ago », « 2d ago », puis « Sep 12 »). N'écris jamais cette ligne à la main : passe les champs.
- **Extrait** (`excerpt`) : texte courant sous les métadonnées, pour un article (chapô) ou un post X (début du texte). Ignoré pour une vidéo ou un lien.
- **Ouvrir** : avec `href` (ou `onOpen`), le titre devient un lien étendu à toute la carte.
- **Actions au survol** : `onArchive` et `onDelete` affichent Archive (Unarchive si `archived`) et Delete en haut à droite (grille) ou au bout de la ligne (liste), au survol et au focus clavier. `showActions` les laisse visibles (maquettes, tactile). Delete ouvre toujours une confirmation : pas de corbeille.
- Sans `thumbnail`, la vignette est un aplat de la couleur du type avec son icône.
- `archived` atténue la vignette et affiche le badge « Archived ».
- Pour les maquettes et les tests, `now` fixe l'heure de référence des dates.
