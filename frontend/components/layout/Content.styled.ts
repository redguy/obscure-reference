import styled from "@emotion/styled";

import Footer from '../layout/Footer.styled';
import Heading from '../typography/Heading.styled';
import Text from '../typography/Text.styled';

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;

${Heading}, ${Text} {
  margin-left: 2rem;
  margin-right: 2rem;
}

${Heading} {
  margin-top: 2rem;
}

  ${Footer} {
    margin-top: auto;
  }
`;

export default Content;
