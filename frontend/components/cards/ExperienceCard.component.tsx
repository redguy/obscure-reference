import React from "react";

import { IExperience } from "./Experience.constants";
import ExperienceCardStyled from "./ExperienceCard.styled";

interface IProps extends IExperience {
  onClick: () => void;
}

const ExperienceCard = ({
  color,
  count,
  description,
  duration,
  imageUrl,
  onClick,
  title,
}: IProps) => (
  <ExperienceCardStyled color={color} onClick={onClick}>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{count} nearby • {duration} min</span>
    </div>

    <img src={imageUrl} />
  </ExperienceCardStyled>
);

export default ExperienceCard;
