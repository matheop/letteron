// Exemple de parcours LetterOn. Chaque test porte UN tag de criticité : @critical, @major ou @minor.
// La criticité de l'issue ouverte en cas d'échec est déduite de ces tags (voir deploy-pipeline.yml).
// Sélecteurs et routes à adapter à l'app réelle.
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel(/email/i).fill(process.env.SMOKE_USER_EMAIL!);
  await page.getByLabel(/mot de passe|password/i).fill(process.env.SMOKE_USER_PASSWORD!);
  await page.getByRole('button', { name: /se connecter|log in/i }).click();
});

test('sauvegarder un lien et le retrouver dans la liste', { tag: '@critical' }, async ({ page }) => {
  const url = `https://example.com/?smoke=${Date.now()}`;
  await page.getByRole('button', { name: /ajouter|save/i }).click();
  await page.getByRole('textbox', { name: /url|lien/i }).fill(url);
  await page.keyboard.press('Enter');
  await expect(page.getByText('example.com').first()).toBeVisible();
});

test('ranger un contenu dans une collection', { tag: '@major' }, async ({ page }) => {
  await page.goto('/collections');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('archiver un contenu lu', { tag: '@minor' }, async ({ page }) => {
  await page.goto('/archive');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
