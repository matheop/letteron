# Dialog

La modale de confirmation, sur un voile `scrim` qui remplit son parent positionné. Elle sert aux actions sans retour : supprimer un bookmark, une collection ou le compte (il n'y a pas de corbeille).

- Icône optionnelle (`tone="danger"` : pastille `coral-soft`, icône `coral-strong`), titre en question (« Delete your account? »), une phrase qui dit ce qui sera perdu.
- `children` accueille un champ de confirmation (`TextField` « Type DELETE to confirm ») ou le nom d'une collection.
- Deux boutons à droite : `cancelLabel` (secondary, « Cancel ») puis `confirmLabel` (primary, le verbe exact : « Delete permanently »).
- Sur mobile, la même carte s'ancre en bas comme une feuille.
