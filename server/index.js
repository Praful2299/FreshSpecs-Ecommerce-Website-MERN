const express=require("express");
const mongoose=require("mongoose")
const app=express();
const dotenv=require("dotenv");
var cors = require('cors')
dotenv.config();
const PORT=process.env.PORT;
const cardRoute=require("./routes/cardRoutes")

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/FreshSpecs");
app.use("/cards",cardRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT=${PORT}`)
})
