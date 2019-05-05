import styled from "@emotion/styled";

interface IProps {
  color?: string;
}

const Heading = styled.h1<IProps>`
  color: ${(props) => props.color || "#625383"};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.25;
`;

export default Heading;
