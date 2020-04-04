import React from "react";
import styled from "@emotion/styled";
import { GoArrowUp } from "react-icons/go";

const Styled = styled.div`
  .votes {
    font-size: 10pt;
  }
  button {
    display: contents;
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
  const [votes, setVotes] = React.useState(props.votes);

  const handleClick = () => {
    if (props.onUpvote) {
      props.onUpvote();
    }
    setIsClicked((prev) => !prev)
    setVotes(prev => prev + 1);
  }

  return (
    <Styled isClicked={isClicked}>
      <button onClick={handleClick}>
        <GoArrowUp />
      </button>
      <span className="votes">{votes}</span>
    </Styled>
  );
}



export default Vote;
