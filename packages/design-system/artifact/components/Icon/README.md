# Icon

Les icônes de LetterOn, par nom : un trait arrondi de 2 px sur une grille de 24, dessiné en `currentColor` (il prend la couleur du texte autour).

- Noms : `bookmark`, `archive`, `unarchive`, `trash`, `search`, `plus`, `x`, `check`, `chevron-down`, `chevron-up`, `arrow-left`, `list`, `grid`, `folder`, `hash`, `mail`, `alert`, `clock`, `refresh`, `logout`, `sun`, `moon`, `monitor`, `download`, `external`, `keyboard`, `menu`, et les quatre types `video`, `post`, `article`, `link`.
- Tailles (tokens `size.icon.*`) : `xs` 14 (TypeTag, aide de champ), `sm` 16 (puce, chevron, petit bouton icône, toast), `md` 18 par défaut (boutons, navigation, menu, bandeau, recherche), `lg` 20 (bouton icône), `xl` 24 (modale, vignette en liste), `2xl` 28 (état vide normal), `3xl` 36 (vignette en grille), `4xl` 40 (grand état vide).
- Le disque coloré qui porte l'icône d'un toast ou d'une modale n'est pas une taille d'icône : `size.icon-badge.sm` 28 et `md` 48.
- Décorative par défaut (`aria-hidden`) ; donne un `label` quand l'icône porte seule le sens.
- `Button`, `IconButton`, `Chip`, `NavItem`, `Alert`, `Dialog` et `EmptyState` acceptent un nom d'icône dans leur prop `icon`.
