import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { GoArrowUp } from "react-icons/go";

const Styled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 5px;

  svg {
    cursor: pointer;
    height: 1.2rem;
    margin: 0 2px;
    width: 0.8rem;
  }

  .arrow {
    fill: ${(props) => (props.isClicked ? "#616161" : "#fff")};
    stroke: #828282;
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

  return (
    <Styled isClicked={isClicked}>
      <GoArrowUp
        className="arrow"
        onClick={() => setIsClicked((prev) => !prev)}
      />
      {props.showPoints && <span className="points">{props.points}</span>}
      <div>
        <GoArrowUp
          className="left-arrow"
          onClick={() => setIsClicked((prev) => !prev)}
        />
        <GoArrowUp
          className="right-arrow"
          onClick={() => setIsClicked((prev) => !prev)}
        />
      </div>
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
