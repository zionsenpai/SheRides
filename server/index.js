const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookies = require("cookie-parser");

require("./db/conn");
require('dotenv').config();

const hashpassword = require("./utils/hashPassword");
const createToken = require("./utils/createToken");
const userVerification = require("./utils/userVerification");
const User = require("./models/user");
const port = process.env.PORT;

const app = express();


app.use(express.json());
app.use(cors({credentials: true, origin: true}));
app.use(cookies());


app.post("/auth", async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        let user = await User.findOne({email:email});
        let message="";
        if(user){
            const auth = await bcrypt.compare(password, user.password);
            if(!auth){
                res.json({message:"Incorrect email or password"});
            }
            message="Login Successful";
        }
        else{
            const hashedPassword = await hashpassword(password);
            user = await User.create({
                email:email,
                password:hashedPassword
            });
            message="Account created successfully";
        }
        const token = createToken(user._id);
        res.cookie("token",token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.json({
            message:message
        });
    }
    catch(err){
        console.log(err);
    }
})

app.post("/", async (req,res)=>{

    console.log(req.cookies);

    const temp = userVerification(req);
    console.log(temp);
    if(temp.status===false){
        res.json(temp);
    }
    else{
        const user = await User.findById(temp.id);

        res.json({
            status:temp.status,
            email:user.email,
            pfp: user.pfp,
            requestedRides:user.requestedRides,
            givenRides:user.givenRides,
            id: user._id
        });
    }
})

app.listen(port, (req,res)=>{
    console.log("app running on port: ", port);
})