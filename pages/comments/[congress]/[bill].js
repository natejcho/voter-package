import fetch from "isomorphic-unfetch";
import { get_SPECIFIC_BILL } from "../../../utils/constants";
import Layout from "../../../components/Layout";
import Post from "../../../components/Post";
import Vote from "../../../components/Vote";

function Bill({ bill }) {
  return (
    <Layout>
      <Post {...bill}></Post>
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

export default Bill;
