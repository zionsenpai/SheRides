import React from "react";
import Register from "./components/auth/Register";
import "./App.css";
// import Phone from "./components/auth/Phone";
// import Otp from "./components/auth/Otp";
import Home from "./components/home/Home";
import {Routes, Route} from "react-router-dom"
import Details from "./components/auth/Details";
export default function App(){
    return (
        <div className="main">
            <Routes>
                <Route path="/auth" element={<Register></Register>}></Route>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/details" element={<Details></Details>}></Route>
            </Routes>
            {/* <Register></Register> */}
            {/* <Phone></Phone> */}
            {/* <Otp></Otp> */}
            {/* <Home></Home> */}
        </div>
    )
}