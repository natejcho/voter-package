import { db } from "lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
