// ESNext Modules
require('babel-polyfill');
const brandedQRCode = require('branded-qr-code');
const path = require('path');
const fs = require('fs');

run().catch(error => console.error(error.stack));

// Return a buffer with the PNG of the code
async function run() {
  const logoPath = path.resolve(__dirname, './logo/wapuu-qr.png'); // Add logo here.
  const url = ''; // Add your URL here.

  const res = await brandedQRCode.generate(
    {
      text: url,
      path: logoPath,
      ratio: 3,
      opt: {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: 512,
        scale: 6
      }
    }
  );

  fs.writeFile('output/qr-code.png', res, (err) => {
    if(err) {
      return console.log(err);
    }
    console.log('File saved successfully!');
  });
}
