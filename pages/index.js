import fetch from "isomorphic-unfetch";
import { INTRODUCED_BILLS_URL } from "../utils/constants";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Index(props) {
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
              comments={[]}
              congress={props.recentBills[0].congress}
              points={Math.floor(Math.random() * 100)}
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
      "X-API-Key": process.env.PROPUBLICA_API_KEY
    }
  });
  const data = await res.json();
  return {
    props: { recentBills: data.results }
  };
}

export default Index;
