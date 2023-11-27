import React, { useState, useEffect } from "react";
import "./home.css";
// import Background from "../background-gradient/Background";
import location from "../../images/location-icon.png";
import place from "../../images/temp-place.jpg";
import Navbar from "../navbar/Navbar";


import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
const Home = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
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
            setUser({
                email:data.data.email,
                id:data.data.id,
                pfp:data.data.pfp,
                requestedRides:data.data.requestedRides,
                givenRides:data.data.givenRides
            })
        }
        verifyCookie();
    },[cookies, navigate, removeCookie]);
    console.log(user);
    

    function position(){
        console.log("Inside");
        navigator.geolocation.getCurrentPosition((pos)=>{
            console.log(pos.coords);
        })
        // console.log(posi);
    }

    return (
        <div className="home">



            <div className="home-heading-container">
                <div className="home-heading">
                    Your Ride, <span>Your Way</span>
                </div>
            </div>




            <div className="home-content-container">



                <div className="home-input-container">
                    <div className="ride" onClick={position}>
                        <div>
                            give a ride
                        </div>
                    </div>
                    <div className="ride">
                        <div>
                            take a ride
                        </div>
                    </div>
                </div>






                <div className="home-recent-container">
                    <div className="home-recent-heading">
                        Recently visited
                    </div>
                    <div className="home-recent-input">
                        <img src={location} alt=""></img>
                        <div>
                            <div className="recent-location-name">
                                Gobind Abode A
                            </div>
                            <div className="recent-location-address">
                                Chandigarh University, Gharuan, Punjab. something isn wrog ikasfhkn
                            </div>
                        </div>
                    </div>
                    <div className="home-recent-input">
                        <img src={location} alt=""></img>
                        <div>
                            <div className="recent-location-name">
                                Gobind Abode A
                            </div>
                            <div className="recent-location-address">
                                Chandigarh University, Gharuan, Punjab. something isn wrog ikasfhkn
                            </div>
                        </div>
                    </div>
                </div>






                <div className="home-mustvisit-container">
                    <div className="home-recent-heading">
                        Must visit places
                    </div>
                    <div className="places-list-container">
                        <div className="place-component">
                            <img src={place} alt=""></img>
                            <div>
                                some mountain
                            </div>
                        </div>
                        <div className="place-component">
                            <img src={place} alt=""></img>
                            <div>
                                some mountain
                            </div>
                        </div>
                        <div className="place-component">
                            <img src={place} alt=""></img>
                            <div>
                                some mountain
                            </div>
                        </div>
                        <div className="place-component">
                            <img src={place} alt=""></img>
                            <div>
                                some mountain
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Navbar></Navbar>
            {/* <Background></Background> */}
        </div>
    )
}

export default Home;