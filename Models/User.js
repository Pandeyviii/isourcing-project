const mongoose = require('mongoose')
const Schema =mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    contact:{
        type:Number,
        unique:true,
        required:true
    },
    picture:{
        type:String,
        
    }
})

module.exports=mongoose.model('User',userSchema)