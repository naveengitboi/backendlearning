import mongoose, { mongo } from "mongoose";

const productSchema = mongoose.Schema(
    {
        name :{
            type : String,
            require: true
        },
        quantity:{
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            require: true
        }
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product