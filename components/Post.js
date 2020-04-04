import useSWR from "swr";
import { useRouter } from 'next/router'
import styled from "@emotion/styled";
import { fetcher } from "../utils/utils";
import Comment from "./Comment";
import Vote from "./Vote";

const Styled = styled.div`
  display: flex;
  flex-direction: column;

  .the-post-itself {
    display: flex;
  }
`;

const Post = (props) => {
  const router = useRouter()
  const [comment, setComment] = React.useState("");
  const { data, error } = useSWR(
    "/api/comments?comment_id=" + props.bill_id,
    fetcher
  );

  const createNewComment = async () => {
    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: props.bill_id,
        value: comment,
      }),
    });
    router.push(`/bill/${props.congress}/${props.bill_slug}`)
  };
  return (
    <Styled>
      <div className="the-post-itself">
        <Vote points={Math.floor(Math.random() * 100)} />
        <div>
          <p>{props.short_title}</p>
          <p>{props.title}</p>
          <p>{props.bill}</p>
          <p>{props.sponsor_title}</p>
          <p>{props.sponsor}</p>
          <p>{props.sponsor_party}</p>
          <p>{props.sponsor_state}</p>
          <p>{props.active}</p>
          <p>{props.primary_subject}</p>
          <p>{props.committee_codes}</p>
          <p>{props.latest_major_action_date}</p>
          <p>{props.latest_major_action}</p>
          <p>{props.summary}</p>
          <p>{props.summary_short}</p>
          <p>votes: {props.votes.length}</p>
        </div>
      </div>
      <textarea
        name="text"
        rows="6"
        cols="60"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={createNewComment}>Submit new comment</button>
      <div className="comment-section">
        {(error && <div>failed to load</div>) ||
          (!data && <div>loading...</div>) ||
          data.children.map((id) => <Comment key={id} id={id} />)}
      </div>
    </Styled>
  );
};

export default Post;
