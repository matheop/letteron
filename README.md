# LetterOn

Tout ce que tu veux lire, au même endroit. Une app « à lire plus tard » : on enregistre en un clic depuis Chrome des vidéos YouTube, des posts X, des articles et des liens, puis on les range (collections et tags), on les lit et on les archive.

## Structure

```
apps/
  web/          web app Next.js (desktop + responsive mobile) ; monte l'API sous /api/v1 (D-45)
  extension/    extension Chrome (Manifest V3)
packages/
  api/            API Hono commune à tous les clients (web, extension, mobile plus tard), D-45 ; créée avec le premier endpoint
  design-system/  tokens clair/sombre + composants (source de vérité du design system)
  db/             schéma et migrations
  shared/         types du domaine, contrat de capture, détection du type
docs/             liens vers la spec, les décisions, le glossaire, les maquettes
```

Pas d'app mobile native au MVP (D-04, D-39) : le mobile, c'est la web app en responsive.

## Démarrer

```bash
nvm use            # Node 22
npm install
npm run tokens     # génère packages/design-system/dist/ depuis les tokens DTCG (Terrazzo)
```

## Décisions ouvertes

Le journal dit « stack web JS/TS classique » (D-08) sans trancher le détail. À décider avant de coder :

- [x] Framework front : Next.js 16 (App Router) dans `apps/web` (LET-10)
- [x] API : app Hono dans `packages/api`, exposée sous `/api/v1` et montée dans `apps/web` ; seul accès aux données pour tous les clients (D-45)
- [x] Source de vérité du design system : le package `packages/design-system` du repo, depuis le 2026-10-08 (voir `docs/README.md`)
- [x] Base de données et ORM : Postgres sur Neon (région UE), Drizzle dans `packages/db` (D-43)
- [x] Auth : Better Auth, Google OAuth + email/mot de passe + vérification (D-44, D-31)
- [x] Service d'emails transactionnels : Resend (D-46)
- [ ] Outil de build de l'extension
- [ ] Gestionnaire de paquets (npm workspaces pour l'instant)
- [x] Hébergement : Vercel (LET-8)

Chaque choix va dans le journal de décisions (voir `docs/README.md`).
