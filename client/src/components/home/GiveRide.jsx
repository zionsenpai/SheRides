import React from "react";
import Navbar from "../navbar/Navbar";
import "./rides.css";
import recentericon from "../../images/center.png";
import searchicon from "../../images/loupe.png";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";

const containerStyle = {
    width: "100%",
    height: "100%",
};

function GiveRides() {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");

    useEffect(() => {
        const position = () => {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLat(pos.coords.latitude);
                setLon(pos.coords.longitude);
            });
        };

        position();
    }, []);

    const center = { lat: lat, lng: lon };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAVhzeezfxXEycEp3RRClOSpjQxdQ8fGzo",
        libraries: ["places"],
    });

    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [directionsResponse, setDirectionsResponse] = useState(null);

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef();

    async function calculateRoute() {
        if (originRef.current.value === "" || destiantionRef.current.value === "") {
            return;
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
    }

    //   function clearRoute() {
    //     setDirectionsResponse(null)
    //     originRef.current.value = ''
    //     destiantionRef.current.value = ''
    //   }
    return isLoaded ? (
        <div className="give">

            <div className="location-inputs">
                <div className="destination-input source">
                    <Autocomplete>
                        <input
                            className="input-box src-inp"
                            required
                            type="text"
                            placeholder="Source"
                            ref={originRef}
                        ></input>
                    </Autocomplete>
                </div>
                <div className="destination-input desti">
                    <Autocomplete>
                        <input
                            className="input-box des-inp"
                            required
                            type="text"
                            placeholder="Destination"
                            ref={destiantionRef}
                        ></input>
                    </Autocomplete>
                    <img src={searchicon} alt="" onClick={calculateRoute}></img>
                </div>
            </div>


            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    // onLoad={onLoad}
                    // onUnmount={onUnmount}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={(map) => setMap(map)}
                >
                    <Marker position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </div>


            <div
                className="recenter"
                onClick={() => {
                    map.panTo(center);
                }}
            >
                <img src={recentericon} alt=""></img>
            </div>
            <Navbar></Navbar>
        </div>
    ) : (
        <></>
    );
}

export default React.memo(GiveRides);
