import express from 'express';
const app = express();

async function main() {
  app.use(express.json());
  app.use('/api/twits', twitRouter); 

  app.listen(4200, () => {
    console.log('Server is running on port 4200');
  });
}

main();
