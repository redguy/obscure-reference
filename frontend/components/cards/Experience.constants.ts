
export enum Experience {
  CALM,
  GREEN,
  JOYFUL,
}

export interface IExperience {
  color: string;
  description: string;
  id: Experience;
  imageUrl: string;
  plural: string;
  title: string;
}

export const experiences: IExperience[] = [{
  color: "#d19d42",
  description: "Take a swing at the swings or watch the ducks play",
  id: Experience.JOYFUL,
  imageUrl: "/static/images/experience-card-joyful.png",
  plural: "Joyful experiences",
  title: "A joyful experience",
}, {
  color: "#7A66A3",
  description: "Find the soothing, the tranquil, let the tension go for a moment",
  id: Experience.CALM,
  imageUrl: "/static/images/experience-card-calm.png",
  plural: "Calm experiences",
  title: "A calm experience",
}, {
  color: "#639B59",
  description: "Breathe in, exhale and observe the ceaseless wonder",
  id: Experience.GREEN,
  imageUrl: "/static/images/experience-card-green.png",
  plural: "Green experiences",
  title: "A bit of the green",
}];
