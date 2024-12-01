import { Router } from "express";
import { TwitService } from "./twit.service.js";

const router = Router()
const twitSerwice = new TwitService()

router.post('/', (req, res)=>{
    if(req.body?.text.length < 1){
        return res.status(400).json({
            message: "text is required"
        })
    }
    const twit = twitSerwice.createTwit(req.body)
    res.status(200).json(twit)
})

export  const twitRouter = router