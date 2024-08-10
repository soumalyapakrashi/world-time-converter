import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import "./AnalogClockLight.css";

export function AnalogClock({
    time,
    theme = "light",
    size = 150,
}) {
    return(
        <Clock
            value={ time }
            className={ theme === "dark" ? "react-clock-light" : "" }
            size={ size }
        />
    )
}