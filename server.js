import express from "express"
import mongoose from "mongoose"
import productroute from "./routes/productRoute.js"

//express app 
const app = express()

// dotenv 
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 3000

//routes api
app.get('/', (req,res) => {
    res.send("hello Naveen")
})
app.use(productroute)




//listening
app.listen(port, ()=> console.log(`server running at ${port}`))