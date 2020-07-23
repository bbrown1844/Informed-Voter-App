var Scraper = require('images-scraper');
 
const google = new Scraper({
  puppeteer: {
    headless: false,
  }
});
 
(async () => {
  const results = await google.scrape('banana', 200);
  console.log('results', results);
})();