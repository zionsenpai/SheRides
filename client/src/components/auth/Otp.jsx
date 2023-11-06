import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import "./Otp.css";
import Background from '../background-gradient/Background';
export default function Otp() {
    const [otp, setOtp] = useState('');

    return (
        <div className='otp'>
            <div className="register-heading-container">
                <div className="register-heading">
                    She <span>Rides</span>
                </div>
                <div className="register-tagline">
                    there she <span>goes</span>
                </div>
            </div>


            <div className='otp-wrapper'>
                <div className="input-field-name">
                    verification code
                </div>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span></span>}
                    containerStyle={"otp-container"}
                    inputStyle={{ width: "48px", height: "48px", borderRadius: "10px", outline: "none", border: "none", backgroundColor: "#D9D9D9", fontSize: "16px",  }}
                    inputType='tel'
                    renderInput={(props) => <input {...props} />}
                />
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
    );
}