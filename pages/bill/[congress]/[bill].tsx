import styled from "@emotion/styled";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import Comment from "../../../components/Comment";
import Layout from "../../../components/Layout";
import Vote from "../../../components/Vote";
import { get_SPECIFIC_BILL } from "../../../utils/constants";
import { fetcher } from "../../../utils";

const Styled = styled.div`
  display: flex;
  flex-direction: column;

  .new-comment {
    background: #f7f7f8;
    border: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    margin: 10px 80px 15px 40px;
    padding: 10px 20px;

    textarea {
      border: 1px solid #dee5e7;
      font-size: 1rem;
      height: 100px;
      line-height: 1.4rem;
      margin: 5px 10px 5px 0;
      padding: 2px;
      width: 500px;
    }
    button {
      background: #5394c9;
      border-radius: 1px;
      border: 1px solid #448bc4;
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
      color: #fff;
      cursor: pointer;
      margin: 5px 5px 10px 0;
      overflow: hidden;
      padding: 5px 10px;
      text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.15);
      width: 77px;
    }
  }

  .the-post-itself {
    display: flex;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
    padding: 5px 0 20px 30px;

    &:active,
    &:focus-within,
    &:hover {
      .entry .details {
        background-color: #f0f3fc;
      }
    }
    .entry {
      outline: none;
      overflow: hidden;
      margin-left: 3px;
      padding-right: 5px;
      width: 100%;

      .details {
        margin: 10px 0 5px 0;
        unicode-bidi: isolate;

        .text {
          background-color: #fafbfc;
          border: 1px solid #eef1f5;
          padding: 0 15px;
          border-radius: 5px;
          color: #222222;
          max-width: 60rem;
          overflow-wrap: break-word;
          word-wrap: break-word;
          p {
            font-size: 1rem;
            line-height: 1.4rem;
          }
        }
      }
      .title {
        color: #0000ff;
        font-size: medium;
        a {
          text-decoration: none;
        }
      }
    }
    .vote-container {
      margin-top: 0.8rem;
    }
  }
`;

function Post({ bill }) {
  const router = useRouter();
  const [comment, setComment] = useState("");
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
    router.push(`/bill/${bill.congress}/${bill.bill_slug}`);
  };
  return (
    <Layout>
      <Styled>
        <div className="the-post-itself">
          <span className="vote-container">
            <Vote
              votes={Math.floor(Math.random() * 100)}
              onUpvote={() => {}}
              showScore={false}
            />
          </span>
          <div className="entry">
            <p className="title">
              <a
                href={bill.govtrack_url || bill.congressdotgov_url}
                target="_blank"
              >
                {bill.short_title}
              </a>
            </p>
            <div className="details">
              <div className="text">
                <p className="long-title">{bill.title}</p>
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
          </div>
        </div>
        <form className="new-comment">
          <textarea
            name="text"
            rows={6}
            cols={60}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={createNewComment}>Submit</button>
        </form>
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
