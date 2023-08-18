const express=require("express");
const bodyParser=require("body-parser");

const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const User=require("./Models/User")

app.use(bodyParser.json())

app.use(cors());
app.post("/user/adduser",async (req,res)=>{
    console.log(req.body);
    const{name,email,username,contact,picture}=req.body;
    const user=new User({name,email,username,contact,picture});
    user.save();
    res.status(201).json({message:"user registered successfully"})
})


app.get("/user/getuser", async (req,res)=>{
    const userDetails=User.find();
    res.status(200).json({userDetails:userDetails})
})
//app.listen(4000)

mongoose.connect("mongodb+srv://vishalkumarpandey6656:CN9evowHszdh4qxf@cluster0.jk73kpg.mongodb.net/").then((res)=>{
    app.listen(4000);
})
.catch((err)=>{
 console.log(err);
})

