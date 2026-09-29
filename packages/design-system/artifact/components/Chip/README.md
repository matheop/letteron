# Chip

Une puce de filtre en pilule. Les filtres de LetterOn se combinent (type, collection, tag, statut, recherche) : chaque puce s'active indépendamment (`selected`, annoncé par `aria-pressed`) et peut afficher un compteur.

- Active : fond `ink`, texte `paper`. Au repos : bordure `line-strong` sur `surface`.
- Avec `onRemove`, elle devient un **filtre appliqué** avec une croix pour le retirer (« Design × », « "typo" × »). La rangée de filtres appliqués se termine par un `Button` ghost « Clear all ».
- Icône optionnelle de 16 px (les icônes de type sont dans `TypeTag`).
- Pour ouvrir une liste de choix, utilise `FilterButton` + `Menu`.
