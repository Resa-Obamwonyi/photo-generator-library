/* This file holds the scaper engine that gets all the urls from free stock images platforms .*/
const axios = require('axios');
const cheerio = require('cheerio');


// Scrape a url for images that are free stock and match image name
function photoScraper() {
    // store a reference to the object context
    let _this = this;

    // free stock images website
    let pixabay = 'https://pixabay.com/photos/search';
    let unsplash = 'https://unsplash.com/s/photos';
    let pexels = 'https://www.pexels.com/';
    let pikWizard = 'https://pikwizard.com/';
    let rawPixel = 'https://www.rawpixel.com/free-images';
    let reShot = 'https://www.reshot.com/free-stock-photos/';
    let freepik = 'https://www.freepik.com/';
    let vecteezy = 'https://www.vecteezy.com/free-photos';
    let morgueFile = 'https://morguefile.com/';
    let pikJumbo = 'https://picjumbo.com/free-stock-photos/';

    // url array to fill from scraper
    let imageUrls = [];
    let current_url;


    // Needed methods: .get(), .getAll(), .download(), .display(),

    this.get = async (siteUrl, imageName) => {
        // console.log(`${siteUrl}/${imageName}/`);
        try {
            const { data } = await axios.get(`${siteUrl}/${imageName}/`);
            const $ = cheerio.load(data);
            const imageUrls = [];

            $('figure a').each((_idx, el) => {
                const url = $(el).prop('href');
                imageUrls.push(url);
            });
            return imageUrls;
        }
        catch (err) {
            console.log("error:", err);
        }
    }
}
let scrape = new photoScraper();

scrape.get('https://unsplash.com/s/photos', 'pie').then((imageUrls) => console.log(imageUrls));