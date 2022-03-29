const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectdb = async () => {
    try {
         await mongoose.connect("mongodb://localhost:27017/test1"); 
        } catch (error) {
        console.log(error);
    }
   
    
};

// USER SCHEMA
//Step 1 : creating a schema
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
})

//Step 2 : creating a model
const User = mongoose.model("user", userSchema);

//POST SCHEMA


connectdb();

app.listen(5000, () => {
    console.log("listening on port 5000");
})