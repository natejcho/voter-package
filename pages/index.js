import useSWR from "swr";
import { fetcher } from "../utils/utils";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Index = (props) => {
  const { data } = useSWR(
    "/api/bills",
    fetcher
  );

  return (
    <Layout>
      <span>Chamber: {data.proPublicaBills.chamber}</span>
      <table>
        <tbody>
          {data.recentBills.arr.map((id, index) => (
            <Card
              {...data.recentBills.billsMap[id]}
              key={card.bill_id}
              index={index + 1}
              congress={data.proPublicaBills.congress}
            />
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

// TODO: we need a job that runs to update server with propublica bills
// export async function getServerSideProps(context) {
// const res = await fetch(INTRODUCED_BILLS_URL, {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "X-API-Key": process.env.PROPUBLICA_API_KEY,
//   },
// });
// const data = await res.json();
// const proPublicaBills = data.results[0];

// const {
//   req: {
//     headers: {
//       "x-forwarded-host": host = "",
//       "x-forwarded-proto": proto = "",
//     } = {},
//   } = {},
// } = context;
// const uri = proto && host ? `${proto}://${host}` : "localhost:3000";
// const postsRes = await fetch(`${uri}/api/posts`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     bills: proPublicaBills.bills,
//   }),
// });
// console.log('post responst:');
// console.log(postsRes);
// const recentBills = await postsRes.json();
// const res = await fetch('localhost:3000/api/posts');
// const props = await res.json();

// return {
//   props,
// };
// }

export default Index;
