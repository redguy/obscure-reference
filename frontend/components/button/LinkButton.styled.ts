import styled from "@emotion/styled";

import Button from "./Button.styled";

const LinkButton = styled.button`
  align-self: center;
  background: transparent;
  border: none;
  color: #7a66a3;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 500;
  outline: none;
  padding: 1rem 1rem;
  text-transform: uppercase;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    color: #639b59;
  }

  ${Button} + & {
    margin-top: 0.5rem;
  }
`;

export default LinkButton;
