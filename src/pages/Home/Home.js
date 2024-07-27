import { useState } from "react";
import { Navbar } from "../../components/common/Navbar";
import { TimeZoneCard } from "../../components/specific/TimeZoneCard";
import { WorldMap } from "../../components/common/WorldMap";
import { LocationSearchModal } from "../../components/specific/LocationSearchModal";
import { Button } from "../../components/common/Button";
import "./Home.css";

export function Home() {
    const [ locationData, setLocationData ] = useState([]);
    const [ showLocationInputModal, setShowLocationInputModal ] = useState(false);

    const toggleLocationInputModal = () => {
        setShowLocationInputModal(!showLocationInputModal);
    }

    const addToLocationData = locationData => {
        setLocationData(prevState => [ ...prevState, locationData ]);
    }

    return(
        <div className="main-container">
            <div className="margin-container">
                <Navbar>
                    <div>
                        <Button
                            text={ "+" }
                            onClickHandler={ toggleLocationInputModal }
                        />
                    </div>
                </Navbar>

                <WorldMap 
                    height={ "45vh" }
                    width={ "100%" }
                    markers={ locationData?.map(data => [ data.latitude, data.longitude ]) }
                />

                <div className="timezone-card-grid">
                    { locationData?.map((data, index) => {
                        return(
                            <TimeZoneCard
                                key={ index }
                                city={ data.name }
                                country={ data.country }
                                pictureUrl={ data.pictureUrl }
                                latitude={ data.latitude }
                                longitude={ data.longitude }
                            />
                        )
                    })}
                </div>

                {
                    showLocationInputModal && 
                    <LocationSearchModal 
                        closeModal={ toggleLocationInputModal }
                        addData={ addToLocationData }
                    /> 
                }
            </div>
        </div>
    );
}