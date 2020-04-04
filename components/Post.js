import styled from "@emotion/styled";
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
  const [comment, setComment] = React.useState('');

  const createNewComment = () => {
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: props.bill_id,
        value: comment,
      }),
    });
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
      <textarea name="text" rows="6" cols="60" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={createNewComment}>Submit new comment</button>
      <Comment id={props.bill_id} />
    </Styled>
  );
};

export default Post;
