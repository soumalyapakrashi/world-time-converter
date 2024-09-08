import { useEffect, useRef, useState } from "react";
import { Modal } from "../../common/Modal";
import { Button } from "../../common/Button";
import "./LocationSearchModal.css";

export function LocationSearchModal({ closeModal, addData }) {
    const [ enteredLocation, setEnteredLocation ] = useState(null);
    const [ possibleLocations, setPossibleLocations ] = useState([]);
    const [ selectedLocations, setSelectedLocations ] = useState([]);
    const locationInputRef = useRef();

    useEffect(() => {
        if(enteredLocation !== null) {
            fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(enteredLocation)}&format=jsonv2&addressdetails=1`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // We will filter out all duplicate locations (ones with same name and displayName)
                const data_hash = {};
                data = data.filter(item => {
                    if(data_hash[`${item?.name}${item?.displayName}`]) return false;
                    else {
                        data_hash[`${item?.name}${item?.displayName}`] = true;
                        return true;
                    }
                })

                // We will take only the first 4 matches
                data = data?.slice(0, 4);

                setPossibleLocations(data.map(locationData => {
                    return {
                        id: locationData.place_id,
                        name: locationData.name,
                        displayName: locationData.display_name,
                        latitude: parseFloat(locationData.lat),
                        longitude: parseFloat(locationData.lon),
                        country: locationData.address.country,
                    };
                }))
            })
        }
    }, [ enteredLocation ]);

    const onFormSubmit = event => {
        event?.preventDefault();
        setEnteredLocation(event?.target?.location?.value);
    }

    const onModalCardSelected = event => {
        setSelectedLocations([ ...selectedLocations, possibleLocations.filter(location => location?.id === parseInt(event?.currentTarget?.id))[0] ]);
        locationInputRef.current.value = '';
    }

    const onModalSubmitted = event => {
        addData(selectedLocations);
        closeModal();
    }

    return(
        <Modal
            content={
                <>
                    <form id="modal-form" onSubmit={ onFormSubmit }>
                        {/* <h2 className="modal-header form-element">Enter Location</h2> */}
                        <div className="form-element mt-4">
                            <input
                                type="text"
                                id="modal-textbox"
                                name="location"
                                autoFocus={ true }
                                placeholder="Search for a location"
                                ref={ locationInputRef }
                            />
                        </div>
                    </form>

                    <div className="matched-locations">
                        {
                            possibleLocations.map(location => {
                                return(
                                    <div
                                        className="modal-card"
                                        id={ location.id }
                                        key={ location.id }
                                        onClick={ onModalCardSelected }>
                                        <h5>{ location.name }</h5>
                                        <p>{ location.displayName }</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    { selectedLocations.length > 0 &&
                    <div className="selected-locations">
                        <h3 className="text-align-center">Selected Locations</h3>

                        <div className="selected-cards">
                        {
                            selectedLocations.map(location => {
                                return(
                                    <div
                                        className="modal-card"
                                        id={ location.id }
                                        key={ location.id }
                                    >
                                        <h5>{ location.name }</h5>
                                    </div>
                                )
                            })
                        }
                        </div>

                        <div className="modal-controls">
                            <Button
                                text="Clear"
                                onClickHandler={ () => {setSelectedLocations([])} }
                                className="btn-bg-dark-primary btn-font-light-primary poppins-regular"
                            />
                            <Button
                                text="Submit"
                                onClickHandler={ onModalSubmitted }
                                className="btn-bg-light-primary btn-font-dark-primary poppins-regular"
                            />
                        </div>
                    </div> }
                </>
            }
            onModalCloseHandler={ closeModal }
        /> 
    )
}