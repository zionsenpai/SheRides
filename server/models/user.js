const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    pfp:{
        type:String
    },
    name:String,
    phone:String,
    requestedRides:[
        {
            start:String,
            destination:String,
            driver:String,
            date:Date
        }
    ],
    givenRides:[
        {
            start:String,
            destination:String,
            rider:String,
            date:Date
        }
    ]
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;