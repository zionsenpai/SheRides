import React, { useState } from "react";
import Background from "../background-gradient/Background";
import axios from "axios";
import "./Register.css"
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function onChangeEmail(e){
        setEmail(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }


    async function handleSubmit(){
        const submitObject = {
            email:email,
            password:password
        }
        try{
            const data = await axios.post("http://localhost:4000/auth", submitObject, {withCredentials:true});
            console.log(data);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }

    
    return (
        <div className="register">
            <div className="register-heading-container">
                <div className="register-heading">
                    She <span>Rides</span>
                </div>
                <div className="register-tagline">
                    there she <span>goes</span>
                </div>
            </div>
            <div className="register-input-container">
                <div className="register-input-box-wrapper">

                    <div className="input-field-name">
                        email
                    </div>
                    <div className="input-box-container">
                        <input className="input-box" type="email" onChange={onChangeEmail}></input>
                    </div>
                </div>
                <div className="register-input-box-wrapper">
                    <div className="input-field-name">
                        password
                    </div>
                    <div className="input-box-container">
                        <input className="input-box" type="password" onChange={onChangePassword}></input>
                    </div>
                </div>
            </div>
            <div className="register-submit-button-container">
                <div className="register-submit-button">
                    <div className="register-button" onClick={handleSubmit}>
                        <div>sign up / sign in</div>
                    </div>
                </div>
            </div>
            <Background></Background>

        </div>
    )
}


export default Register;
