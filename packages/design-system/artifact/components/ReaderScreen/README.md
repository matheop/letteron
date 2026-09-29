# ReaderScreen

Écran d'exemple de la vue de lecture épurée d'un article, sur mobile (web responsive, 390 × 844). Le titre, le chapô et le corps sont en Libre Baskerville (style `reading`).

- **Barre du haut** : `IconButton` Back, « Read on site » (l'original, toujours disponible), et Delete. La suppression est définitive, donc elle passe par un `Dialog`.
- **En-tête** : `TypeTag`, puis la même ligne de métadonnées que la carte (source · 8 min read · date d'ajout).
- **Progression de lecture** : un filet `coral` sous la barre.
- **Feuille du bas** : la collection et les tags en `Chip`, et l'action principale « Done, archive », qui devient un état `mint` « Archived » qu'on peut annuler.
- Pour un article sous paywall, la même vue n'affiche que le titre, le chapô et l'image, puis « Read on site » en bouton principal.
