# AGENTS.md — LetterOn

Instructions pour tout agent de code qui travaille sur ce repo (Linear Coding sessions, Claude Code, etc.).

## Projet

LetterOn est une app « à lire plus tard » : sauvegarder en un clic vidéos YouTube, posts X, articles et liens, les organiser en collections et tags, les lire puis les archiver. MVP : web app responsive, extension Chrome (Manifest V3) et API ; pas d'app mobile native.

Règles du jeu complètes : document Linear « Workflow agentique — règles du jeu » (projet LetterOn).

<!-- À compléter par l'agent qui traite l'issue AGENTS.md : stack, arborescence principale, commandes. -->
- Stack : TODO
- Lancer les tests : `TODO` (ex. `npm test`)
- Lint / typecheck : `TODO`
- Lancer l'app en local : `TODO`

## Comment travailler une issue

1. Lis l'issue Linear en entier : objectif, critères d'acceptation, hors-scope, label `risk:*`.
2. Reste strictement dans le scope. Toute amélioration annexe repérée → propose-la en commentaire sur l'issue, ne la code pas.
3. Suis les patterns existants du code avant d'en inventer. Pas de nouvelle dépendance sans approbation.
4. Écris ou mets à jour les tests qui prouvent chaque critère d'acceptation.
5. Avant d'ouvrir la PR : tests, lint et typecheck passent en local.
6. PR petite et focalisée. Si l'issue s'avère plus grosse que prévu (> ~200 lignes), arrête-toi et propose un découpage (voir Needs approval).

## Design system

- Conventions : `docs/design-system.md`. Composants : `components/ui/` (à ajuster au chemin réel).
- Utilise d'abord un composant du DS. Utilise les tokens, jamais de couleur, d'espacement ou de taille de police en dur.
- Tu ne crées PAS de nouveau composant générique dans `components/ui/` : c'est le rôle de l'agent design system.
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
