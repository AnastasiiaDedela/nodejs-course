import { Router } from 'express';
import { TwitService } from './twit.service.js';
import { authMiddlware } from '../auth.middleware.js';
const router = Router();
const twitService = new TwitService();

router.post('/', (req, authMiddlware, res) => {
  const twit = twitService.createTwit(req.body);
  res.status(200).json(twit);
});

export const twitRouter = router;
