const mongoose=require ("mongoose")
const schema = mongoose.Schema
const Bagschema = new mongoose.Schema({
    brandName:{
        type:String
    },
    color:{
        type:String
    },
    price:{
        type:Number
    }
})

const bagModel= mongoose.model("bagModel",Bagschema)

module.exports = bagModel