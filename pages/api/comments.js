import { FieldValue } from "@google-cloud/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../lib";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const { comment_id } = req.query;
      console.log("getting comment for " + comment_id);
      try {
        const doc = await db.collection("comments").doc(comment_id).get();
        if (doc.exists) {
          return res.status(200).json(doc.data());
        } else {
          const data = {
            children: [],
            value: "",
            parentId: null,
            votes: 0,
            leftVotes: 0,
            moderateVotes: 0,
            rightVotes: 0,
          };
          db.collection("comments").doc(comment_id).set(data, { merge: true });
          return res.status(200).json({ data });
        }
      } catch (error) {
        console.log(error.message);
        return res.json({ error });
      }
      break;
    case "POST":
      const { postId, value } = req.body;
      console.log("writing new comment for post " + postId);
      try {
        const newCommentId = uuidv4();
        await Promise.all([
          db
            .collection("comments")
            .doc(postId)
            .set(
              {
                children: FieldValue.arrayUnion(newCommentId),
              },
              { merge: true }
            ),
          db.collection("comments").doc(newCommentId).set(
            {
              children: [],
              value,
              parentId: postId,
              votes: 0,
              leftVotes: 0,
              moderateVotes: 0,
              rightVotes: 0,
            },
            { merge: true }
          ),
        ]);
        return res.status(200).end();
      } catch (error) {
        console.log(error.message);
        return res.json({ error });
      }
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
};
