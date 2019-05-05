import styled from "@emotion/styled";

import Text from "../typography/Text.styled";

const Button = styled.button`
  align-self: stretch;
  background-color: #639b59;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 16px rgba(76, 136, 63, 0.25);
  color: #ffffff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  outline: none;
  padding: 1rem 1rem;
  text-transform: uppercase;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: #625383;
  }

  ${Text} + & {
    margin-top: 1rem;
  }
`;

export default Button;
