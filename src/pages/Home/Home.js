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
    const [ selectedSort, setSelectedSort ] = useState('');
    const [ showDigitalOrAnalogClock, setShowAnalogOrDigitalClock ] = useState('digital');

    useEffect(() => {
        setShowMap(true);
    }, [ locationData ])

    const toggleLocationInputModal = () => {
        setShowLocationInputModal(!showLocationInputModal);
    }

    const addToLocationData = locationData => {
        setShowMap(false);
        setLocationData(prevState => [ ...prevState, ...locationData ]);
        if(selectedSort !== '') {
            onSortHandler(selectedSort);
        }
    }

    const onSortHandler = event => {
        if(event === 'sort-name-ascending' || event?.target?.innerHTML?.includes("Name: Asc")) {
            setSelectedSort('sort-name-ascending');
            setLocationData(prevState => prevState.toSorted((data1, data2) => {
                if(data1.name <= data2.name) return -1;
                else return 1;
            }));
        }
        else if(event === 'sort-name-descending' || event?.target?.innerHTML?.includes("Name: Desc")) {
            setSelectedSort('sort-name-descending');
            setLocationData(prevState => prevState.toSorted((data1, data2) => {
                if(data1.name > data2.name) return -1;
                else return 1;
            }));
        }
        else if(event === 'sort-time-ascending' || event?.target?.innerHTML?.includes("Time: Asc")) {
            setSelectedSort('sort-time-ascending');
            setLocationData(prevState => prevState.toSorted((data1, data2) => {
                if(data1.longitude <= data2.longitude) return -1;
                else return 1;
            }));
        }
        else if(event === 'sort-time-descending' || event?.target?.innerHTML?.includes("Time: Desc")) {
            setSelectedSort('sort-time-descending');
            setLocationData(prevState => prevState.toSorted((data1, data2) => {
                if(data1.longitude > data2.longitude) return -1;
                else return 1;
            }));
        }
    }

    const toggleDigitalAnalog = () => {
        if(showDigitalOrAnalogClock === "analog") setShowAnalogOrDigitalClock("digital");
        else if(showDigitalOrAnalogClock === "digital") setShowAnalogOrDigitalClock("analog");
    }

    return(
        <div className="main-container">
            <div className="margin-container">
                <Navbar>
                    { locationData.length > 0 && <div className="nav-children">
                        <Button
                            text={ showDigitalOrAnalogClock === "digital" ? "Analog" : "Digital" }
                            onClickHandler={ toggleDigitalAnalog }
                        />
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

                    { locationData.length > 0 && <div className="timezone-card-panel">
                        <div className="timezone-card-controls">
                            <h2 className="poppins-medium text-color-primary">Sort</h2>
                            <div>
                                <Button
                                    text={ "Name: Asc" }
                                    className={ `poppins-regular ${selectedSort === 'sort-name-ascending' ? 'btn-bg-dark-secondary btn-font-light-primary' : 'btn-bg-light-primary btn-font-dark-primary'}` }
                                    onClickHandler={ onSortHandler }
                                    name={ "sort-name-ascending" }
                                />
                                <Button
                                    text={ "Name: Desc " }
                                    className={ `poppins-regular ${selectedSort === 'sort-name-descending' ? 'btn-bg-dark-secondary btn-font-light-primary' : 'btn-bg-light-primary btn-font-dark-primary'}` }
                                    onClickHandler={ onSortHandler }
                                    name={ "sort-name-descending" }
                                />
                                <Button
                                    text={ "Time: Asc" }
                                    className={ `poppins-regular ${selectedSort === 'sort-time-ascending' ? 'btn-bg-dark-secondary btn-font-light-primary' : 'btn-bg-light-primary btn-font-dark-primary'}` }
                                    onClickHandler={ onSortHandler }
                                    name={ "sort-time-ascending" }
                                />
                                <Button
                                    text={ "Time: Desc " }
                                    className={ `poppins-regular ${selectedSort === 'sort-time-descending' ? 'btn-bg-dark-secondary btn-font-light-primary' : 'btn-bg-light-primary btn-font-dark-primary'}` }
                                    onClickHandler={ onSortHandler }
                                    name={ "sort-time-descending" }
                                />
                            </div>
                        </div>
                        <div
                            className={`
                                grid
                                ${showDigitalOrAnalogClock === "analog" ? "analog-grid" : "digital-grid"}
                            `}
                        >
                            { locationData?.map((data, index) => {
                                return(
                                    <TimeZoneCard
                                        key={ index }
                                        city={ data.name }
                                        country={ data.country }
                                        pictureUrl={ data.pictureUrl }
                                        latitude={ data.latitude }
                                        longitude={ data.longitude }
                                        showDigitalOrAnalogClock={ showDigitalOrAnalogClock }
                                    />
                                )
                            })}
                        </div>
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