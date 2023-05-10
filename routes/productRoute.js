import express from 'express'

const app = express()

const productroute = app.get('/productRoute', (req,res)=> {
    res.send("Product Route ")
})

export default productroute