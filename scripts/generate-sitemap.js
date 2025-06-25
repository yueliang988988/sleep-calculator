/* eslint-disable no-console */
const { execSync } = require('child_process');

async function main() {
  try {
    execSync('npx next-sitemap', { stdio: 'inherit' });
    console.log('✅  Sitemap generated');
  } catch (err) {
    console.error('❌  Sitemap generation failed');
    console.error(err);
    process.exit(1);   // 让构建失败以便你注意
  }
}
main(); 