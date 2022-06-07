const express = require("express");
const app = express();
const port = 8000;


app.use(express.json())





app.get("/get" , (req,res)=>{
   return res.status(200).json ({
        message:"Found User"
    })
}
)

app.post("/post" , (req,res)=>{
    if(req.body.username===""||req.body.password===""){
        return res.status(404).json({
            message:"UserName or Password is Empty!"
        })
    }  
    else {
       return  res.status(200).json({
            message:"User Created"
        })
    }
})


app.put("/put", (req,res)=>{
    
        return res.status(200).json({
            message:"User has been Changed"
        })
    })

app.delete("/delete" , (req,res)=>{
    if(req.body.id===""){
        return res.status(404).json({
            message:"ID cannot be Empty"
        })
    }
    else {
        return res.status(200).json({
            message:"User Deleted"
        })
    }
})



app.listen(port);
