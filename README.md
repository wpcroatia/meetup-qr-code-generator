# Meetup QR code generator

A simple generator of QR codes with Wapuu logo in the centre made in JS.

## Requirements

* Node JS

## Installation

1. Clone the repository
2. Type

```bash
yarn install
```

3. Run the script

```bash
yarn run generate
```

This will generate a QR code in the `output/` folder.

## Changing the logo in the middle of the QR code

Once you add your png of the image in the logo folder, you'll need to change it in the `index.js` as well:

```js
// Return a buffer with the PNG of the code
async function run() {
  const logoPath = path.resolve(__dirname, './logo/wapuu-qr.png'); // Add logo here.
```

## Changing the URL of the QR code

You can modify the url where you want your QA to point to, by changing it in the `index.js`

```js
// Return a buffer with the PNG of the code
async function run() {
  // ...
  const url = ''; // Add your URL here.
```
