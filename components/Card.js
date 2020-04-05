import styled from "@emotion/styled";
import Link from "next/link";
import { useUpvote } from "../utils/utils";
import Vote from "./Vote";

const Styled = styled.tr`
> td {

  border-top: 1px solid #F6F7F8; 
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
      border-right: 2px solid #BBDEFB;
    }
  }

  .post {
    display: flex;
    flex-direction: column;

    .comments {
      cursor: pointer;
      background-color: #eef1f5;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
    padding: 0 0 2px 0;
    }

    .details {
      background-color: #f6f7f8;
      color: #444;
      font-size: 10pt;
      margin: 9px 0 0 5px;

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
  const onUpvote = useUpvote("post", props.bill_id);

  // const onUpvote = async () => {
  //   await fetch("/api/upvote?post_id=" + props.bill_id);
  // };

  return (
    <Styled>
      {isVisible && (
        <>
          {false && <td className="index">{props.index}.</td>}
          <td className="vote-container">
            <Vote votes={props.votes} onUpvote={onUpvote} showPoints />
          </td>
          <td className="post">
            <Link href={`/bill/${props.congress}/${props.bill_slug}`}>
              <span className="title">{props.short_title}</span>
            </Link>
            <div className="details">
              <Link href={`/bill/${props.congress}/${props.bill_slug}`}>
                <span className="comments">
                  {props.comments.length} comments
                </span>
              </Link>
              | sponsor: {props.sponsor_name} | latest major action:{" "}
              {props.latest_major_action_date} |
              <span
                className="hide"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {' '}hide
              </span>
            </div>
          </td>
        </>
      )}
    </Styled>
  );
};

export default Card;
