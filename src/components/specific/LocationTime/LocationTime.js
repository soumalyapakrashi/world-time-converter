import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { AnalogClock } from "../../common/AnalogClock";
import "./LocationTime.css";

export function LocationTime({
    location,
    timezone = "local",
    alignment = "left",
    showDigitalOrAnalogClock = "digital",
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
        <div className={ `
                location-time
                ${ showDigitalOrAnalogClock === "digital" && alignment === "right" ? "flex-align-end" : "flex-align-start" }
                ${ showDigitalOrAnalogClock === "analog" ? "flex-align-center gap-10 flex-justifiy-between" : "" }
            `}>
            { showDigitalOrAnalogClock === "digital" && <h2>{ time }</h2> }
            { 
                showDigitalOrAnalogClock === "analog" && 
                <AnalogClock
                    time={ datetimeObj.toLocaleString(DateTime.TIME_WITH_SECONDS) }
                    theme={ "dark" }
                    size={ 100 }
                />
            }
            <h5 className={ showDigitalOrAnalogClock === "analog" ? "text-align-center" : "" }>
                { location && `${location} • ` }
                { day && `${day} • ` }
                { date }
            </h5>
        </div>
    );
}