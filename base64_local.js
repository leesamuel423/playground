const fs = require('fs');

// Base64 string (without "data:image/png;base64,")
const base64String = fs.readFileSync('image.txt', 'utf-8');

// base64 string back to binary
const binaryData = Buffer.from(base64String, 'base64');

// binary to a file
fs.writeFile('image.png', binaryData, (err) => {
  if (err) throw err;
  console.log('Image saved as image.png');
});
