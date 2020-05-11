import { db } from "../../lib";

export default async (req, res) => {
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
