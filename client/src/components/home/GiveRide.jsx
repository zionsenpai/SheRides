import React from "react";
import Navbar from "../navbar/Navbar";
import "./rides.css"
import recentericon from "../../images/center.png"
import searchicon from "../../images/loupe.png";

export default function GiveRides(){
    return(
        <div className="give">
            
            <div className="map-container">
                
            </div>


            <div className="location-inputs">
                <div className="destination-input source">
                    <input className="input-box" required></input>
                </div>
                <div className="destination-input desti">
                    <input className="input-box" required></input>
                    <img src={searchicon} alt=""></img>
                </div>
            </div>
            



            <div className="recenter">
                <img src={recentericon} alt=""></img>
            </div>
            <Navbar></Navbar>
        </div>
    )
}