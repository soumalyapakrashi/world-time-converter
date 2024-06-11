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
            markers={[
                [ -33.86785000, 151.20732000 ],
                [ 40.71277530, -74.00597280 ]
            ]}
            onMarkerTipShow={(event, label, code) => {
                event.preventDefault();
            }}
            onMarkerOver={(event, code) => {
                event.preventDefault();
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