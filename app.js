const express=require("express")
const dotenv=require("dotenv")
dotenv.config({path: "./Config/config.env"})
const route= require("./Routers/route")

const app=express()
app.use(express.json())
app.use("/api",route)
// app.get("/",(req,res)=>{
//     res.send("welcome")
// })

module.exports =app