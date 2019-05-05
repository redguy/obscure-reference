import React from "react";

import { Experience, ExperiencesColors } from "./Experience.constants";
import { IPlace } from "./Place.constants";
import PlaceCardStyled from "./PlaceCard.styled";

interface IProps extends IPlace {
  onClick: () => void;
}

const PlaceCard = ({
  experiences,
  onClick,
  title,
}: IProps) => {
  const color = ExperiencesColors[experiences[0] || Experience.JOYFUL];

  return (
    <PlaceCardStyled color={color} onClick={onClick}>
      <div>
        <h3>{title}</h3>
      </div>
    </PlaceCardStyled>
  );
};

export default PlaceCard;
