import React from "react";
import styled from "@emotion/styled";
import { GoArrowUp } from "react-icons/go";

const Styled = styled.div`
  .points {
    font-size: 10pt;
  }
  svg {
    cursor: pointer;
    fill: ${(props) => (props.isClicked ? "black" : "#9b9b9b")};
    height: 1.1rem;
    width: 0.8rem;
  }
`;

function Vote(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <Styled isClicked={isClicked}>
      <GoArrowUp onClick={() => setIsClicked((prev) => !prev)} />
      <span className="points">{props.points}</span>
    </Styled>
  );
}

export default Vote;
