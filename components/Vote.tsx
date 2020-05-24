import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
import PropTypes from "prop-types";
import { useState, FC } from "react";
import { VOTE_TYPE } from "utils/constants";
import Up from "./FcUp.svg";

interface VoteInterface {
  isVoted?: boolean;
  votes: number;
  showScore?: boolean;
  onUpvote: (x?: VOTE_TYPE) => void;
}

interface StyledVoteInterface {
  isClicked: boolean;
}

const Styled = styled.button`
  top: 1.25rem;
  left: 1.25rem;

  ${tw`hover:bg-indigo-100 active:mt-1 absolute bg-white flex flex-col h-20 w-16 justify-center items-center font-semibold align-top rounded border border-gray-400 `}

  svg {
    ${tw`h-5 w-5`}
  }
  .left-arrow {
    fill: #060077;
    stroke: #060077;
    stroke-width: 1px;
  }
  .right-arrow {
    fill: #bd0008;
    stroke: #bd0008;
    stroke-width: 1px;
  }
  .votes {
    font-size: 10pt;
  }
`;

const Vote: FC<VoteInterface> = (props) => {
  const [isClicked, setIsClicked] = useState(props.isVoted);
  const [votes, setVotes] = useState(props.votes);

  const handleClick = () => {
    if (props.onUpvote) {
      props.onUpvote();
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };
  const handleLeftUpvote = () => {
    if (props.onUpvote) {
      props.onUpvote(VOTE_TYPE.LEFT);
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };
  const handleRightUpvote = () => {
    if (props.onUpvote) {
      props.onUpvote(VOTE_TYPE.RIGHT);
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };

  return (
    <Styled onClick={handleClick}>
      <Up />
      {props.showScore && <span className="votes">{votes}</span>}
      {!props.showScore && (
        <div>
          <Up />
          <Up />
        </div>
      )}
    </Styled>
  );
};

Vote.defaultProps = {
  isVoted: false,
  votes: 0,
};

export default Vote;
