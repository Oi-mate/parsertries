const puppeteer = require('puppeteer');

const BROWSESR_DIR = 'C:\\Program Files\\Google\\Chrome\\Application';

async function startBrowser(){
    let browser;
    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            executablePath: 'chrome.exe',
            headless: false,
            ignoreDefaultArgs: ['--disable-extensions'],
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

module.exports = {
    startBrowser
};