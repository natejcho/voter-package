import fetch from "isomorphic-unfetch";
import { INTRODUCED_BILLS_URL } from "../utils/constants";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Index(props) {
  return (
    <Layout>
      <span>Chamber: {props.proPublicaBills.chamber}</span>
      <table>
        <tbody>
          {props.recentBills.arr.map((id, index) => (
            <Card
              {...props.recentBills.billsMap[id]}
              key={card.bill_id}
              index={index + 1}
              comments={[]}
              congress={props.proPublicaBills.congress}
              points={Math.floor(Math.random() * 100)}
            />
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

// TODO: we need a job that runs to update server with propublica bills
export async function getServerSideProps(context) {
  const res = await fetch(INTRODUCED_BILLS_URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": process.env.PROPUBLICA_API_KEY,
    },
  });
  const data = await res.json();
  const proPublicaBills = data.results[0];

  const {
    req: {
      headers: {
        "x-forwarded-host": host = "",
        "x-forwarded-proto": proto = "",
      } = {},
    } = {},
  } = context;
  const uri = proto && host ? `${proto}://${host}` : "";
  const postsRes = await fetch(`${uri}/api/pages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bills: proPublicaBills.bills,
    }),
  });
  const postsData = await postsRes.json();
  const recentBills = postsData.results[0];

  return {
    props: { recentBills, proPublicaBills },
  };
}

export default Index;
