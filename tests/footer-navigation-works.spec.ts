// spec: specs/ennoventure-basic-test-plan.md

import { test, expect } from '@playwright/test';

test.describe('Navigation & Page Access', () => {
  test('Footer navigation works', async ({ page }) => {
    // 1. Scroll to the footer
    await page.goto('https://ennoventure.com/');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // 2. Click footer links: Home
    await page.getByRole('link', { name: 'Home' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/');

    // Click footer links: Technology
    await page.getByRole('link', { name: 'Technology' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/brand-protection-technology');

    // Click footer links: Solutions
    await page.getByRole('link', { name: 'Solutions' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/solutions');

    // Click footer links: Brand Protection Solutions
    await page.getByRole('link', { name: 'Brand Protection Solutions' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/brand-protection-solutions');

    // Click footer links: Invisible Authentication
    await page.getByRole('link', { name: 'Invisible Authentication' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/brand-protection-solutions/invisible-authentication');

    // Click footer links: Online Brand Protection
    await page.getByRole('link', { name: 'Online Brand Protection' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/brand-protection-solutions/online-brand-protection');

    // Click footer links: Chirper
    await page.getByRole('link', { name: 'Chirper' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/brand-protection-solutions/chirper');

    // Click footer links: Anti Counterfeit Solutions
    await page.getByRole('link', { name: 'Anti Counterfeit Solutions' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/anti-counterfeit-solution');

    // Click footer links: Product Authentication
    await page.getByRole('link', { name: 'Product Authentication' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/product-authentication');

    // Click footer links: Resources
    await page.getByRole('link', { name: 'Resources' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources');

    // Click footer links: Articles
    await page.getByRole('link', { name: 'Articles' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources/articles');

    // Click footer links: Case Studies
    await page.getByRole('link', { name: 'Case Studies' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources/case-studies');

    // Click footer links: Guides
    await page.getByRole('link', { name: 'Guides' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources/guides');

    // Click footer links: ROI Calculator
    await page.getByRole('link', { name: 'ROI Calculator' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources/roi-calculator');

    // Click footer links: Glossary
    await page.getByRole('link', { name: 'Glossary' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources/glossary');

    // Click footer links: Compare
    await page.getByRole('link', { name: 'Compare' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/resources/compare');

    // Click footer links: About Us
    await page.getByRole('link', { name: 'About Us' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/about');

    // Click footer links: Partner
    await page.getByRole('link', { name: 'Partner' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/about/partner');

    // Click footer links: Careers
    await page.getByRole('link', { name: 'Careers' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/careers');

    // Click footer links: Privacy Policy
    await page.getByRole('link', { name: 'Privacy Policy' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/policies/privacy-and-policy');

    // Click footer links: Terms & Conditions
    await page.getByRole('link', { name: 'Terms & Conditions' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/policies/terms-and-conditions');

    // Click footer links: Contact Us
    await page.getByRole('link', { name: 'Contact Us' }).last().click();
    await expect(page).toHaveURL('https://ennoventure.com/contact');

    // Verify footer social icons open external profiles
    await page.goto('https://ennoventure.com/');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Verify LinkedIn social link
    const linkedinLink = page.getByRole('link', { name: 'LinkedIn' });
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/ennoventure');

    // Verify YouTube social link
    const youtubeLink = page.getByRole('link', { name: 'YouTube' });
    await expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/UCZFp904MoHtaHX2i8jmoc5A');

    // Verify Twitter social link
    const twitterLink = page.getByRole('link', { name: 'Twitter' });
    await expect(twitterLink).toHaveAttribute('href', 'https://x.com/ennoventure');

    // Verify Facebook social link
    const facebookLink = page.getByRole('link', { name: 'Facebook' });
    await expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/ennoventure/');

    // Verify Instagram social link
    const instagramLink = page.getByRole('link', { name: 'Instagram' });
    await expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/ennoventure/');
  });
});