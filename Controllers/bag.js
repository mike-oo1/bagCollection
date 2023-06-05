const bagModel = require("../Models/bagModel")

// creating a bag collection 
exports.newCollection = async(req,res)=>{
    try {
        const newData = await bagModel.create(req.body)
        res.status(202).json({
            message:"newly created success",
            data:newData
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
        
    }
}

// view all collections 
exports.viewAll = async(req,res)=>{
    try {
        const allRecords= await bagModel.find()
        res.status(201).json({
            message:`All collections ${allRecords.length}`,
            data:allRecords
        })
        
    } catch (error) {
        res.status(404).json({
            message:error.message

        })

        
    }
}

// getting a collection by id 

exports.getOne = async(req,res)=>{
    try {
        const id =req.params.id
        const getOne =await bagModel.findById(id,req.body)
        const {brandName,color,price}=req.body
        const data ={
            brandName,
            color,
            price
        }  
        res.status (200).json({
            message:`here is the user with id ${id}`,
            data:getOne
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}
        

// UPDATING RECORDS FROM COLLECTIONS 
exports.UpdateInfo = async(req,res)=>{
    try {
        const id = req.params.id
        const updated =await bagModel.findByIdAndUpdate(id,req.body)
        const {brandName,color,price}=req.body
        const data ={
            brandName,
            color,
            price
        }  
        res.status (200).json({
            message:updated,
            data:updated
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}
// DELETING A COLLECTION BY ID
exports.deletedItem= async(req,res)=>{
    try {
        const id =req.params.id
        const deleted = await bagModel.findByIdAndDelete(id,req.body)
        const {brandName,color,price}=req.body
        const data ={
            brandName,
            color,
            price
        }
        res.status(200).json({
            message:`this user with id ${id} has been deleted,`,
            data:deleted
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
        
    }
  
}

