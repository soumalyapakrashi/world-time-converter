import { LocationTime } from "../LocationTime/LocationTime";
import "./Navbar.css";

export function Navbar() {
    return(
        <nav>
            <LocationTime
                location={ "Pune" }
            />
            <div>
                <button>+</button>
            </div>
        </nav>
    );
}