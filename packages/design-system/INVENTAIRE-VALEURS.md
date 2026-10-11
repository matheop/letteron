# Inventaire des valeurs en dur de `artifact/components/bundle.css` (LET-19)

Document de travail pour LET-18 (port des composants) : chaque valeur écrite en dur dans `bundle.css` est associée à un token. **Décisions validées par Mathéo le 2026-10-11** (questions Q1 à Q6 sur LET-19, recommandation A partout) : les nouveaux tokens (🆕) sont dans `tokens/foundation.tokens.json` et `tokens/color.tokens.json`, les exceptions (⚖️) sont acceptées et doivent être commentées dans le code. Les cibles marquées « +N px » changent légèrement le rendu, c'est voulu. Une fois LET-18 terminé, ce fichier peut être supprimé.

Généré en lisant les 174 déclarations qui contiennent une valeur en dur (180 occurrences, `var(--…)` exclus).

| Statut | Occurrences |
| --- | --- |
| ✅ Token existant | 59 |
| 🆕 Nouveau token (ajouté) | 114 |
| ⚖️ Exception acceptée (sans token) | 7 |

| Famille | Valeur | Occ. | Statut | Cible | Où (sélecteurs) |
| --- | --- | --- | --- | --- | --- |
| Bordure | `1px` | 8 | 🆕 Q5 | `border-width.thin` 1 | `.lo-iconbtn` `.lo-badge-neutral` `.lo-menu` `.lo-seg` `.lo-bm` `.lo-alert-info` `.lo-toast` `.lo-kbd` |
| Bordure | `2px` | 10 | 🆕 Q5 | `border-width.thick` 2 (dont l'outline transparent du focus en mode contraste élevé) | `.lo-btn` `.lo-iconbtn` `.lo-field-control` `.lo-search` `.lo-chip` `.lo-seg-btn` `.lo-nav-item` `.lo-kbd` |
| Couleur | `#fff` | 1 | 🆕 Q5 | `color.on-image` (#ffffff dans les deux thèmes) : logo « reverse » sur corail ou photo | `.lo-logo-reverse` |
| Espacement | `-6px` | 1 | ⚖️ Q6 | décalage optique d'icône | `.lo-alert-icon` |
| Espacement | `1px` | 1 | ⚖️ Q6 | décalage optique d'icône (à supprimer si l'alignement CSS suffit) | `.lo-field-hint` |
| Espacement | `2px` | 3 | 🆕 Q1 | `space.0-5` | `.lo-menu` `.lo-seg` `.lo-nav-count-sun` |
| Espacement | `3px` | 1 | ⚖️ Q6 | décalage optique d'icône | `.lo-field-error` |
| Espacement | `4px` | 7 | 🆕 Q1 | `space.1` | `.lo-chip-x` `.lo-seg` `.lo-nav-dot` `.lo-type` `.lo-bm-body` `.lo-bm-tags` `.lo-bm-actions` |
| Espacement | `6px` | 6 | 🆕 Q1 | `space.1-5` | `.lo-field` `.lo-field-hint` `.lo-chip` `.lo-chip-removable` `.lo-seg-btn` `.lo-bm-grid` |
| Espacement | `8px` | 2 | ✅ | `space.2` | `.lo-nav-count-sun` `.lo-kbd` |
| Espacement | `10px` | 3 | 🆕 Q1 | `space.2-5` | `.lo-field-control` `.lo-badge` `.lo-filter` |
| Espacement | `12px` | 11 | 🆕 Q1 | `space.3` | `.lo-menu-item` `.lo-nav-item` `.lo-alert` `.lo-toast` `.lo-dialog-actions` `.lo-empty-actions` |
| Espacement | `14px` | 4 | 🆕 Q1 | `space.3-5` | `.lo-btn-sm` `.lo-field-control` `.lo-chip` `.lo-seg-btn` |
| Espacement | `16px` | 3 | ✅ | `space.4` | `.lo-bm-grid` `.lo-toast` |
| Espacement | `20px` | 1 | 🆕 Q1 | `space.5` | `.lo-btn-md` |
| Espacement | `32px` | 1 | 🆕 Q1 | `space.8` | `.lo-dialog` |
| Hauteur de ligne | `16px` | 7 | ✅ | style de texte correspondant (`caption`) | `.lo-field-hint` `.lo-badge` `.lo-type` `.lo-bm-coll` `.lo-bm-meta` `.lo-bm-tag` `.lo-kbd` |
| Hauteur de ligne | `20px` | 10 | ✅ | `label` / `body-sm` | `.lo-btn` `.lo-field-label` `.lo-field-action` `.lo-field-error` `.lo-chip` `.lo-menu-item` `.lo-nav-item` `.lo-bm-excerpt` `.lo-alert-body` `.lo-toast` |
| Hauteur de ligne | `24px` | 4 | ✅ | `body` / `item-title` | `.lo-field-control` `.lo-bm-title` `.lo-dialog-text` `.lo-empty-text` |
| Hauteur de ligne | `28px` | 2 | ✅ | `heading` | `.lo-dialog-title` `.lo-empty-md` |
| Hauteur de ligne | `44px` | 1 | ✅ | `display` | `.lo-empty-lg` |
| Interlettrage | `-0.01em` | 1 | ✅ | `text.display` | `.lo-empty-lg` |
| Interlettrage | `-0.03em` | 1 | ⚖️ Q6 | constante du logo (marque, comme ses SVG) | `.lo-logo-word` |
| Interlettrage | `.01em` | 1 | ✅ | `text.caption` (tracking 0.01em) | `.lo-badge` |
| Mouvement | `.12s` | 3 | 🆕 Q5 | `duration.fast` 120ms + `easing.standard` (ease) | `.lo-btn` `.lo-bm-actions` |
| Rayon | `6px` | 1 | 🆕 Q3 | `radius.sm` (8, +2 px) | `.lo-kbd` |
| Rayon | `14px` | 2 | 🆕 Q3 | `radius.md` 14 | `.lo-bm-thumb` `.lo-skel-lg` |
| Taille de police | `12px` | 11 | ✅ | `text.caption` (12/16) | `.lo-field-hint` `.lo-badge` `.lo-avatar-sm` `.lo-chip-count` `.lo-menu-count` `.lo-nav-count` `.lo-type` `.lo-bm-coll` `.lo-bm-meta` `.lo-bm-tag` `.lo-kbd` |
| Taille de police | `13px` | 2 | 🆕 Q2 | `text.label-sm` 13/20, 600 | `.lo-btn-sm` `.lo-seg-btn` |
| Taille de police | `14px` | 10 | ✅ | `text.label` / `text.body-sm` (14/20) | `.lo-btn` `.lo-field-label` `.lo-field-action` `.lo-field-error` `.lo-chip` `.lo-menu-item` `.lo-nav-item` `.lo-bm-excerpt` `.lo-alert-body` `.lo-toast` |
| Taille de police | `15px` | 2 | 🆕 Q2 | recherche → `text.body` (16) ; initiales d'avatar → `text.label` | `.lo-search-input` `.lo-avatar-md` |
| Taille de police | `16px` | 3 | ✅ | `text.body` (16/24) | `.lo-field-control` `.lo-dialog-text` `.lo-empty-text` |
| Taille de police | `17px` | 1 | ✅ | `text.item-title` | `.lo-bm-title` |
| Taille de police | `20px` | 2 | ✅ | `text.heading` | `.lo-dialog-title` `.lo-empty-md` |
| Taille de police | `22px` | 1 | 🆕 Q2 | initiales d'avatar lg → `text.heading` (20) | `.lo-avatar-lg` |
| Taille de police | `36px` | 1 | ✅ | `text.display` | `.lo-empty-lg` |
| Taille | `1px` | 2 | ⚖️ Q6 | `.lo-sr` : technique « visible uniquement aux lecteurs d'écran » | `.lo-sr` |
| Taille | `10px` | 2 | 🆕 Q4 | `size.dot` 10 (pastille de navigation) | `.lo-nav-dot` |
| Taille | `14px` | 2 | 🆕 Q4 | `size.icon.xs` 14 | `.lo-type-icon` |
| Taille | `16px` | 2 | 🆕 Q4 | `size.icon.sm` 16 | `.lo-chip-icon` |
| Taille | `18px` | 4 | 🆕 Q4 | `size.icon.md` 18 (défaut d'Icon) | `.lo-btn-icon` `.lo-menu-check` |
| Taille | `24px` | 4 | 🆕 Q4 | `size.control.xs` 24 | `.lo-badge` `.lo-chip-x` `.lo-kbd` |
| Taille | `28px` | 2 | 🆕 Q4 | `size.icon.lg` 28 | `.lo-toast-icon` |
| Taille | `32px` | 5 | 🆕 Q4 | `size.control.sm` 32 | `.lo-btn-sm` `.lo-avatar-sm` `.lo-alert-icon` |
| Taille | `36px` | 5 | 🆕 Q4 | `size.control.md` 36 | `.lo-iconbtn-sm` `.lo-chip` `.lo-seg-btn` |
| Taille | `40px` | 1 | 🆕 Q4 | `size.control.lg` (44, +4 px) — navigation | `.lo-nav-item` |
| Taille | `44px` | 7 | 🆕 Q4 | `size.control.lg` 44 (cible tactile) | `.lo-btn-md` `.lo-iconbtn-md` `.lo-search` `.lo-avatar-md` `.lo-menu-item` |
| Taille | `48px` | 2 | 🆕 Q4 | `size.icon.xl` 48 | `.lo-dialog-icon` |
| Taille | `64px` | 3 | 🆕 Q4 | `size.media.sm` 64 (avatar lg, vignette) | `.lo-avatar-lg` `.lo-bm-list` |
| Taille | `72px` | 2 | 🆕 Q4 | `size.illustration.md` 72 | `.lo-empty-md` |
| Taille | `96px` | 2 | 🆕 Q4 | `size.media.md` 96 (vignette, textarea) | `textarea.lo-field-control` `.lo-bm-list` |
| Taille | `104px` | 2 | 🆕 Q4 | `size.illustration.lg` 104 | `.lo-empty-lg` |
| Taille | `220px` | 1 | 🆕 Q4 | `size.width.menu` 220 | `.lo-menu` |
| Taille | `420px` | 1 | ⚖️ Q6 | `.lo-stack` : aide de mise en page des aperçus, pas un composant | `.lo-stack` |
| Taille | `480px` | 2 | 🆕 Q4 | `size.width.dialog` 480 | `.lo-dialog` `.lo-empty` |
