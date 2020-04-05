import styled from "@emotion/styled";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import useSWR from "swr";
import Comment from "../../../components/Comment";
import Layout from "../../../components/Layout";
import Vote from "../../../components/Vote";
import { get_SPECIFIC_BILL } from "../../../utils/constants";
import { fetcher } from "../../../utils/utils";

const Styled = styled.div`
  display: flex;
  flex-direction: column;

  .the-post-itself {
    display: flex;
  }
`;

function Post({ bill }) {
  const router = useRouter();
  const [comment, setComment] = React.useState("");
  const { data, error } = useSWR(
    "/api/comments?comment_id=" + bill.bill_id,
    fetcher
  );

  const createNewComment = async () => {
    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: bill.bill_id,
        value: comment,
      }),
    });
    console.log(window.location.href);
    router.push(`/bill/${bill.congress}/${bill.bill_slug}`);
  };
  return (
    <Layout>
      <Styled>
        <div className="the-post-itself">
          <Vote points={Math.floor(Math.random() * 100)} />
          <div>
            <p>{bill.short_title}</p>
            <p>{bill.title}</p>
            <p>{bill.bill}</p>
            <p>{bill.sponsor_title}</p>
            <p>{bill.sponsor}</p>
            <p>{bill.sponsor_party}</p>
            <p>{bill.sponsor_state}</p>
            <p>{bill.active}</p>
            <p>{bill.primary_subject}</p>
            <p>{bill.committee_codes}</p>
            <p>{bill.latest_major_action_date}</p>
            <p>{bill.latest_major_action}</p>
            <p>{bill.summary}</p>
            <p>{bill.summary_short}</p>
            <p>votes: {bill.votes.length}</p>
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
            (data.children &&
              data.children.map((id) => <Comment key={id} id={id} />))}
        </div>
      </Styled>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(get_SPECIFIC_BILL(params.congress, params.bill), {
      method: "get",
      mode: "cors",
      headers: {
        "X-API-Key": process.env.PROPUBLICA_API_KEY,
      },
    });
    const data = await res.json();
    return {
      props: { bill: data.results[0] },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Post;
