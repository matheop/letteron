# @letteron/web

La web app : connexion, liste principale (À lire, Archives, collections, tags), fiche item, paramètres.

- Écrans : voir la spec (docs/README.md) et les maquettes du canevas.
- UI : uniquement les composants et tokens de `@letteron/design-system`. Aucune couleur en dur.
- Thème clair/sombre, qui suit le système par défaut (D-25).
- Pas de raccourcis clavier au MVP (D-30).

## Stack

Next.js 16 (App Router), TypeScript strict (étend `tsconfig.base.json`), déployé sur Vercel (projet `letteron`, root `apps/web`). Les tokens du design system sont importés une fois dans `app/layout.tsx`.

## Commandes

Depuis la racine du repo :

```bash
npm run dev         # http://localhost:3000 (régénère tokens.css avant)
npm run build       # build de production
npm run lint        # ESLint (config Next)
npm run typecheck   # next typegen + tsc --noEmit
npm test            # Vitest
```
