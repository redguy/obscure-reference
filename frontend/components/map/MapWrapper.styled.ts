import styled from "@emotion/styled";

interface IProps {
  dimmed: boolean;
}

const MapWrapper = styled.div<IProps>`
  bottom: 0;
  left: 0;
  opacity: ${props => props.dimmed ? 0.2 : 1};
  position: fixed;
  right: 0;
  top: 0;
  transition: all 1s ease;
  z-index: 0;
`;

export default MapWrapper;
