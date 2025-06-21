const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../../images');
const outputFile = path.join(imagesDir, 'images.json');

const files = fs.readdirSync(imagesDir)
  .filter(file => /\.(gif|jpg|jpeg|png)$/i.test(file));

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log(`Generated images.json with ${files.length} files.`);