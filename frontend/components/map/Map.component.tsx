import React, { useState } from "react";
import MapGL, { ViewState } from "react-map-gl";

import MapWrapper from "./MapWrapper.styled";
import { IPosition } from "./usePosition.hook";

const MAP_STYLE = "mapbox://styles/mapbox/light-v10";

interface IProps {
  dimmed: boolean;
  position: IPosition | null;
}

const MapComponent = ({ dimmed, position }: IProps) => {
  const [viewport, setViewport] = useState({
    height: window.innerHeight,
    latitude: (position && position.latitude) || 50.055,
    longitude: (position && position.longitude) || 14.425,
    width: window.innerWidth,
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
