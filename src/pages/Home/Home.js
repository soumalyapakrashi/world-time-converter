import { useEffect, useState } from "react";
import { Navbar } from "../../components/common/Navbar";
import { TimeZoneCard } from "../../components/specific/TimeZoneCard";
import { WorldMap } from "../../components/common/WorldMap";
import { LocationSearchModal } from "../../components/specific/LocationSearchModal";
import { Button } from "../../components/common/Button";
import "./Home.css";
import "../../assets/fonts/font-poppins.css";
import "../../assets/fonts/font-montserrat.css";

export function Home() {
    const [ locationData, setLocationData ] = useState([]);
    const [ showLocationInputModal, setShowLocationInputModal ] = useState(false);
    const [ showMap, setShowMap ] = useState(true);

    useEffect(() => {
        setShowMap(true);
    }, [ locationData ])

    const toggleLocationInputModal = () => {
        setShowLocationInputModal(!showLocationInputModal);
    }

    const addToLocationData = locationData => {
        setShowMap(false);
        setLocationData(prevState => [ ...prevState, locationData ]);
    }

    return(
        <div className="main-container">
            <div className="margin-container">
                <Navbar>
                    { locationData.length > 0 && <div>
                        <Button
                            text={ "+" }
                            onClickHandler={ toggleLocationInputModal }
                        />
                    </div> }
                </Navbar>

                <main id="main-content">
                    <div className="world-time-section">
                        { showMap && <WorldMap 
                            height={ "100%" }
                            width={ "100%" }
                            markers={ locationData?.map(data => [ data.latitude, data.longitude ]) }
                        /> }
                    </div>

                    { locationData.length === 0 && <div className="empty-list-add-item">
                        <div>
                            <h1 className="poppins-medium text-color-primary">Find Location</h1>
                            <p className="text-color-primary montserrat-regular">
                                Get the local timezones of any place around the world. Along with that,
                                get the local time in that place and the country in which the place resides.
                            </p>
                            <div className="home-button">
                                <Button
                                    text={ "Add >" }
                                    onClickHandler={ toggleLocationInputModal }
                                    className={ "poppins-medium btn-bg-light-primary btn-font-dark-primary" }
                                />
                            </div>
                        </div>
                    </div> }

                    { locationData.length > 0 && <div className="timezone-card-grid">
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
                    </div> }
                </main>

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