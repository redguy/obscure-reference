import React from "react";

import { IPlace } from "./Place.constants";
import PlaceCardStyled from "./PlaceCard.styled";

interface IProps extends IPlace {
  color: string;
  onClick: () => void;
}

const PlaceCard = ({
  color,
  duration,
  length,
  onClick,
  title,
  walkDuration,
}: IProps) => (
  <PlaceCardStyled color={color} onClick={onClick}>
    <div>
      <h3>{title}</h3>
      <span>{duration} minute experience</span>
      <p>{length} km • a {walkDuration} min walk</p>
    </div>
  </PlaceCardStyled>
);

export default PlaceCard;
