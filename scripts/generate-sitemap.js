/* eslint-disable no-console */
const { generateSitemap } = require('next-sitemap');

async function main() {
  try {
    await generateSitemap({
      baseUrl: 'https://wakewindowcalc.com',
      pagesDirectory: 'src/pages',
      targetDirectory: 'public',
    });
    console.log('✅ Sitemap generated');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main(); 