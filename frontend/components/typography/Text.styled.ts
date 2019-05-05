import styled from "@emotion/styled";

import Heading from "./Heading.styled";

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.8;

  ${Heading} + & {
    margin-top: 1rem;
  }
`;

export default Text;
