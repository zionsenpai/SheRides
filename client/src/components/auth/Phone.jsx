import React from "react";
import "./Phone.css";
import Background from "../background-gradient/Background";
const Phone = () => {
    return (
        <div className="phone">
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
                        phone number
                    </div>
                    <div className="input-box-container">
                        <input className="input-box" required></input>
                    </div>
                </div>
            </div>
            <div className="register-submit-button-container">
                <div className="register-submit-button">
                    <div className="register-button">
                        <div>submit</div>
                    </div>
                </div>
            </div>
            <Background></Background>
        </div>
    )
}

export default Phone;