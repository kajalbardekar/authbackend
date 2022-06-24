const express = require('express')
const dbConnect = require('./db')
require('dotenv').config()
const app = express('./app')
const port =process.env.PORT 
const cors=require("cors");
const mongourl = process.env.MONGO

const {formrouter} = require('./routes/form.route')

app.use(cors());
app.use(express.json())

app.use("/form",formrouter) 

app.get("/",(req,res)=>{
    res.send("hey there")
})
                                   
dbConnect(mongourl).then(data => {
    app.listen(port, () => {
        console.log(`Db connected, server is running http://localhost:${port}`)
    })
    
}).catch(error => {
    console.log("Error is connected")
    console.log(error)
})

