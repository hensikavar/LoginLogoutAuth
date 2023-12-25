const mongoose = require("mongoose");
const usermodel = require("../model/user");
const bcrypt = require("bcrypt"); 

const signup= async (req,res)=>{
    const {name,username,email,password}= req.body;

    if(!name || !username || !email || !password){
        res.status(422).json({error :  "Please enter all the fields"});
    }

    try{
        const existinguser = await usermodel.findOne({$or: [{email:email}, {username: username}]});
        
        if(existinguser){
            return res.status(400).json({
                error:"user already exists this username or email"
            });
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const result =  await  usermodel.create({
            name:name,
            username:username,
            email:email,
            password:hashedPassword

        })

        res.status(201).json({USER:result, message:"Registered Successfully"});

    }
    catch(error){
        console.log(error);
        res.status(422).json({error:"something went wrong"})
    }
}

const signin= async (req,res)=>{
    const {email,password}= req.body;

    if(!email || !password){
        res.status(422).json({error :  "Please enter email and Password"});
    }

    try{
        const existinguser = await usermodel.findOne({email:email});
        
        if(!existinguser){
            return res.status(404).json({
                error:"Invaild email"
            });
        }

        const existingpassword = await bcrypt.compare(password , existinguser.password);

        if(!existingpassword){
            return res.status(404).json({error:"Invalid Credentials"});
        }

        res.status(201).json({message:"Signed in Successfully"});

    }catch(error){
        console.log(error);
        res.status(422).json({error:"something went wrong"});
    }

}

module.exports={signup, signin};