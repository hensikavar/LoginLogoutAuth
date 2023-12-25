const cors = require("cors")
const express = require("express");
const mongoose= require("mongoose");
const userrouter = require("./routes/user");
const app= express();
const PORT= 5000;

app.use(cors());
// app.use(require("./model/user"));
app.use(express.json());
app.use("/user", userrouter);

mongoose.connect("mongodb+srv://hensikavar:hensibtk@cluster0.zftqlsp.mongodb.net/InstaClone?retryWrites=true&w=majority")
.then(()=>{
    console.log("Successfully connected to mongo db");
    app.listen(PORT ,(req,res)=>{
        console.log("Server is running on port "+PORT);
    })
})
.catch((error)=>{
    console.log("Not connected");
    console.log(error);
})
