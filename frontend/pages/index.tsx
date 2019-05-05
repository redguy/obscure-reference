import dynamic from "next/dynamic";
import React, { useState } from "react";

import Illustration from '../components/illustration/Illustration.styled';
import Content from '../components/layout/Content.styled';
import Heading from '../components/typography/Heading.styled';
import Text from '../components/typography/Text.styled';
import Button from '../components/button/Button.styled';
import LinkButton from '../components/button/LinkButton.styled';
import Footer from '../components/layout/Footer.styled';
import BackButton from '../components/button/BackButton.component';
import CardList from '../components/cards/CardList.styled';
import ExperienceCard from '../components/cards/ExperienceCard.component';
import { experiences, IExperience } from '../components/cards/Experience.constants';

const Map = dynamic(
  () => import("../components/map/Map.component"),
  {
    ssr: false,
  },
);

enum Step {
  WELCOME,
  EXPERIENCES,
  PLACES,
}

const Homepage = () => {
  const [step, setStep] = useState<Step>(Step.EXPERIENCES);
  const [experience, setExperience] = useState<IExperience>(experiences[0]);

  return (
    <div>
      {step === Step.PLACES && (
        <Content>
          <Heading>{experience.plural} nearby</Heading>
        </Content>
      )}

      {step === Step.EXPERIENCES && (
        <Content>
          <Heading>What experience would soothe you?</Heading>

          <CardList>
            <BackButton onClick={() => setStep(Step.WELCOME)} />
            
            {experiences.map(experience => (
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

      <Map dimmed={step === Step.WELCOME} />
    </div>
  );
};

export default Homepage;
