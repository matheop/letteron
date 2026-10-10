# Docs LetterOn

Les documents de référence vivent sur claude.ai, dans le projet **LetterOn** :

| Document | Rôle | Lien |
| --- | --- | --- |
| Spec design des premiers écrans | écrans, user stories, modèle de données, contrat de capture | https://claude.ai/code/artifact/77cd436c-6a27-4e55-a1b3-13a8cca394d6 |
| Journal de décisions (ADR) | D-04 → D-42, avec contexte et conséquences | https://claude.ai/code/artifact/ed602160-c147-4f57-86c3-e77817e14424 |
| Glossaire | vocabulaire qui fait autorité (item, type, collection…) | https://claude.ai/code/artifact/f9aa5366-1d63-487e-b889-9a9583996e88 |
| Maquettes (canevas) | 25 écrans : compte et accès, première connexion, liste principale | https://claude.ai/code/artifact/0dadf51a-32ee-44dc-9543-58fe3c82dedd |
| Design system | charte, tokens, composants (historique : le repo fait foi depuis le 2026-10-08) | https://claude.ai/code/artifact/5be45f1c-a2dc-4ea9-bb31-ffac76e7794f |

`docs/design/` recevra les exports des maquettes (PNG/PDF) pour référence hors ligne.

## Source de vérité du design system

- [x] Phase maquettes (terminée) : l'artifact claude.ai faisait foi, `packages/design-system/artifact/` en était le miroir.
- [x] Phase code, depuis le **2026-10-08** (LET-10, démarrage de `apps/web`) : le package `packages/design-system` fait foi. Toute modification du design system se fait dans le repo ; l'artifact claude.ai n'est plus recopié ici, il est resynchronisé depuis le code si on veut garder l'aperçu.
