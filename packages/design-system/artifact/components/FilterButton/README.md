# FilterButton

Le déclencheur d'un filtre de la barre d'outils : « Type », « Collection », « Tag », « Status ». Il a le style de `Chip` avec un chevron.

- Sans valeur : au repos. Avec `value`, il affiche « Type: Video » dans le style actif (`ink`).
- `open` retourne le chevron et annonce `aria-expanded` ; le `Menu` s'affiche juste en dessous, aligné à gauche, 8 px plus bas.
- Chaque valeur appliquée apparaît aussi comme `Chip` retirable dans la rangée des filtres appliqués.
