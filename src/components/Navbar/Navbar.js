import { useState, useEffect } from "react";
import { LocationTime } from "../LocationTime/LocationTime";
import "./Navbar.css";

export function Navbar({ children }) {
    const [ userLocation, setUserLocation ] = useState(null);
    
    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                
                fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if(data?.features[0]?.properties?.address?.city) {
                        setUserLocation(data?.features[0]?.properties?.address?.city);
                    }
                    else if(data?.features[0]?.properties?.address?.county) {
                        setUserLocation(data?.features[0]?.properties?.address?.county);
                    }
                })
            });
        }
    }, []);

    return(
        <nav>
            <LocationTime
                location={ userLocation }
            />
            <div>
                { children }
            </div>
        </nav>
    );
}