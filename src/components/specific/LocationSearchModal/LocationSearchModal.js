import { useEffect, useState } from "react";
import { Modal } from "../../common/Modal";
import "./LocationSearchModal.css";

export function LocationSearchModal({ closeModal, addData }) {
    const [ enteredLocation, setEnteredLocation ] = useState(null);
    const [ possibleLocations, setPossibleLocations ] = useState([]);

    useEffect(() => {
        if(enteredLocation !== null) {
            fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(enteredLocation)}&format=jsonv2&addressdetails=1`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPossibleLocations(data.map(locationData => {
                    return {
                        id: locationData.place_id,
                        name: locationData.name,
                        displayName: locationData.display_name,
                        latitude: locationData.lat,
                        longitude: locationData.lon,
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
        addData(possibleLocations.filter(location => location.id == event.currentTarget.id)[0]);
        closeModal();
    }

    return(
        <Modal
            content={
                <>
                    <form id="modal-form" onSubmit={ onFormSubmit }>
                        <h2 className="modal-header form-element">Enter Location</h2>
                        <div className="form-element">
                            <input type="text" id="modal-textbox" name="location"/>
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
                </>
            }
            onModalCloseHandler={ closeModal }
        /> 
    )
}