const express = require("express");
const userrouter = express.Router();
const {signup,signin} = require("../controllers/usercontroller");

userrouter.get("/",(req,res)=>{
    res.send("helllo");
})

userrouter.post("/signup",signup);

userrouter.post("/signin",signin);

module.exports = userrouter;