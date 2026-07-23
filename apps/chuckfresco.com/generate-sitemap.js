// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/videos', changefreq: 'daily', priority: 0.9 },

  // Pixels
  { url: '/pixels/land-inventory', changefreq: 'weekly', priority: 0.9 },
  { url: '/pixels/land-inventory/v1', changefreq: 'weekly', priority: 0.6 },
  { url: '/pixels/industry-limits', changefreq: 'weekly', priority: 0.8 },
  { url: '/pixels/animal/drops', changefreq: 'weekly', priority: 0.8 },
  { url: '/pixels/quest/alchemist-concoction', changefreq: 'weekly', priority: 0.8 },

  // Sunflower Land
  { url: '/sfl/helpers', changefreq: 'daily', priority: 0.9 },
  { url: '/sfl/helpers/winners', changefreq: 'weekly', priority: 0.8 },
  { url: '/sfl/fishing', changefreq: 'weekly', priority: 0.9 },
  { url: '/sfl/fish-market', changefreq: 'weekly', priority: 0.9 },
  { url: '/sfl/crops', changefreq: 'weekly', priority: 0.9 },

  // Axie Infinity
  { url: '/axie/collection', changefreq: 'daily', priority: 0.9 },
  { url: '/axie-dom/strategy', changefreq: 'weekly', priority: 0.9 },
  { url: '/axie-dom/power-ups', changefreq: 'weekly', priority: 0.9 },

  // Forgotten Runiverse
  { url: '/runiverse', changefreq: 'weekly', priority: 0.9 },
  { url: '/runiverse/spells', changefreq: 'weekly', priority: 0.8 },
  { url: '/runiverse/monster-drops', changefreq: 'weekly', priority: 0.8 },
  { url: '/runiverse/status-effects', changefreq: 'weekly', priority: 0.8 },
  { url: '/runiverse/equipment/', changefreq: 'weekly', priority: 0.8 },
  { url: '/runiverse/equipment/all', changefreq: 'weekly', priority: 0.7 },
  { url: '/runiverse/resources', changefreq: 'weekly', priority: 0.8 },
  { url: '/runiverse/level-up-guide', changefreq: 'weekly', priority: 0.9 },
  { url: '/runiverse/animations/', changefreq: 'monthly', priority: 0.7 },
  { url: '/runiverse/support', changefreq: 'monthly', priority: 0.7 },
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://chuckfresco.com' });
  const xml = await streamToPromise(Readable.from(links).pipe(sitemap)).then(data =>
    data.toString()
  );

  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated at public/sitemap.xml');
})();
