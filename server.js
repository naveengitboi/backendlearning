import express from "express"
import mongoose from "mongoose"
import Product from './mongodb/productModel.js'
//express app 
const app = express()
app.use(express.json())
// dotenv 
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 3000





//mongodb

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.sf81w4b.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
    console.log('mongodb working')
    app.listen(port, ()=> console.log(`server running at ${port}`))
})
.catch((err)=> console.log(err))

//routes api
app.get('/', (req,res) => {
    res.send("hello Naveen")
})

app.get('/products', async (req,res)=>{
    try{
        let products = await Product.find()
        res.send(products)
    }
    catch(err){
        console.log(err)
    }
})
app.get('/products/:id', async(req,res)=>{
    try{
        const {id} = req.params
        let productWithId = await Product.findById(id)
        res.json(productWithId)
    }
    catch(err){
        console.log(err)
    }

})
app.post('/products', async(req,res) => {
    try{
        let product = await Product.create(req.body)
        res.send(product)
    }
    catch(err){
        console.log(err)
    }
})
app.put('/products/:id', async(req,res) =>{
    try {
        const {id} = req.params
        let updateProduct = await Product.findByIdAndUpdate(id, req.body)
        res.send(updateProduct)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/products/:id', async(req,res) => {
    try {
        const {id} = req.params
        let deleteProduct = await Product.findByIdAndDelete(id)
        res.send(await Product.find())
        
    } catch (error) {
        console.log(error)
    }
})
