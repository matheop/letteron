# @letteron/extension

L'extension Chrome de capture (D-05, D-13, D-29) :

- bouton de la barre d'outils et raccourci global → enregistre la page courante ;
- clic-droit « Enregistrer dans LetterOn » sur un lien ;
- popup : états non connecté, en cours, succès (« Enregistré » + titre + « Ouvrir LetterOn »), échec avec « Réessayer ».
- Pas de liste d'items dans le popup.

Elle n'envoie **que l'URL** à l'API (contrat de capture dans `packages/shared`).
