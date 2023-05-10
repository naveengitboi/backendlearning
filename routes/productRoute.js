import express from 'express'
import Product from '../mongodb/productModel.js'
import mongoose from 'mongoose'
const app = express()

const productroute = app.post('/products', (req,res)=> {
    let product = Product.create(req.body)
    res.send(req.body)
})

export default productroute