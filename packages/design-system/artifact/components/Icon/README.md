# Icon

Les icônes de LetterOn, par nom : un trait arrondi de 2 px sur une grille de 24, dessiné en `currentColor` (il prend la couleur du texte autour).

- Noms : `bookmark`, `archive`, `unarchive`, `trash`, `search`, `plus`, `x`, `check`, `chevron-down`, `chevron-up`, `arrow-left`, `list`, `grid`, `folder`, `hash`, `mail`, `alert`, `clock`, `refresh`, `logout`, `sun`, `moon`, `monitor`, `download`, `external`, `keyboard`, `menu`, et les quatre types `video`, `post`, `article`, `link`.
- Tailles : 16 dans les puces, 18 dans les boutons et la navigation, 20 dans les boutons icône, 24 et plus dans les modales et états vides.
- Décorative par défaut (`aria-hidden`) ; donne un `label` quand l'icône porte seule le sens.
- `Button`, `IconButton`, `Chip`, `NavItem`, `Alert`, `Dialog` et `EmptyState` acceptent un nom d'icône dans leur prop `icon`.
