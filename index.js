import express from 'express'
const app = express()
async function main(params) {
    app.use(express.json())
    app.use('/api/twit',(req, res)=>{
        res.status(200).json({
            message: 'success'
        })
    })
    app.listen(4200, ()=>{
        console.log('server runs 4200')
    })
}

main()