import styled from "@emotion/styled";
import useSWR from "swr";
import { fetcher } from "../utils/utils";
import Vote from "./Vote";

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

  const { data, error } = useSWR(
    "/api/comments?comment_id=" + props.id,
    fetcher
  );
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

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

  console.log(data);

  return (
    <Styled>
      <Vote points={data.votes} />
      <div>
        <div className="info">
          <a className="user">{data.user || "Luke Skywalker"}</a>
          <span className="total-votes">{data.votes} votes</span>
          <span className="hide">[-]</span>
        </div>
        <span className="the-stuff">{data.value}</span>
        <div className="children">
          {data.children
            // .sort((a, b) => temp[a].votes - temp[b].votes)
            .map((id) => (
              <Comment key={id} id={id} />
            ))}
        </div>
      </div>
    </Styled>
  );
}

export default Comment;