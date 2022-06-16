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
    let reShot = 'https://www.reshot.com/free-stock-photos/';
    let freepik = 'https://www.freepik.com/';

    // url array to fill from scraper
    let imageUrls = [];
    let current_url;


    // Needed methods: .get(), .getAll(), .download(), .display(),

    this.get = async (siteName, imageName) => {
        let siteUrl;
        siteName = siteName.toUpperCase()
        if (siteName == 'UNSPLASH') {
            siteUrl = unsplash;
        }

        if (siteName == 'PIXABAY') {
            siteUrl = pixabay;
        }

        if (siteName == 'PEXELS') {
            siteUrl = pexels;
        }

        if (siteName == 'FREEPIK') {
            siteUrl = freepik;
        }

        if (siteName == 'PIKWIZARD') {
            siteUrl = pikWizard;
        }

        if (siteName == 'RESHOT') {
            siteUrl == reShot;
        }
        try {
            const { data } = await axios.get(`${siteUrl}/${imageName}/`);
            const $ = cheerio.load(data);
            const imageUrls = [];

            $('figure a').each((_idx, el) => {
                const url = $(el).prop('href');
                imageUrls.push(siteUrl + url);
            });
            return imageUrls;
        }
        catch (err) {
            console.log("error:", err);
        }
    }
}
let scrape = new photoScraper();

scrape.get('unsplash', 'pie').then((imageUrls) => console.log(imageUrls));