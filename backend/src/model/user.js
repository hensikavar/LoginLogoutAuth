const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        // require:true
    },
    password:{
        type:String,
        require:true
    },
    loginusername:{
        type:String
    },
    mobile:{
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model("USER", userSchema);