
// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/runiverse', changefreq: 'weekly', priority: 0.9 },
  { url: '/runiverse/monster-drops', changefreq: 'weekly', priority: 0.9 },
  { url: '/pixels/industry-limits', changefreq: 'weekly', priority: 0.8 },
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://chuckfresco.com' });
  const xml = await streamToPromise(Readable.from(links).pipe(sitemap)).then(data => data.toString());

  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated at public/sitemap.xml');
})();
