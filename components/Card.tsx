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

const Styled = styled.li`
  ${tw`overflow-hidden relative border-0 border-b-2 border-gray-200`}

  .index {
    ${tw`flex justify-end`}
  }

  .post {
    &:hover {
      ${tw`bg-indigo-100 border-0 border-r-4 border-indigo-300`}
    }

    ${tw`flex flex-col justify-between w-auto h-20 box-content  p-5 pl-24`}

    .comments {
      ${tw`cursor-pointer p-0 px-2 font-bold`}
    }

    .details {
      ${tw`mt-2 h-6 flex items-center text-sm w-auto text-gray-500 text-xs`}

      .hide {
        ${tw`cursor-pointer`}
      }
    }

    .title {
      ${tw`cursor-pointer text-base font-semibold text-black`}
    }
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
    <Styled>
      {isVisible && (
        <>
          {false && <div className="index">{props.index}.</div>}
          <Vote votes={props.votes} onUpvote={props.onUpvote} showScore />

          <div className="post">
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
          </div>
        </>
      )}
    </Styled>
  );
};

Card.defaultProps = {
  onUpvote: noop,
};

export default Card;
