import express from "express"
import mongoose from "mongoose"

const app = express();

app.listen(8000,(req,res)=>{
    console.log("Backend server run port 8000");
});