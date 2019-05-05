import { useState } from "react";

import BackButton from "../button/BackButton.component";
import Button from "../button/Button.styled";
import LinkButton from "../button/LinkButton.styled";
import CardList from "../cards/CardList.styled";
import { experiences, IExperience } from "../cards/Experience.constants";
import ExperienceCard from "../cards/ExperienceCard.component";
import { places } from "../cards/Place.constants";
import PlaceCard from "../cards/PlaceCard.component";
import Illustration from "../illustration/Illustration.styled";
import Content from "../layout/Content.styled";
import Footer from "../layout/Footer.styled";
import Map from "../map/Map.component";
import usePosition from "../map/usePosition.hook";
import Heading from "../typography/Heading.styled";
import Text from "../typography/Text.styled";

enum Step {
  WELCOME,
  EXPERIENCES,
  PLACE,
  PLACES,
}

const Wizard = () => {
  const [step, setStep] = useState<Step>(Step.PLACES);
  const [selectedExperience, setExperience] = useState<IExperience>(experiences[0]);
  const position = usePosition();

  return (
    <div>
      {step === Step.PLACES && (
        <Content>
          <Heading>{selectedExperience.plural} nearby</Heading>

          <CardList>
            <BackButton onClick={() => setStep(Step.EXPERIENCES)} />

            {places.map((place) => (
              <PlaceCard
                key={[place.position.longitude, place.position.latitude].join("_")}
                {...place}
                onClick={() => {
                  setStep(Step.WELCOME);
                  window.open(`https://www.google.com/maps/@${place.position.latitude},${place.position.longitude},16z`, "_blank");
                }}
              />
            ))}
          </CardList>
        </Content>
      )}

      {step === Step.EXPERIENCES && (
        <Content>
          <Heading>What experience would soothe you?</Heading>

          <CardList>
            <BackButton onClick={() => setStep(Step.WELCOME)} />

            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                {...experience}
                onClick={() => {
                  setExperience(experience);
                  setStep(Step.PLACES);
                }}
              />
            ))}
          </CardList>
        </Content>
      )}

      {step === Step.WELCOME && (
        <Content>
          <Heading>Find your calm place in everyday hurry</Heading>
          <Text>Spend a couple of minutes clearing your head at a soothing place you’ll fall in love with</Text>

          <Footer>
            <Illustration src="/static/images/homepage.png" />
            <Button onClick={() => setStep(Step.EXPERIENCES)}>Get me to such place</Button>
            <LinkButton>What do you mean?</LinkButton>
          </Footer>
        </Content>
      )}

      {position && (
        <Map dimmed={step === Step.WELCOME} position={position} />
      )}
    </div>
  );
};

export default Wizard;
