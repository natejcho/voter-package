import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { GoArrowUp } from "react-icons/go";

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
  .points {
    font-size: 10pt;
  }
`;

function Vote(props) {
  const [isClicked, setIsClicked] = React.useState(props.isVoted || false);
  const [votes, setVotes] = React.useState(props.votes);

  const handleClick = async () => {
    if (props.onUpvote) {
      await props.onUpvote();
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };
  const handleLeftUpvote = async () => {
    if (props.onUpvote) {
      await props.onUpvote("left");
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };
  const handleRightUpvote = async () => {
    if (props.onUpvote) {
      await props.onUpvote("right");
    }
    setIsClicked((prev) => !prev);
    setVotes((prev) => prev + 1);
  };

  return (
    <Styled isClicked={isClicked}>
      <GoArrowUp className="arrow" onClick={handleClick} />
      {props.showPoints && <span className="points">{votes}</span>}
      {!props.showPoints && (
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
  points: PropTypes.number,
  showPoints: PropTypes.bool,
};
Vote.defaultProps = {
  isVoted: false,
  points: 0,
  showPoints: false,
};
export default Vote;
