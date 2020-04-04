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
      <span>Chamber: {props.recentBills[0].chamber}</span>
      <table>
        <tbody>
          {props.recentBills[0].bills.map((card, index) => (
            <Card
              {...card}
              key={card.bill_id}
              index={index + 1}
              comments={props.billsMap[card.bill_id].comments}
              congress={props.recentBills[0].congress}
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
  const snapshot = await db.collection("posts").get();
  const billsMap = {};
  snapshot.forEach((doc) => {
    billsMap[doc.id] = {
      ...doc.data(),
    };
  });
  return {
    props: {
      recentBills: data.results,
      billsMap,
    },
  };
}

export default Index;
