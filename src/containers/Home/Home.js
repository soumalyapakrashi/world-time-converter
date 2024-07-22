import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { TimeZoneCard } from "../../components/TimeZoneCard/TimeZoneCard";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import "./Home.css";

export function Home() {
    const [ locationData, setLocationData ] = useState([
        {
            city: "Sydney",
            country: "Australia",
            pictureUrl: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/10095720/hifi-tyler-duston-unsplash-tlhero.jpeg?tr=w-600",
            latitude: -33.86,
            longitude: 151.21
        },
        {
            city: "New York",
            country: "USA",
            pictureUrl: "https://content.paulreiffer.com/wp-content/uploads/2014/12/Stone-And-Steel-New-York-City-Brooklyn-Bridge-Freedom-Tower-One-World-Trade-Center-Financial-District-FiDi-Manhattan-Long-Exposure-Night-Sunset-Lights-Cityscape-Paul-Reiffer-Photographer@2x.jpg",
            latitude: 40.71,
            longitude: -74.00
        }
    ])

    return(
        <div className="main-container">
            <div className="margin-container">
                <Navbar>
                    <div>
                        <button>+</button>
                    </div>
                </Navbar>
                
                <WorldMap 
                    height={ "45vh" }
                    width={ "100%" }
                    markers={ locationData.map(data => [ data.latitude, data.longitude ]) }
                />

                <div className="timezone-card-grid">
                    { locationData.map((data, index) => {
                        return(
                            <TimeZoneCard
                                key={ index }
                                city={ data.city }
                                country={ data.country }
                                pictureUrl={ data.pictureUrl }
                                latitude={ data.latitude }
                                longitude={ data.longitude }
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}