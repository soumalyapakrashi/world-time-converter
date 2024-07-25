import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { TimeZoneCard } from "../../components/TimeZoneCard/TimeZoneCard";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import "./Home.css";
import { Modal } from "../../components/Modal/Modal";

export function Home() {
    const [ locationData, setLocationData ] = useState([]);
    const [ showLocationInputModal, setShowLocationInputModal ] = useState(false);

    const toggleLocationInputModal = () => {
        setShowLocationInputModal(!showLocationInputModal);
    }

    const addToLocationData = locationData => {
        console.log(locationData);
        setLocationData(prevState => [ ...prevState, locationData ]);
    }

    return(
        <div className="main-container">
            <div className="margin-container">
                <Navbar>
                    <div>
                        <button onClick={ toggleLocationInputModal }>
                            +
                        </button>
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
                    <Modal 
                        closeModal={ toggleLocationInputModal }
                        addData={ addToLocationData }
                    /> 
                }
            </div>
        </div>
    );
}