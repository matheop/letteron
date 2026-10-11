# LetterOn — instructions pour Claude

App « à lire plus tard » (web + extension Chrome). Dev solo JS/TS. Interface en anglais pour l'instant (traduction plus tard) ; docs et échanges en français.

## Où est quoi

- Spec, décisions (D-xx), glossaire, maquettes, design system : liens dans `docs/README.md`. Ils vivent sur claude.ai : lis-les avec les outils Claude Docs / Artifact, ne les recopie pas ici.
- Une décision du journal fait foi sur tout le reste. Cite son numéro (D-xx) dans le code ou la PR quand elle justifie un choix.
- Vocabulaire UI (anglais) : **bookmark** pour le contenu enregistré (l'« item » de la spec ; `Bookmark` dans le code), types Video / X post / Article / Link, « To read » / « Archive » (statut « archived »), Collection, Tag. Pas de boîte de réception (D-42).

## Règles produit à ne pas casser

- 4 types : `video`, `post`, `article`, `link`. Détection dans `packages/shared` (étapes URL) et côté API (liste blanche presse, seuil ~300 mots).
- L'extension n'envoie que l'URL. Capture en un clic, sans popup de choix (D-13).
- Liste unique triée du plus récent au plus ancien (D-40) ; filtres type/collection/tag/statut combinables avec la recherche (D-26).
- Collections à plat, 0 ou 1 par item ; tags multiples (D-07, D-36).
- Suppression définitive avec confirmation, pas de corbeille (D-22).
- Carte d'un bookmark : `BookmarkCard` compose seul la ligne « source · durée (vidéo) ou temps de lecture (article) · date d'ajout » ; l'extrait (article, post X) est un champ à part. Ne jamais écrire cette ligne à la main. La date d'ajout s'affiche dans la liste (révise D-21, 2026-09-29).
- Hors MVP : IA, notes/surlignage, import/export, partage, raccourcis clavier dans la web app, apps natives (voir la spec, « Hors périmètre »).

## Design system : la boucle

Règles complètes : `packages/design-system/CONVENTIONS.md`. En bref :

1. **UI = design system uniquement.** Composants de `@letteron/design-system`, variables de `dist/tokens.css` générées depuis les tokens DTCG de `packages/design-system/tokens/` (lis la `$description` d'un token avant de l'utiliser). Aucune valeur en dur. Clair et sombre obligatoires.
2. **Il manque quelque chose** : un composant → composant local + ligne `DS-GAP` dans la PR ; un token → Needs approval.
3. **Promotion** : un motif validé et réutilisé entre dans `packages/design-system` avec son guide, ses tests et son aperçu (seuil : voir CONVENTIONS.md).
4. **Source de vérité** : depuis le 2026-10-08, le repo fait foi (`docs/README.md`) ; après un changement de tokens, `npm run tokens`.

## Conventions

- TypeScript strict (`tsconfig.base.json`). Node 22. Workspaces npm (`apps/*`, `packages/*`).
- Textes d'interface (anglais) : phrases courtes, deuxième personne, majuscule au premier mot seulement, un point d'exclamation max par écran, pas d'emoji (charte du design system).
- Accessibilité : vrais `<button>`/`<a>`/`<label>`, contraste 4.5:1, focus visible (`--focus-ring`).
- Secrets dans `.env` (modèle : `.env.example`), jamais committés.
