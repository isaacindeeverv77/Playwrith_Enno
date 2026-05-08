// spec: specs/ennoventure-basic-test-plan.md

import { test, expect } from '@playwright/test';

test.describe('Navigation & Page Access', () => {
  test('Main navigation works', async ({ page }) => {
    // 1. Open `https://ennoventure.com/`
    await page.goto('https://ennoventure.com/');

    // 2. Click "Home"
    await page.getByRole('link', { name: 'Home' }).first().click();
    await expect(page).toHaveURL('https://ennoventure.com/');
    await expect(page).toHaveTitle('Brand Protection & Intelligence | Ennoventure');

    // 3. Click "Technology"
    await page.getByRole('link', { name: 'Technology' }).first().click();
    await expect(page).toHaveURL('https://ennoventure.com/brand-protection-technology');
    await expect(page).toHaveTitle('Invisible Cryptographic Authentication Technology | Ennoventure');

    // 4. Click "Solutions"
    await page.getByRole('link', { name: 'Solutions' }).first().click();
    await expect(page).toHaveURL('https://ennoventure.com/solutions');
    await expect(page).toHaveTitle('Comprehensive Brand Protection Solutions | Ennoventure');

    // 5. Click "Resources"
    await page.getByRole('link', { name: 'Resources' }).first().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources');
    await expect(page).toHaveTitle('Explore Our Brand Protection Resource Center');

    // 6. Click "About"
    await page.getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL('https://ennoventure.com/about');
    await expect(page).toHaveTitle('About Ennoventure | Our Mission to End Counterfeiting');

    // 7. Click "Request Demo" or navigate to `/contact`
    await page.getByRole('button', { name: 'Request Demo' }).click();
    await expect(page).toHaveURL('https://ennoventure.com/contact');
    await expect(page).toHaveTitle('Contact Us | Ennoventure');
  });
});