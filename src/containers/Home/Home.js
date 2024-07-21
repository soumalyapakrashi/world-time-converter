import { Navbar } from "../../components/Navbar/Navbar";
import { TimeZoneCard } from "../../components/TimeZoneCard/TimeZoneCard";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import "./Home.css";

export function Home() {
    return(
        <div className="main-container">
            <div className="margin-container">
                <Navbar />
                <WorldMap 
                    height={ "45vh" }
                    width={ "100%" }
                />

                <div className="timezone-card-grid">
                    <TimeZoneCard
                        city={ "Sydney" }
                        country={ "Australia" }
                        pictureUrl={ "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/10095720/hifi-tyler-duston-unsplash-tlhero.jpeg?tr=w-600" }
                        latitude={ -33.86 }
                        longitude={ 151.21 }
                    />
                    <TimeZoneCard
                        city={ "New York" }
                        country={ "USA" }
                        pictureUrl={ "https://content.paulreiffer.com/wp-content/uploads/2014/12/Stone-And-Steel-New-York-City-Brooklyn-Bridge-Freedom-Tower-One-World-Trade-Center-Financial-District-FiDi-Manhattan-Long-Exposure-Night-Sunset-Lights-Cityscape-Paul-Reiffer-Photographer@2x.jpg" }
                        latitude={ 40.71 }
                        longitude={ -74.00 }
                    />
                </div>
            </div>
        </div>
    );
}