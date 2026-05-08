import {test} from '@playwright/test';

test('TEST 1', async ({page}) => {
  console.log('test1: Hello world!');
  await page.goto('https://playwright.dev/');
});

test('TEST 2', async ({page}) => {
  console.log('test2: Hello world!');
  await page.goto('https://ennoventure.com//');
});