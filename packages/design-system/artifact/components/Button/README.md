# Button

Des boutons en pilule, avec un verbe d'abord : « Archive », « Save password ». `primary` (fond `coral-strong`, texte `on-coral`) ne sert qu'une fois par écran, pour l'action principale. `secondary` est la valeur par défaut. `ghost` est pour les actions discrètes ou inline (« Read on site », « Clear all »). `danger` (contour `coral-strong`) pour une action destructive qui n'est pas l'action principale (« Delete my account ») ; la confirmation, elle, passe par `Dialog`.

- Tailles : `md` (44 px, cible tactile confortable) par défaut, `sm` (32 px) dans les barres et les listes denses. `block` prend toute la largeur (formulaires).
- Icône optionnelle via `icon` : un nom d'`Icon` (« archive ») ou ton propre SVG en `currentColor`.
- Avec `href`, c'est un lien qui a l'air d'un bouton.
- Chargement : garde le bouton en place, `aria-busy="true"`, icône `refresh` et un libellé en cours (« Signing in… »).
- Focus clavier : le token `focus-ring`. Désactivé : 45 % d'opacité, jamais masqué sans explication.
