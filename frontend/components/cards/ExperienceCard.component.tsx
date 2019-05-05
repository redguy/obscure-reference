import React from "react";

import { IExperience } from "./Experience.constants";
import ExperienceCardStyled from "./ExperienceCard.styled";

interface IProps extends IExperience {
  onClick: () => void;
}

const ExperienceCard = ({
  color,
  description,
  imageUrl,
  onClick,
  title,
}: IProps) => (
  <ExperienceCardStyled color={color} onClick={onClick}>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>1 nearby • 30 min</span>
    </div>

    <img src={imageUrl} />
  </ExperienceCardStyled>
);

export default ExperienceCard;
