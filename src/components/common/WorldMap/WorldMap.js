import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import "./WorldMap.css";

export function WorldMap({
    height,
    width,
    markers = []
}) {    
    return(
        <VectorMap
            map={ worldMill }
            // style={{
            //     height: height,
            //     width: width,
            //     margin: "auto"
            // }}
            className="worldmap"
            backgroundColor="rgb(4, 0, 20)"
            zoomMin={ 1 }
            zoomMax={ 1 }
            zoomButtons={ false }
            onRegionTipShow={(event, label, code) => {
                event.preventDefault();
            }}
            onRegionOver={(event, code) => {
                event.preventDefault();
            }}
            regionStyle={{
                initial: {
                    fill: "white"
                }
            }}
            markers={ markers }
            onMarkerTipShow={(event, label, code) => {
                // event.preventDefault();
                // return "Hello World"
            }}
            onMarkerOver={(event, code) => {
                // event.preventDefault();
            }}
            markerStyle={{
                initial: {
                    fill: "blue",
                    stroke: "white",
                    strokeWidth: "2px"
                }
            }}
        />
    );
}