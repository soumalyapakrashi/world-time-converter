import { WorldMap } from "../../components/WorldMap/WorldMap";
import "./Home.css";

export function Home() {
    return(
        <div className="main-container">
            <WorldMap 
                height={ "50vh" }
                width={ "90%" }
            />
        </div>
    );
}