import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import "./LocationTime.css";

export function LocationTime({
    location,
    timezone = "local",
    alignment = "left",
}) {
    let time = null;
    let day = null;
    let date = null;
    
    // By default, as local timezone is selected, we create date in local time
    const [ datetimeObj, setDatetimeObj ] = useState(DateTime.local());

    useEffect(() => {
        // For timezones other than local
        if(timezone !== "local") {
            setDatetimeObj(prevState => prevState.setZone(timezone));
        }

        setTimeout(() => {
            setDatetimeObj(DateTime.local());
        }, 1000);
    }, [ datetimeObj, timezone ])


    time = datetimeObj.toLocaleString(DateTime.TIME_24_SIMPLE);
    day = datetimeObj.toLocaleString({ weekday: 'long' });
    date = datetimeObj.toLocaleString({ day: 'numeric', month: 'short' })

    return(
        <div className={ alignment === "right" ? "location-time flex-align-end" : "location-time flex-align-start" }>
            <h2>{ time }</h2>
            <h5>
                { location && `${location} • ` }
                { day && `${day} • ` }
                { date }
            </h5>
        </div>
    );
}