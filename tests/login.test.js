'use strict'
import faker from "faker";
import puppeteer from "puppeteer";
import 'babel-polyfill';

const APP = "https://a-braham.github.io/Questioner-UX/ui/login.html";

// username, password

const lead = {
    username: "admin",
    password: "super"
};

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
        await page.waitForSelector("#formData");
        await page.click("input[id=username]");
        await page.type("input[id=username]", lead.username);
        await page.click("input[id=password]");
        await page.type("input[id=password]", lead.password);
        await page.click("input[type=submit]");
    }, 16000);
})