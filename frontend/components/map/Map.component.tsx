import React, { useState } from "react";
import MapGL, { ViewState } from "react-map-gl";

import MapWrapper from "./MapWrapper.styled";

const MAP_STYLE = "mapbox://styles/mapbox/light-v10";

interface IProps {
  dimmed: boolean;
}

const MapComponent = ({ dimmed }: IProps) => {
  const [viewport, setViewport] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    longitude: 14.425,
    latitude: 50.055,
    zoom: 12,
  });

  const handleViewportChange = (viewState: ViewState): void => {
    setViewport({
      ...viewport,
      ...viewState,
    });
  };

  return (
    <MapWrapper dimmed={dimmed}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={String(process.env.MAPBOX_TOKEN)}
        mapStyle={MAP_STYLE}
        onViewportChange={handleViewportChange}
      />
    </MapWrapper>
  );
};

export default MapComponent;
