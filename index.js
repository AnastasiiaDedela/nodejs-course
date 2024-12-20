import express from 'express';
import { twitRouter } from './src/twit.controller.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express();

async function main() {
  app.use(express.json());
  app.use('/api/twits', twitRouter); 

  app.all('*', (req, res)=>{
    res.status(404).json({message: "not found"})
  })

  app.listen(process.env.PORT || 4200, () => {
    console.log('Server is running on port 4200');
  });
}

main();
