import { db } from "lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { commentId, value } = req.body;
  console.log("updating comment " + commentId);
  try {
    await db.collection("comments").doc(commentId).set(
      {
        value,
      },
      { merge: true }
    );

    res.status(200);
  } catch (error) {
    console.log("Error updating comment", error);
    res.json({ error });
  }
};
