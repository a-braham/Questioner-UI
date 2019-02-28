'use strict'
import faker from "faker";
import puppeteer from "puppeteer";
import 'babel-polyfill';

const questions = require("../ui/js/view_questions")

const APP = "https://a-braham.github.io/Questioner-UX/ui/index.html";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 80,
        // args: [`--window-size=${width}, ${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height});
});

afterAll(() => {
    browser.close()
})

describe('Testing signup form', () => {
    test('User input personl data', async () => {
        await page.goto(APP);
        let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain()
    }, 1600000);
})