# @letteron/db

Schéma et migrations. Modèle MVP (spec, « Modèle de données ») :

- **User** : email, méthode de connexion (Google / email), email vérifié.
- **Bookmark** (l'« item » de la spec) : url, type (`video` | `post` | `article` | `link`), titre, image, favicon, nom du site, extrait, texte parsé (articles), durée en secondes (vidéos), temps de lecture en minutes (articles), statut (`to_read` | `archived`), collectionId (optionnel), date d'ajout.
- **Collection** : nom, à plat (D-36). Un bookmark a 0 ou 1 collection.
- **Tag** : nom libre, propre au compte. Bookmark ↔ Tag : plusieurs à plusieurs.

**ORM et base : à choisir.**
