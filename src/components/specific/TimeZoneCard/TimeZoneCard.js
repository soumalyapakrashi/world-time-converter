import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { LocationTime } from "../LocationTime";
import { Card } from "../../common/Card";
import "./TimeZoneCard.css";

export function TimeZoneCard({
    city,
    country,
    pictureUrl,
    latitude,
    longitude
}) {
    const [ timezone, setTimezone ] = useState("local");
    const [ datetimeObj, setDatetimeObj ] = useState(DateTime.local());

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/timezone.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${latitude},${longitude}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setTimezone(data.location.tz_id);
            setDatetimeObj(prevState => prevState.setZone(timezone));
        });
    }, [ latitude, longitude, timezone ]);

    const offsetInMinutes = datetimeObj.offset;
    const offsetInHours = offsetInMinutes / 60;

    return(
        <Card
            pictureUrl={ pictureUrl }
            pictureAltText={ "city" }
            cardBody={
                <div className="timezonecard-body">
                    <div>
                        <h3>{ city } ({ `UTC${offsetInHours > 0 ? "+" : ""}${offsetInHours}` })</h3>
                        <h4>{ country }</h4>
                    </div>
                    <LocationTime
                        alignment={ "right" }
                        timezone={ timezone }
                    />
                </div>
            }
        />
    );
}