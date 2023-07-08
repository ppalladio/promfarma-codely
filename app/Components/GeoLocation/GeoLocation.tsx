'use client'
import { useEffect, useState } from "react";
import axios from "axios";

function GeoLocation() {
  const [currLocation, setCurrLocation] = useState({});
      useEffect(() => {
          getLocation();
      }, []);

      const getLocation = async() => {
        const location = await axios.get("https://ipapi.co/json");
        setCurrLocation(location.data);
      };
      return(
        <div >
            <h1>Current Location is: {currLocation.country} </h1>
            <p >City: {currLocation.city}</p>
            {/* <p >Latitude: {currLocation.latitude}</p>
            {/* <p >IP: {currLocation.ip}</p> */}
        </div>
    );
}

export default GeoLocation;