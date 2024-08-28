import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description :{
        type:String,
        required:true,
    },
    name :{
        type:String,
        required:true,
    },
    productimage:{
        //mongoDB is a strong DB but also heavys the DB
        //or AWS bucket and store URL
        //or cloudenery and store url
        type:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number,
    },
    category :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

export const Product = new mongoose.model("Product",productSchema)