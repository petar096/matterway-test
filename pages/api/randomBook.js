const puppeteer = require('puppeteer');

const getBook = async (url) => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 450,
    });
    const page = await browser.newPage();
    await page.goto(url);
    const imageItems = await page.$$('.answerWrapper');
    const randomIndex = Math.round(Math.random() * imageItems.length);
    const randomBook = imageItems[randomIndex];
    let checkoutUrl = ''

    // get random book link
    try {
        await randomBook.hover();
        const a = await page.$('section.js-tooltip > .buyButtonBar > li > #buyButton');
        const href = await page.$eval('#buyButton', el => el.getAttribute('href'));
        await page.goto(`https://www.goodreads.com${href}`);
    } catch (e) {
        console.log(e)
    }

    const buyNow = await page.$('#buy-now-button');

    if(buyNow) {
        await page.click('#buy-now-button')
        checkoutUrl = await page.url();
    } else {
        checkoutUrl = await page.url();
    }

    await browser.close();

    return checkoutUrl;
}

export default async (req, res) => {
    const checkoutUrl = await getBook(req.query.url)
    return res.status(200).json({url: checkoutUrl});

}


