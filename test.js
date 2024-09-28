const express=require("express");
const MongoClinet=require('mongoose');
const dotEnv=require('dotenv')
const App=express();

dotEnv.config();
const PORT=process.env.PORT || 5500;

 MongoClinet.connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("MongoDb connected successfully")
 })
 .catch((err)=>{
    console.log(err);
 })


App.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} number`);
})