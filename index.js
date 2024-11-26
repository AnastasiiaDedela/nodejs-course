import fs from 'fs';

// fs.mkdir('text-files', () => {
//   fs.writeFile('./text-files/some.txt', 'some text', (err, data) => {
//     console.log('it works', data);
//   });
// });

fs.unlink('./text-files/some.txt', () => {
  fs.rmdir('./text-files', () => {});
});
