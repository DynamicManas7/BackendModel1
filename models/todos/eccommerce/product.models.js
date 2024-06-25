import mongoose from "mongoose"
const productSchema= new mongoose.Schema({
    description:{
        requrired:true,
        type:String,
    },
    name:{
        requrired:true,
        type:String,
    },
    productImage:{
        type:String,
    },
    price:{
        type:String,
        default:0
    },
    stock:{
        default:0,
        type:Number
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        requrired:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})
export const Product = mongoose.model('Product',productSchema)