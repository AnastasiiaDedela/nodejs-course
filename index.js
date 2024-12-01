import express from 'express'
import { twitRouter } from './src/twit/twit.controller.js'
const app = express()
async function main(params) {
    app.use(express.json())
    app.use('/api/twits',twitRouter)
    app.all('*', (req, res)=>{
        res.status(404).json({message: 'not found'})
    })
    app.listen(4200, ()=>{
        console.log('server runs 4200')
    })
}

main()