/* This file holds the scaper engine that gets all the urls from free stock images platforms .*/

// Scrape a url for images that are free stock and match image name
function photoScraper(imageName){
    // store a reference to the object context
    let _this = this;

    // free stock images website
    let pixabay = 'https://pixabay.com/photos/';
    let unsplash = 'https://unsplash.com/';
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
    return ;

    // Needed methods: .get(), .getAll(), .download(), .display(),
}