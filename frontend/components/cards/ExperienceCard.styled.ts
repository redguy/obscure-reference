import styled from "@emotion/styled";

interface IProps {
  color: string;
}

const ExperienceCard = styled.div<IProps>`
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(209, 157, 66, 0.2);
  color: #fcfbf8;
  cursor: pointer;
  display: flex;
  margin-top: 0.5rem;
  min-height: 7.5rem;
  padding: 0.6rem 1rem;
  transition: all 200ms ease;

  &:hover {
    transform: translateX(4px);
  }

  div {
    flex: 1 0 0;
  }

  h3 {
    font-size: 1.1875rem;
    font-weight: 700;
    line-height: 1.2631578947;
  }

  p {
    opacity: 0.65;
    line-height: 1.25;
    margin-top: 0.25rem;
  }

  span {
    display: block;
    font-size: 0.8125rem;
    margin-top: 0.25rem;
    opacity: 0.35;
    text-transform: uppercase;
  }

  img {
    margin-left: 1rem;
    height: 92px;
    width: 92px;
  }
`;

export default ExperienceCard;
