import mongoose from "mongoose";
const medical_recordSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagonosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","OTHER"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Type.OrderId,
        ref:'Hospital',
    }
},{timestamps:true})
export const MedicalRecord=mongoose.model("MedicalRecord",medical_recordSchema)