const express= require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({path: "./Config/config.env"})
const app =require("./app")

mongoose
  .connect("mongodb://127.0.0.1/bagcollectionDB")
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