import express from "express"
import mongoose from "mongoose"
import productroute from "./routes/productRoute.js"

//express app 
const app = express()
app.use(express.json())
// dotenv 
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 3000



//routes api
app.get('/', (req,res) => {
    res.send("hello Naveen")
})
app.use(productroute)



//mongodb

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.sf81w4b.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
    console.log('mongodb working')
    app.listen(port, ()=> console.log(`server running at ${port}`))
})
.catch((err)=> console.log(err))



//listening
