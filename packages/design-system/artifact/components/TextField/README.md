# TextField

Un champ de saisie avec un libellé toujours visible au-dessus, et une aide ou une erreur en dessous. Il sert aux écrans de compte (email, mot de passe, confirmation de suppression) et au nom d'une collection.

- Bordure `line-strong` 2 px (≥ 3:1), qui passe en `coral-strong` avec le `focus-ring` au focus.
- `actionLabel` / `actionHref` ajoutent un lien sur la ligne du libellé (« Forgot password? »).
- `error` remplace l'aide, passe la bordure en `coral-strong` et ajoute l'icône `alert`. Les erreurs disent quoi faire : « That email doesn't look right ».
- Désactivé (pendant un envoi) : fond `paper`, bordure `line`, texte `ink-muted`.
- Le placeholder donne un exemple et ne remplace jamais le libellé.
