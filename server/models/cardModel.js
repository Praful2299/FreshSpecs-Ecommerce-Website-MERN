const mongoose=require("mongoose");

const cardSchema = new mongoose.Schema({
    id:Number,
    title:String,
    text:String,
    Price:Number,
    image:String,
    qty:Number,
})

module.exports=mongoose.model("productdata",cardSchema);

