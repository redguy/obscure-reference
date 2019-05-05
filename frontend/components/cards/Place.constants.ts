import { IPosition } from "../map/usePosition.hook";
import { Experience } from "./Experience.constants";

export interface IPlace {
  experiences: Experience[];
  position: IPosition;
  title: string;
}

export const places: IPlace[] = [{
  experiences: [Experience.JOYFUL],
  position: {
    latitude: 50.055,
    longitude: 14.425,
  },
  title: "Vojanovy sady",
}, {
  experiences: [Experience.CALM],
  position: {
    latitude: 50.054,
    longitude: 14.424,
  },
  title: "The Štefánik Observatory",
}, {
  experiences: [Experience.GREEN],
  position: {
    latitude: 50.056,
    longitude: 14.426,
  },
  title: "Kampa Park",
}];
