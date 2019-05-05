import styled from "@emotion/styled";

const BackButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 16px rgba(47, 46, 65, 0.15);
  color: #625383;
  cursor: pointer;
  height: 3rem;
  margin-bottom: 0.5rem;
  outline: none;
  padding: 0.75rem;
  transition: all 200ms ease;
  width: 3rem;

  &:hover,
  &:focus {
    box-shadow: 0px 8px 32px rgba(47, 46, 65, 0.25);
    color: #639b59;
  }
`;

export default BackButton;
