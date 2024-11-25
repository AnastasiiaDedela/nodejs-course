import fs from 'fs';

fs.readFile('test.txt', 'utf-8', (err, data) => {
  fs.writeFile('test.txt', data + 'hello', (err, data) => {
    console.log('it works');
  });
});
