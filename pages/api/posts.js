import db from "../../lib/db";

export default async (req, res) => {
  console.log("getting posts");
  const snapshot = await db.collection("posts").get();
  const billsMap = {};
  snapshot.forEach((doc) => {
    billsMap[doc.id] = {
      ...doc.data(),
    };
  });
  res.status(200).json({
    billsMap,
  });
};
