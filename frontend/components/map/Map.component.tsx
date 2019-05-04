import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

import MapWrapper from "./MapWrapper.styled";

const MAP_STYLE = "mapbox://styles/mapbox/light-v10";

const Map = ReactMapboxGl({
  accessToken: String(process.env.MAPBOX_TOKEN),
});

const MapComponent = () => (
  <MapWrapper>
    <Map
      containerStyle={{
        height: "100%",
        width: "100%",
      }}
      style={MAP_STYLE}
    />
  </MapWrapper>
);

export default MapComponent;
