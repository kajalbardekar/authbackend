const User =require("../model/User")
const cloudinary = require('cloudinary').v2
const fs =require("fs")

cloudinary.config({
    cloud_name:"fghjj",
    api_key:"794154811113669",
    api_secret:"_PvLIoMZ_DvQW4lYc7Sbr1kDyMk",
    secure:"true"

})


const formData =(req,res,next)=>{

    const a= req.files.file.path
    console.log(a)
    cloudinary.uploader.upload(a,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            console.log(result.url,"photo")

            const user = new User({

                name: req.body.name,
                email: req.body.email,
                number:req.body.number,
                Ed1:req.body.Ed1,
               photo:result.url,
             
            
            })
              user.save().then(data => {
                fs.unlink(a,()=>{
                    console.log("file deleted")
                    res.json({
                        message: "Successfully form  registered",
                       
                    })
                })
               
            }).catch(error=>{
        
                res.json({
                    message:"Not registerd"
                })
                console.log(error)
            
            })
        }
    })

     

}
const getController=(req,res)=>{
    User.find().then(data=>{
      
        res.send(data)
    })    
}
module.exports={
    formData,
    getController
}