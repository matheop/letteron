# LetterOn

Tout ce que tu veux lire, au même endroit. Une app « à lire plus tard » : on enregistre en un clic depuis Chrome des vidéos YouTube, des posts X, des articles et des liens, puis on les range (collections et tags), on les lit et on les archive.

## Structure

```
apps/
  web/          web app (desktop + responsive mobile)
  extension/    extension Chrome (Manifest V3)
  api/          back : auth, capture, détection du type, métadonnées
packages/
  design-system/  tokens clair/sombre + composants (miroir de l'artifact claude.ai)
  db/             schéma et migrations
  shared/         types du domaine, contrat de capture, détection du type
docs/             liens vers la spec, les décisions, le glossaire, les maquettes
```

Pas d'app mobile native au MVP (D-04, D-39) : le mobile, c'est la web app en responsive.

## Démarrer

```bash
nvm use            # Node 22
npm install
npm run tokens     # génère packages/design-system/dist/tokens.css
```

## Décisions ouvertes

Le journal dit « stack web JS/TS classique » (D-08) sans trancher le détail. À décider avant de coder :

- [ ] Framework web (et s'il porte aussi l'API)
- [ ] Base de données et ORM
- [ ] Auth : lib ou service (Google OAuth + email/mot de passe + vérification, D-31)
- [ ] Service d'emails transactionnels
- [ ] Outil de build de l'extension
- [ ] Gestionnaire de paquets (npm workspaces pour l'instant)
- [ ] Hébergement

Chaque choix va dans le journal de décisions (voir `docs/README.md`).
