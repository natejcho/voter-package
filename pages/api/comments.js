import { FieldValue } from "@google-cloud/firestore";
import { v4 as uuidv4 } from "uuid";
import db from "../../lib/db";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      // tODO: get from feature branch
      // const { post_id } = req.query;
      // console.log("getting comments for " + post_id);
      // try {
      //   const doc = await db.collection("comments").doc(post_id).get();
      //   if (!doc.exists) {
      //     await db.collection("comments").doc(post_id).set(
      //       {
      //         children: [],
      //         value: "",
      //         parentId: null,
      //       },
      //       { merge: true }
      //     );
      //     // good idea but this has potential to wrack up a huge bill
      //     // await getComment(req, res);
      //   } else {
      //     res.status(200).json({ data: doc.data() });
      //   }
      // } catch (error) {
      //   console.log("Error getting comments", error);
      //   res.json({ error });
      // }
      break;
    case "POST":
      const { postId, value } = req.body;
      console.log("writing new comment for post " + postId);
      try {
        const newCommentId = uuidv4();
        await Promise.all([
          db
            .collection("posts")
            .doc(postId)
            .update({
              children: FieldValue.arrayUnion(newCommentId),
            }),
          db.collection("comments").doc(newCommentId).set(
            {
              children: [],
              value,
              parentId: postId,
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
