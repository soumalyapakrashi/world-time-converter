import "./LocationTime.css";

export function LocationTime({
    time,
    location,
    day,
    date,
    alignment
}) {
    return(
        <div className={ alignment && alignment == "right" ? "location-time flex-align-end" : "location-time flex-align-start" }>
            <h2>{ time }</h2>
            <h5>
                { location && `${location} • ` }
                { day && `${day} • ` }
                { date }
            </h5>
        </div>
    );
}