const express=require("express");
const formrouter=express.Router();
const multiparty =require("connect-multiparty");
const path =require("path")
const {formData, getController} =require("../controllres/form.controller")
formrouter.get("/",getController)

const newvar = multiparty({uploadDir:path.join(__dirname,"data")})

formrouter.post("/formdata",newvar,formData);

module.exports ={
    formrouter
}