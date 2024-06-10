import { LocationTime } from "../LocationTime/LocationTime";

export function Navbar() {
    return(
        <nav>
            <LocationTime
                time={ "18:00" }
                location={ "Minsk" }
                day={ "Friday" }
                date={ "26 Nov" }
            />
        </nav>
    );
}