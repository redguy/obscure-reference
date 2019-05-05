export enum Experience {
  CALM,
  GREEN,
  JOYFUL,
}

export const ExperiencesColors: {
  [experience in Experience]: string
} = {
  [Experience.CALM]: "#7a66a3",
  [Experience.GREEN]: "#639b59",
  [Experience.JOYFUL]: "#d19d42",
};

export interface IExperience {
  color: string;
  count: number;
  description: string;
  duration: number;
  id: Experience;
  imageUrl: string;
  plural: string;
  title: string;
}

export const experiences: IExperience[] = [{
  color: ExperiencesColors[Experience.JOYFUL],
  count: 3,
  description: "Take a swing at the swings or watch the ducks play",
  duration: 30,
  id: Experience.JOYFUL,
  imageUrl: "/static/images/experience-card-joyful.png",
  plural: "Joyful experiences",
  title: "A joyful experience",
}, {
  color: ExperiencesColors[Experience.CALM],
  count: 2,
  description: "Find the soothing, the tranquil, let the tension go for a moment",
  duration: 30,
  id: Experience.CALM,
  imageUrl: "/static/images/experience-card-calm.png",
  plural: "Calm experiences",
  title: "A calm experience",
}, {
  color: ExperiencesColors[Experience.GREEN],
  count: 5,
  description: "Breathe in, exhale and observe the ceaseless wonder",
  duration: 30,
  id: Experience.GREEN,
  imageUrl: "/static/images/experience-card-green.png",
  plural: "Green experiences",
  title: "A bit of the green",
}];
