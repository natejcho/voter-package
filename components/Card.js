import styled from "@emotion/styled";
import Link from "next/link";
import PropTypes from "prop-types";
import { useUpvote, noop } from "../utils/utils";
import Vote from "./Vote";

const Styled = styled.tr`
  > td {
    // border-top: 1px solid #f6f7f8;
    padding-top: 5px;
  }

  .index {
    display: flex;
    justify-content: flex-end;
  }

  &:active,
  &:focus-within,
  &:hover {
    .post {
      background-color: #f0f3fc;
      border-right: 2px solid #bbdefb;
    }
  }

  .post {
    background-color: #fff;
    border: 1px solid #eef1f5;
    border-radius: 3px;
    display: flex;
    flex-direction: column;

    .comments {
      cursor: pointer;
      padding-left: 10px;
      padding-right: 10px;
      font-weight: bold;
    }

    .details {
      background-color: #f6f7f8;
      color: #444;
      font-size: 10pt;
      margin-top: 9px;

      .hide {
        cursor: pointer;
      }
    }

    .title {
      color: ${(props) => (props.visited ? "#551a8b" : "#0000ff")};
      font-size: medium;
      cursor: pointer;
    }
  }

  .vote-container {
    vertical-align: top;
  }
`;

const Card = (props) => {
  const [isVisible, setIsVisible] = React.useState(true);
  // const onUpvote = useUpvote("post", props.bill_id);

  // const onUpvote = async () => {
  //   await fetch("/api/upvote?post_id=" + props.bill_id);
  // };

  const billRoute = "";
  // `/bill/${props.congress}/${props.bill_slug}`;

  return (
    <Styled>
      {isVisible && (
        <>
          {false && <td className="index">{props.index}.</td>}
          <td className="vote-container">
            <Vote votes={props.votes} onUpvote={props.onUpvote} showScore />
          </td>
          <td className="post">
            <Link href={billRoute}>
              <span className="title">{props.short_title}</span>
            </Link>
            <div className="details">
              {false && (
                <>
                  <Link href={billRoute}>
                    <span className="comments">
                      {props.comments.length} comments
                    </span>
                  </Link>
                  |{" "}
                </>
              )}
              sponsor: {props.sponsor_name} | latest major action:{" "}
              {props.latest_major_action_date} |
              <span
                className="hide"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {" "}
                hide
              </span>
            </div>
          </td>
        </>
      )}
    </Styled>
  );
};

Card.propTypes = {
  bill_id: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  latest_major_action_date: PropTypes.string.isRequired,
  short_title: PropTypes.string.isRequired,
  sponsor_name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  onUpvote: PropTypes.func,
};

Card.defaultProps = {
  onUpvote: noop,
};

export default Card;
