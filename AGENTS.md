# AGENTS.md — LetterOn

Instructions pour tout agent de code qui travaille sur ce repo (Linear Coding sessions, Claude Code, etc.).

## Projet

LetterOn est une app « à lire plus tard » : sauvegarder en un clic vidéos YouTube, posts X, articles et liens, les organiser en collections et tags, les lire puis les archiver. MVP : web app responsive, extension Chrome (Manifest V3) et API ; pas d'app mobile native.

Règles du jeu complètes : document Linear « Workflow agentique — règles du jeu » (projet LetterOn).

**Lis aussi [`CLAUDE.md`](CLAUDE.md)** : règles produit, vocabulaire UI, boucle du design system et conventions. Il s'applique à tous les agents, pas seulement à Claude ; en cas de conflit, il fait foi sur ce fichier. Spec, décisions (D-xx) et glossaire : liens dans [`docs/README.md`](docs/README.md). Une décision du journal fait foi sur tout le reste ; cite son numéro quand elle justifie un choix.

- Stack : TypeScript strict (`tsconfig.base.json`), Node 22 (`.nvmrc`), workspaces npm. Framework web, base de données, auth et build de l'extension ne sont pas encore choisis (voir « Décisions ouvertes » dans `README.md`) : n'en introduis pas un sans approbation.
- Arborescence : `apps/web` (web app responsive), `apps/extension` (Chrome MV3), `apps/api` ; `packages/design-system`, `packages/db` (schéma et migrations), `packages/shared` (types du domaine, contrat de capture, détection du type).
- Installer : `nvm use && npm install`
- Tests : `npm test` · Lint : `npm run lint` (scripts de workspace lancés avec `--if-present` : ils ne font rien tant qu'un workspace ne les définit pas).
- Typecheck : pas encore de script ; à ajouter avec le premier code TypeScript.
- Design system : `npm run tokens` (génère `packages/design-system/dist/tokens.css`), `npm run check -w @letteron/design-system` (vérifie que les tokens sont à jour), `npm run preview -w @letteron/design-system` (catalogue local).
- Lancer l'app en local : `npm run dev` (aucune app n'a encore de script `dev`).

## Comment travailler une issue

1. Lis l'issue Linear en entier : objectif, critères d'acceptation, hors-scope, label `risk:*`.
2. Reste strictement dans le scope. Toute amélioration annexe repérée → propose-la en commentaire sur l'issue, ne la code pas.
3. Suis les patterns existants du code avant d'en inventer. Pas de nouvelle dépendance sans approbation.
4. Écris ou mets à jour les tests qui prouvent chaque critère d'acceptation.
5. Avant d'ouvrir la PR : tests, lint et typecheck passent en local.
6. PR petite et focalisée. Si l'issue s'avère plus grosse que prévu (> ~200 lignes), arrête-toi et propose un découpage (voir Needs approval).

## Design system

- Package : `packages/design-system` (`@letteron/design-system`). Conventions : `packages/design-system/README.md`, la charte dans `packages/design-system/artifact/README.md` et la section « Design system : la boucle » de `CLAUDE.md`.
- Source de vérité : en phase maquettes, l'artifact claude.ai fait foi et `packages/design-system/artifact/` en est le miroir (ne jamais l'éditer à la main). La bascule vers le code est notée dans `docs/README.md`.
- Utilise d'abord un composant de `@letteron/design-system` et les variables de `dist/tokens.css`, jamais de couleur, d'espacement, de taille de police ou de rayon en dur. Clair et sombre obligatoires.
- Tu ne crées PAS de nouveau composant générique dans `packages/design-system` : c'est le rôle de l'agent design system.
  Si un composant manque, crée-le localement dans le dossier de la feature et ajoute dans la PR une ligne
  `DS-GAP: <composant> — <besoin>`.
- Tu ne modifies pas un composant du DS ni un token dans une PR de feature. Si c'est nécessaire → Needs approval.

## Description de PR (obligatoire)

```
Closes <ID Linear, ex. STU-123>
Risk: low | high        ← recopie le label Linear risk:low / risk:high ; en cas de doute : high

## Ce qui change
- …

## Comment vérifier
- …

## Choix faits sans approbation
- … (ou "aucun")
```

`Risk: low` déclenche l'auto-merge si la CI est verte. Ne l'écris jamais si la PR touche auth, paiement, données utilisateur, migrations, infra ou dépendances.

## Protocole "Needs approval"

Tu t'arrêtes et demandes une décision — tu ne choisis PAS toi-même — quand :

- la spec est ambiguë et deux interprétations raisonnables mènent à des comportements différents pour l'utilisateur ;
- un cas limite n'est pas couvert par les critères d'acceptation et sa gestion se voit côté produit (message d'erreur, donnée perdue, état vide…) ;
- il faut ajouter une dépendance, changer un schéma de données, une API publique, ou toucher à auth / paiement ;
- le scope réel dépasse nettement l'estimation ;
- un test existant contredit la spec.

Tu NE demandes PAS pour : nommage, structure interne du code, choix techniques réversibles sans impact utilisateur. Décide, et liste-les dans "Choix faits sans approbation".

Quand tu t'arrêtes :

1. Passe l'issue au statut **Needs approval**, ajoute le label `needs-decision`.
2. Assigne l'issue à Mathéo (Linear : @matheo.pierini.pro) et mentionne-le dans le commentaire.
3. Poste UN commentaire au format :

```
@matheo.pierini.pro — Décision nécessaire

Contexte : <1-2 phrases, ce que tu faisais>
Question : <question fermée>

Options :
A) <option> — conséquence : …
B) <option> — conséquence : …

Recommandation : <A ou B> parce que …
Si pas de réponse : je reste bloqué sur cette issue (je ne devine pas).
```

4. Si une partie du travail est indépendante de la décision, termine-la et pousse-la sur la branche (PR en draft).

Quand Mathéo répond, reprends exactement à partir de sa réponse et remets l'issue en In Progress.
