# @letteron/api

Le back :

- Auth : Google OAuth + email/mot de passe, vérification d'email, mot de passe oublié (D-31) ; suppression de compte (D-38).
- Capture : reçoit une URL, détecte le type (vidéo / post X / article / lien, D-32 à D-35), récupère les métadonnées, parse les articles (type Readability, D-10).
- Items privés par compte (D-18). Doublons autorisés (D-14). Tri par date d'ajout décroissante (D-40).

**Framework : à choisir** (peut aussi vivre dans `apps/web` si le framework web gère les routes API).
