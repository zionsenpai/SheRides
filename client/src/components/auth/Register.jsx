import React from "react";
import Background from "../background-gradient/Background";
import "./Register.css"

const Register = () => {
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
                        <input className="input-box" type="email"></input>
                    </div>
                </div>
                <div className="register-input-box-wrapper">
                    <div className="input-field-name">
                        password
                    </div>
                    <div className="input-box-container">
                        <input className="input-box" type="password"></input>
                    </div>
                </div>
            </div>
            <div className="register-submit-button-container">
                <div className="register-submit-button">
                    <div className="register-button">
                        <div>sign up / sign in</div>
                    </div>
                </div>
            </div>
            <Background></Background>

        </div>
    )
}


export default Register;
