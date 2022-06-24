const mongoose=require('mongoose')

const Userchema =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
   number:{
       type:String
   },
   Ed1:{
    type:String
   },
   photo:{
    type:String
   }
  
},{
    timestamps:true
})
module.exports=mongoose.model("user",Userchema)