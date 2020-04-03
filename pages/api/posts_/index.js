import db from "../../../lib/db";

const getPosts = async (req, res) => {
  console.log("getting all recent posts");
  try {
    const snapshot = await db.collection("posts").get();

    if (snapshot.empty) {
      console.log("No posts in db.");
      res.json({ error: "No posts in db." });
      return;
    }
    const billsMap = {};
    snapshot.forEach((doc) => {
      billsMap[doc.id] = {
        ...doc.data(),
      };
    });
    req.query.bills.forEach((b) => {
      const bill = billsMap[b.bill_id];
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
      arr: req.query.bills.map((b) => b.bill_id),
      billsMap,
    });
  } catch (err) {
    console.log("Error getting posts", err);
    res.json({ error: err });
  }
};

export default getPosts;
