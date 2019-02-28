'use strict'
import faker from "faker";
import puppeteer from "puppeteer";
import 'babel-polyfill';

const APP = "https://a-braham.github.io/Questioner-UX/ui/admin/meetups.html";

// topic, location, happeningOn, description

const lead = {
    topic: faker.lorem.sentence(),
    location: faker.address.city(),
    happeningOn: "2019-03-02",
    description: faker.lorem.paragraph(),
    username: "admin",
    password: "super"
};

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width}, ${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });

    await page.goto("https://a-braham.github.io/Questioner-UX/ui/admin/login.html");
    await page.waitForSelector("#formData");
    await page.click("input[id=username]");
    await page.type("input[id=username]", lead.username);
    await page.click("input[id=password]");
    await page.type("input[id=password]", lead.password);
    await page.click("input[type=submit]");
    await page.goto(APP);
}, 16000);

afterAll(() => {
    browser.close()
})

describe('Testing create meetup form', () => {
    test('User input personl data', async () => {
        await page.click("button[id=myBtn]");
        await page.waitForSelector("#formData");
        await page.click("input[id=topic]");
        await page.type("input[id=topic]", lead.topic);
        await page.click("input[id=location]");
        await page.type("input[id=location]", lead.location);
        await page.click("input[id=happeningOn]");
        await page.type("input[id=happeningOn]", lead.happeningOn);
        await page.click("textarea[id=description]");
        await page.type("textarea[id=description]", lead.description);
    }, 1600000000);
})