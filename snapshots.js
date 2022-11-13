const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://www.evergreen-consulting.co.uk');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('.font_7');
  await percySnapshot('homepage');
});