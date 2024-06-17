import { DateTime } from "luxon";
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
    let dt = DateTime.local();

    // For timezones other than local
    if(timezone !== "local") {
        dt = dt.setZone(timezone);
    }

    time = dt.toLocaleString(DateTime.TIME_24_SIMPLE);
    day = dt.toLocaleString({ weekday: 'long' });
    date = dt.toLocaleString({ day: 'numeric', month: 'short' })

    return(
        <div className={ alignment && alignment === "right" ? "location-time flex-align-end" : "location-time flex-align-start" }>
            <h2>{ time }</h2>
            <h5>
                { location && `${location} • ` }
                { day && `${day} • ` }
                { date }
            </h5>
        </div>
    );
}