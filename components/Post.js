import styled from "@emotion/styled";
import Comment from "./Comment";
import Vote from "./Vote";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = (props) => {
  return (
    <Styled>
      <Vote />
      <span>{props.short_title}</span>
      <span>{props.title}</span>
      <span>{props.bill}</span>
      <span>{props.sponsor_title}</span>
      <span>{props.sponsor}</span>
      <span>{props.sponsor_party}</span>
      <span>{props.sponsor_state}</span>
      <span>{props.active}</span>
      <span>{props.primary_subject}</span>
      <span>{props.committee_codes}</span>
      <span>{props.latest_major_action_date}</span>
      <span>{props.latest_major_action}</span>
      <span>{props.summary}</span>
      <span>{props.summary_short}</span>
      <span>votes: {props.votes.length}</span>
      <Comment postId={props.bill_id} />
    </Styled>
  );
};

export default Post;
