import { FieldValue } from "@google-cloud/firestore";
import { db } from "lib";
import { VOTE_TYPE_ENUM } from "utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * upvote API - upvote endpoint for handling upvote requests
 * @param {HTTPRequeset} req
 * @param {HTTPResponse} res
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { post_id, comment_id, comment_type } = req.query;
  try {
    switch (req.method) {
      case "POST":
        const { id, type, collection } = req.body;
        console.log("upvoting for " + collection + " " + id);
        const election = { [VOTE_TYPE_ENUM.UPVOTE]: FieldValue.increment(1) };
        if (type != null) election[type] = FieldValue.increment(1);
        await db
          .collection(collection)
          .doc(`${id}`)
          .set(election, { merge: true });
        break;
      default:
        break;
    }
    res.statusCode = 200;
    res.end();
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error }));
    return res;
  }
};

// old iteration of upvoting, shows upvote for post and id
// let doc,
// update = {};
// if (post_id) {
// doc = db.collection("posts").doc(post_id);
// update = { votes: FieldValue.increment(1) };
// } else if (comment_id) {
// doc = db.collection("comments").doc(comment_id);
// update = comment_type
//   ? {
//     votes: FieldValue.increment(1),
//     [`${comment_type}Vote`]: FieldValue.increment(1),
//   }
//   : { votes: FieldValue.increment(1) };
// }
// await doc.set(update, { merge: true });
