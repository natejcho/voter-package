import styled from "@emotion/styled";
import Link from "next/link";
import Vote from "./Vote";

const Styled = styled.tr`
  .index {
    display: flex;
    justify-content: flex-end;
  }

  .post {
    display: flex;
    flex-direction: column;

    .comments {
      cursor: pointer;
    }

    .details {
      color: ##828282;
      font-size: 10pt;
      margin-left: 5px;

      .hide {
        cursor: pointer;
      }
    }

    .title {
      color: ${(props) => (props.visited ? "#828282" : "#000")};
      font-size: 13pt;
    }
  }
`;

const Card = (props) => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <Styled>
      {isVisible && (
        <>
          <td className="index">{props.index}.</td>
          <td style={{ verticalAlign: "top" }}>
            <Vote points={props.points} />
          </td>
          <td className="post">
            <Link href={`/comments/${props.congress}/${props.bill_slug}`}>
              <span className="title comments">{props.short_title}</span>
            </Link>
            <div className="details">
              sponsor: {props.sponsor_name} | latest major action:{" "}
              {props.latest_major_action_date} |
              <span
                className="hide"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                hide
              </span>
              |
              <Link href={`/comments/${props.congress}/${props.bill_slug}`}>
                <span className="comments">
                  {props.comments.length} comments
                </span>
              </Link>
            </div>
          </td>
        </>
      )}
    </Styled>
  );
};

export default Card;
