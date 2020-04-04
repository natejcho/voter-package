import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { INTRODUCED_BILLS_URL } from "../utils/constants";
import { fetcher } from "../utils/utils";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Index(props) {
  let { data } = useSWR(
    "/api/posts",
    fetcher
  );
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
              comments={data.billsMap[card.bill_id].comments}
              congress={props.recentBills[0].congress}
              votes={data.billsMap[card.bill_id].votes}
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
  return {
    props: { recentBills: data.results },
  };
}

export default Index;
