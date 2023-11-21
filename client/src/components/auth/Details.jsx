import React, { useEffect, useState } from "react";
import Background from "../background-gradient/Background";
import axios from "axios";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

const Details = () => {
    const [email, setEmail] = useState("");
    const [cookies, removeCookie] = useCookies([]);
    const [name, setname] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    function onChangeName(e){
        setname(e.target.value);
    }
    function onChangePhone(e){
        setPhone(e.target.value);
    }


    async function handleSubmit(){
        const submitObject = {
            name:name,
            phone:phone,
            email:email
        }
        try{
            const data = await axios.post("http://localhost:4000/details", submitObject, {withCredentials:true});
            console.log(data);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        const verifyCookie = async ()=>{
            if(!cookies.token || cookies.token==='undefined'){
                navigate("/auth");
            }
            const data = await axios.post("http://localhost:4000/",{},{withCredentials:true});
            if(data.status===false){
                removeCookie("token");
                navigate("/auth")
            }
            setEmail(data.data.email);
        }
        verifyCookie();
    },[cookies, navigate, removeCookie]);
    // console.log(user);

    
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
                        name
                    </div>
                    <div className="input-box-container">
                        <input className="input-box" type="text" onChange={onChangeName}></input>
                    </div>
                </div>
                <div className="register-input-box-wrapper">
                    <div className="input-field-name">
                        phone
                    </div>
                    <div className="input-box-container">
                        <input className="input-box" type="number" onChange={onChangePhone}></input>
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


export default Details;
