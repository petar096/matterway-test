const puppeteer = require('puppeteer');

const getCategories = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.goodreads.com/choiceawards/best-books-2020');
    const result = await page.evaluate(() => {
        let nodes =  document.querySelectorAll('.category__copy');
        const arr = [...nodes];
        return arr.map(el => {
            return {
                name: el.innerText,
                url: el.parentElement.href,
            }
        })
    })
    await browser.close();

    return result;
}

export default async (req, res) => {
    // console.log(getCategories());
    const categories = await getCategories();

    res.status(200).json({ categories })

}



