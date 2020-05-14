import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { GoArrowUp } from "react-icons/go";
import { VOTE_TYPE_ENUM } from "../utils/constants";

const Styled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 20px;

  svg {
    cursor: pointer;
    height: 1.2rem;
    margin: 0 2px;
    width: 0.8rem;
  }
  .arrow {
    fill: ${(props) => (props.isClicked ? "#616161" : "#fff")};
    stroke: #444;
    stroke-width: 1px;
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

function Vote(props) {
  const [isClicked, setIsClicked] = React.useState(props.isVoted);
  const [votes, setVotes] = React.useState(props.votes);

  const handleClick = () => {
    if (props.onUpvote) {
      props.onUpvote();
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };
  const handleLeftUpvote = () => {
    if (props.onUpvote) {
      props.onUpvote(VOTE_TYPE_ENUM.LEFT);
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };
  const handleRightUpvote = () => {
    if (props.onUpvote) {
      props.onUpvote(VOTE_TYPE_ENUM.RIGHT);
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };

  return (
    <Styled isClicked={isClicked}>
      <GoArrowUp className="arrow" onClick={handleClick} />
      {props.showScore && <span className="votes">{votes}</span>}
      {!props.showScore && (
        <div>
          <GoArrowUp className="left-arrow" onClick={handleLeftUpvote} />
          <GoArrowUp className="right-arrow" onClick={handleRightUpvote} />
        </div>
      )}
    </Styled>
  );
}

Vote.propTypes = {
  isVoted: PropTypes.bool,
  votes: PropTypes.number,
  showScore: PropTypes.bool.isRequired,
  onUpvote: PropTypes.func,
};

Vote.defaultProps = {
  isVoted: false,
  votes: 0,
};

export default Vote;
