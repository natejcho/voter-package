import fetch from "isomorphic-unfetch";
// import useSWR from "swr";
import Card from "../components/Card";
import Layout from "../components/Layout";
import db from "../lib/db";
import { INTRODUCED_BILLS_URL } from "../utils/constants";
// import { fetcher } from "../utils/utils";

function Index(props) {
  // let { data } = useSWR(
  //   "/api/posts",
  //   fetcher
  // );
  // console.log(data);
  return (
    <Layout>
      <span>Chamber: {props.recentBills.chamber}</span>
      <table>
        <tbody>
          {props.recentBills.bills.map((card, index) => (
            <Card
              {...card}
              key={card.bill_id}
              index={index + 1}
              comments={props.billsMap[card.bill_id].comments}
              congress={props.recentBills.congress}
              votes={props.billsMap[card.bill_id].votes}
            />
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(INTRODUCED_BILLS_URL, {
    method: "get",
    mode: "cors",
    headers: {
      "X-API-Key": process.env.PROPUBLICA_API_KEY,
    },
  });
  const data = await res.json();
  const recentBills = data.results[0];
  const snapshot = await db.collection("posts").get();
  const billsMap = {};
  snapshot.forEach((doc) => {
    billsMap[doc.id] = {
      ...doc.data(),
    };
  });
  recentBills.bills.forEach((b) => {
    if (!billsMap[b.bill_id]) {
      // TODO: i want to fire these off in a batch async
      console.log("creating document for post: " + b.bill_id);
      billsMap[b.bill_id] = {
        comments: [],
        votes: 0,
        leftVotes: 0,
        moderateVotes: 0,
        rightVotes: 0,
      };
      db.collection("posts")
        .doc(b.bill_id)
        .set(billsMap[b.bill_id], { merge: true });
    }
  });
  return {
    props: {
      recentBills,
      billsMap,
    },
  };
}

export default Index;
