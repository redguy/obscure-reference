import React from "react";

import { Experience, ExperiencesColors } from "./Experience.constants";
import { IPlace } from "./Place.constants";
import PlaceCardStyled from "./PlaceCard.styled";

interface IProps extends IPlace {
  onClick: () => void;
}

const PlaceCard = ({
  duration,
  experiences,
  length,
  onClick,
  title,
  walkDuration,
}: IProps) => {
  const color = ExperiencesColors[experiences[0] || Experience.JOYFUL];

  return (
    <PlaceCardStyled color={color} onClick={onClick}>
      <div>
        <h3>{title}</h3>
        <span>{duration} minute experience</span>
        <p>{length} km • a {walkDuration} min walk</p>
      </div>
    </PlaceCardStyled>
  );
};

export default PlaceCard;
