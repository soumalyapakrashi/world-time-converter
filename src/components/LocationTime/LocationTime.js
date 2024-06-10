import "./LocationTime.css";

export function LocationTime({
    time,
    location,
    day,
    date
}) {
    return(
        <div className="location-time">
            <h1>{ time }</h1>
            <h6>{ location } • { day } • { date }</h6>
        </div>
    );
}