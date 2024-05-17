const { readFileSync, writeFileSync } = require('fs');

// Read the content of the first file
const first = readFileSync('./content/subfolder/first.txt', 'utf8');

// Read the content of the test file
const test = readFileSync('./content/subfolder/test.txt', 'utf8');

// Write the contents to a new file
writeFileSync(
  './content/new.txt',
  `hello jahnavi : ${first}, ${test}`,{flag:'a'}
);

console.log('File written successfully.');

