'use strict'
import faker from "faker";
import puppeteer from "puppeteer";
import 'babel-polyfill';

const APP = "https://a-braham.github.io/Questioner-UX/ui/signup.html";

// firstname, lastname, othername, email, phoneNumber, username, password

const lead = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    othername: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: "0716302015",
    username: faker.name.firstName(),
    password: "akT42kjn@"
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
        await page.click("input[id=firstname]");
        await page.type("input[id=firstname]", lead.firstname);
        await page.click("input[id=lastname]");
        await page.type("input[id=lastname]", lead.lastname);
        await page.click("input[id=othername]");
        await page.type("input[id=othername]", lead.othername);
        await page.click("input[id=username]");
        await page.type("input[id=username]", lead.username);
        await page.click("input[id=email]");
        await page.type("input[id=email]", lead.email);
        await page.click("input[id=phone]");
        await page.type("input[id=phone]", lead.phoneNumber);
        await page.click("input[id=password]");
        await page.type("input[id=password]", lead.password);
    }, 160000);
})