import styled from "@emotion/styled";
import useSWR from "swr";
import { fetcher, useUpvote } from "utils";
import Vote from "./Vote";

const Styled = styled.div`
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  display: flex;
  margin: 0 0 8px 10px;
  padding: 5px;
  padding-right: 8px;
  overflow: hidden;

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
  .the-stuff {
    margin: 5px 10px 5px 0;
  }
`;

const Comment = (props) => {
  const onUpvote = (type: string) => {
    // useUpvote("comment", props.id, type)();
  };

  const { data, error } = useSWR(
    "/api/comments?comment_id=" + props.id,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // const updateComment = () => {
  //   fetch("/api/updateComment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       commentId: props.postId,
  //       value: comment,
  //     }),
  //   });
  // };

  return (
    <Styled>
      <Vote votes={data.votes} onUpvote={onUpvote} />
      <div>
        <div className="info">
          <a className="user">{data.user || "Luke Skywalker"}</a>
          <span className="total-votes">{data.votes} votes</span>
          <span className="hide">[-]</span>
        </div>
        <span className="the-stuff">{data.value}</span>
        <div className="children">
          {data.children.map((id) => (
            <Comment key={id} id={id} />
          ))}
        </div>
      </div>
    </Styled>
  );
};

export default Comment;
