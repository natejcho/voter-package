import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
import Link from "next/link";
import { useState } from "react";
import { useUpvote, noop } from "utils";
import { VOTE_TYPE } from "utils/constants";
import Vote from "./Vote";

interface CardInterface {
  // update Array type
  comments: Array<any>;
  index: number;
  latest_major_action_date: string;
  link: string;
  onUpvote?: (x?: VOTE_TYPE) => void;
  short_title: string;
  sponsor_name: string;
  votes: number;
}

interface StyledCardInterface {
  isVisited: boolean;
}

const Styled = styled.tr`
  > td {
    ${tw` p-0  pt-1`}
  }

  .index {
    ${tw`flex justify-end`}
  }

  &:active,
  &:focus-within,
  &:hover {
    .post {
      ${tw`bg-blue-100 border-0 border-r-2 border-blue-300`}
    }
  }

  .post {
    ${tw`bg-white rounded-sm flex flex-col`}

    .comments {
      ${tw`cursor-pointer p-0 px-2 font-bold`}
    }

    .details {
      background-color: #f6f7f8;
      color: #444;
      ${tw`cursor-pointer m-0 mt-2 text-sm`}

      .hide {
        ${tw`cursor-pointer`}
      }
    }

    .title {
      color: ${(props: StyledCardInterface) =>
        props.isVisited ? "#551a8b" : "#0000ff"};
      ${tw`cursor-pointer text-base`}
    }
  }

  .vote-container {
    ${tw`align-top`}
  }
`;

const Card: React.FC<CardInterface> = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  // const onUpvote = useUpvote("post", props.bill_id);

  // const onUpvote = async () => {
  //   await fetch("/api/upvote?post_id=" + props.bill_id);
  // };

  const billRoute = "";
  // `/bill/${props.congress}/${props.bill_slug}`;

  return (
    <Styled isVisited={false}>
      {isVisible && (
        <>
          {false && <td className="index">{props.index}.</td>}
          <td className="vote-container">
            <Vote votes={props.votes} onUpvote={props.onUpvote} showScore />
          </td>
          <td className="post">
            <a href={props.link}>
              <span className="title">{props.short_title}</span>
            </a>
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

Card.defaultProps = {
  onUpvote: noop,
};

export default Card;
