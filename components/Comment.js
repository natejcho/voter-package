import useSWR from "swr";
import { fetcher } from "../utils/utils";
import Vote from "./Vote";

import styled from "@emotion/styled";

const temp = {
  0: {
    value: "first comment",
    children: [1, 2],
    user: "gandalf",
    timestamp: "",
    votes: 1,
    leftVotes: 0,
    moderateVotes: 0,
    rightVotes: 0,
  },
  1: {
    value: "child comment",
    children: [3],
    user: "frodo",
    votes: 100,
  },
  2: {
    value: "child comment",
    children: [4, 5],
    user: "samwise",
    votes: 20,
  },
  3: {
    value: "grandchild",
    children: [],
    user: "pip",
    votes: 40,
  },
  4: {
    value: "grandchild",
    children: [],
    user: "legolas",
    votes: 3,
  },
  5: {
    value: "grandchild",
    children: [],
    user: "gimlee",
    votes: 5,
  },
};

const Styled = styled.div`
  display: flex;

  .children {
    margin: 14px 16px 8px 23px;
  }

  .info {
    font-size: 10pt;

    span {
      margin-left: 0.5rem;
    }
    .total-votes {
      font-weight: bold;
    }
  }
`;

const Comment = (props) => {
  // let { data, error } = useSWR(
  //   "/api/comments?id=" + props.id,
  //   fetcher
  // );
  // console.error(error);
  // data = data || { value: ''};
  const data = temp[props.id] || {};

  const updateComment = () => {
    // fetch("/api/updateComment", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: props.id,
    //     value: comment,
    //   }),
    // });
  };

  return (
    <Styled>
      <Vote points={data.votes} />
      <div>
        <div className="info">
          <a className="user">{data.user}</a>
          <span className="total-votes">{data.votes} votes</span>
          <span className="hide">[-]</span>
        </div>
        <span className="the-stuff">{data.value}</span>
        <div className="children">
          {data.children
            .sort((a, b) => temp[a].votes - temp[b].votes)
            .map((id) => (
              <Comment id={id} />
            ))}
        </div>
      </div>
    </Styled>
  );
};

export default Comment;
