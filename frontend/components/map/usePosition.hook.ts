import { useState } from "react";

export interface IPosition {
  latitude: number;
  longitude: number;
}

const usePosition = () => {
  const [watcher, setWatcher] = useState<number | null>(null);
  const [position, setPosition] = useState<IPosition | null>(null);

  const watchPosition = (currentPosition: Position) => {
    const { latitude, longitude } = currentPosition.coords;

    setPosition({
      latitude,
      longitude,
    });
  };

  if (("geolocation" in navigator) === false) {
    return position;
  }

  if (!watcher) {
    setWatcher(navigator.geolocation.watchPosition(watchPosition));
  }

  return position;
};

export default usePosition;
