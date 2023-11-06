import React from "react";
import Register from "./components/auth/Register";
import "./App.css";
import Phone from "./components/auth/Phone";
import Otp from "./components/auth/Otp";
import Home from "./components/home/Home";

export default function App(){
    return (
        <div className="main">
            <Register></Register>
            {/* <Phone></Phone> */}
            {/* <Otp></Otp> */}
            {/* <Home></Home> */}
        </div>
    )
}