import dynamic from "next/dynamic";
import React from "react";

import Illustration from '../components/illustration/Illustration.styled';
import Content from '../components/layout/Content.styled';
import Heading from '../components/typography/Heading.styled';
import Text from '../components/typography/Text.styled';
import Button from '../components/button/Button.styled';
import LinkButton from '../components/button/LinkButton.styled';
import Footer from '../components/layout/Footer.styled';

const Map = dynamic(
  () => import("../components/map/Map.component"),
  {
    ssr: false,
  },
);

const Homepage = () => (
  <div>
    <Content>
      <Heading>Find your calm place in everyday hurry</Heading>
      <Text>Spend a couple of minutes clearing your head at a soothing place you’ll fall in love with</Text>

      <Footer>
        <Illustration src="/static/images/homepage.png" />
        <Button>Get me to such place</Button>
        <LinkButton>What do you mean?</LinkButton>
      </Footer>
    </Content>

    <Map />
  </div>
);

export default Homepage;
