const express = require('express')
const {newCollection, viewAll, UpdateInfo, deletedItem,getOne}=require("../Controllers/bag")

const Router = express.Router()
Router.route("/new").post(newCollection)
Router.route("/view").get(viewAll)
Router.route("/updatedInfo/:id").patch(UpdateInfo)
Router.route("/delete/:id").delete(deletedItem)
Router.route("/getone/:id").get(getOne)


module.exports=Router