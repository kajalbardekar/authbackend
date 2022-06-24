const express=require("express");
const app=express();
const cors=require("cors");

const formrouter =require("./routes/form.route")
app.use(cors());
app.use(express.json());



module.exports={
    app:app
}