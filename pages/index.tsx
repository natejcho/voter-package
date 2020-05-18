import { css } from "@emotion/css";
import fetch from "isomorphic-unfetch";
import Card from "components/Card";
import Layout from "components/Layout";
import { db } from "lib";
import Router from "next/router";
import { INTRODUCED_BILLS_URL } from "utils/constants";

function Index(props) {
  // let { data } = useSWR(
  //   "/api/posts",
  //   fetcher
  // );
  // console.log(data);
  return (
    <Layout>
      <span>Chamber: {props.recentBills.chamber}</span>
      <table
        css={css`
          border-collapse: separate;
          border-spacing: 0 1rem;
        `}
      >
        <tbody>
          {props.recentBills.bills.map((card, index) => (
            <Card
              {...card}
              key={card.bill_id}
              index={index + 1}
              comments={props.billsMap[card.bill_id].comments}
              link={
                true
                  ? ""
                  : `/bill/${props.recentBills.congress}/${props.bill_slug}`
              }
              votes={props.billsMap[card.bill_id].votes}
            />
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // redirect to elections for now
  if (typeof window === "undefined") {
    ctx.res.writeHeader(301, { Location: "/elections" });
    ctx.res.end();
    return {};
  } else {
    Router.replace("/elections");
    return {};
  }

  const [recentBills, snapshot] = await Promise.all([
    fetch(INTRODUCED_BILLS_URL, {
      method: "get",
      mode: "cors",
      headers: {
        "X-API-Key": process.env.PROPUBLICA_API_KEY,
      },
    }).then(async (res) => {
      const data = await res.json();
      return data.results[0];
    }),
    db.collection("posts").get(),
  ]);
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
