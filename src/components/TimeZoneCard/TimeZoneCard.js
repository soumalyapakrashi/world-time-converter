/*
    Receive: City code
    Responsibilities:
    Fetch country
    Fetch current time in that city
    Fetch a picture of that city
*/

import { LocationTime } from "../LocationTime/LocationTime";
import "./TimeZoneCard.css";

export function TimeZoneCard({
    city,
    country,
    pictureUrl,
    timeOffset,
    time,
    day,
    date
}) {
    return(
        <div className="card">
            <div className="card-container">
                <div className="card-img">
                    <img src={ pictureUrl } alt="city"></img>
                </div>
                <div className="card-body">
                    <div>
                        <h3>{ city } ({ timeOffset })</h3>
                        <h4>{ country }</h4>
                    </div>
                    <LocationTime
                        time={ time }
                        day={ day }
                        date={ date }
                        alignment={ "right" }
                    />
                </div>
            </div>
        </div>
    );
}