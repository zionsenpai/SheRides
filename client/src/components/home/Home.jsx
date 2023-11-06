import React from "react";
import "./home.css";
import Background from "../background-gradient/Background";
import location from "../../images/location-icon.png";
import place from "../../images/temp-place.jpg";
import Navbar from "../navbar/Navbar";
const Home = () => {
    return (
        <div className="home">



            <div className="home-heading-container">
                <div className="home-heading">
                    Your Ride, <span>Your Way</span>
                </div>
            </div>




            <div className="home-content-container">



                <div className="home-input-container">
                    <div className="ride">
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