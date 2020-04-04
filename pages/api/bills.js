import { INTRODUCED_BILLS_URL } from "../../utils/constants";
import db from "../../lib/db";

const getPosts = async (req, res) => {
  console.log("getting all recent posts");
  try {
    const res = await fetch(INTRODUCED_BILLS_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": process.env.PROPUBLICA_API_KEY,
      },
    });
    const data = await res.json();
    const proPublicaBills = data.results[0];

    const snapshot = await db.collection("posts").get();

    if (snapshot.empty) {
      console.log("no posts");
      const billsMap = {};
      proPublicaBills.bills.forEach((b) => {
        let bill = billsMap[b.bill_id];
        if (bill) {
          bill = {
            ...bill,
            ...b,
          };
        } else {
          // i want to fire these off in a batch async
          bill = {
            comments: [],
            votes: 0,
            leftVotes: 0,
            moderateVotes: 0,
            rightVotes: 0,
          };
          db.collection("posts").doc(b.bill_id).set(bill);
          bill = {
            ...bill,
            ...b,
          };
        }
      });
      res.status(200).json({
        arr: proPublicaBills.bills.map((b) => b.bill_id),
        billsMap,
      });
    } else {
      const billsMap = {};
      snapshot.forEach((doc) => {
        billsMap[doc.id] = {
          ...doc.data(),
        };
      });
      proPublicaBills.bills.forEach((b) => {
        let bill = billsMap[b.bill_id];
        if (bill) {
          bill = {
            ...bill,
            ...b,
          };
        } else {
          // i want to fire these off in a batch async
          bill = {
            comments: [],
            votes: 0,
            leftVotes: 0,
            moderateVotes: 0,
            rightVotes: 0,
          };
          db.collection("posts").doc(b.bill_id).set(bill);
          bill = {
            ...bill,
            ...b,
          };
        }
      });
      console.log('returning: ');
      console.log(billsMap);
      res.status(200).json({
        proPublicaBills,
        recentBills: {
          arr: proPublicaBills.bills.map((b) => b.bill_id),
          billsMap,
        }
      });
    }
  } catch (err) {
    console.log("Error getting posts", err);
    res.json({ error: err });
  }
};

export default getPosts;
