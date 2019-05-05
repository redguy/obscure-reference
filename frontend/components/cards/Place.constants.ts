import { IPosition } from "../map/usePosition.hook";
import { Experience } from "./Experience.constants";

export interface IPlace {
  duration: number;
  experiences: Experience[];
  length: number;
  position: IPosition;
  title: string;
  walkDuration: number;
}

export const places: IPlace[] = [{
  duration: 30,
  experiences: [Experience.JOYFUL],
  length: 5,
  position: {
    latitude: 50.055,
    longitude: 14.425,
  },
  title: "Vojanovy sady",
  walkDuration: 5,
}, {
  duration: 30,
  experiences: [Experience.CALM],
  length: 5,
  position: {
    latitude: 50.054,
    longitude: 14.424,
  },
  title: "The Štefánik Observatory",
  walkDuration: 5,
}, {
  duration: 30,
  experiences: [Experience.GREEN],
  length: 5,
  position: {
    latitude: 50.056,
    longitude: 14.426,
  },
  title: "Kampa Park",
  walkDuration: 5,
}];
