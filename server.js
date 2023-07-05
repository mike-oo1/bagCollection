const express= require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({path: "./Config/config.env"})
const app =require("./app")

mongoose
  .connect("mongodb+srv://michaelokpoko224:michael001@cluster0.uow3ss2.mongodb.net/")
  .then(() => {
    console.log("connected to database")
  }).then(()=>{
    app.listen((process.env.PORT || 5090),()=>{
        console.log("server is running")

    })
   


  })
  .catch((e) => {
    console.log(e.message)
  }) 