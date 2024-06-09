import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

export function WorldMap({
    height,
    width
}) {
    return(
        <VectorMap
            map={ worldMill }
            style={{
                height: height,
                width: width,
                margin: "auto"
            }}
            backgroundColor="rgb(7, 0, 36)"
            zoomMin={ 1 }
            zoomMax={ 1 }
            onRegionTipShow={(event, label, code) => {
                event.preventDefault();
            }}
            onRegionOver={(event, code) => {
                event.preventDefault();
            }}
        />
    );
}