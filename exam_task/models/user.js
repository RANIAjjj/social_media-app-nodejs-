const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true, 
        unique: true
    },
    followers:{
        type: Array, 
        default :[]
    },
    blogs:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Blog"
    }]
})


const User = mongoose.model('User',userSchema)
User.createIndexes({userName:1})
module.exports=User
