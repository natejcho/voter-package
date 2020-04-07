import { FieldValue } from "@google-cloud/firestore";
import db from "../../lib/db";

export default async (req, res) => {
  const { post_id, comment_id, comment_type } = req.query;
  try {
    let doc,
      update = {};
    if (post_id) {
      doc = db.collection("posts").doc(post_id);
      update = { votes: FieldValue.increment(1) };
    } else if (comment_id) {
      doc = db.collection("comments").doc(comment_id);
      update = comment_type
        ? {
            votes: FieldValue.increment(1),
            [`${comment_type}Vote`]: FieldValue.increment(1),
          }
        : { votes: FieldValue.increment(1) };
    }
    await doc.set(update, { merge: true });

    res.statusCode = 200;
    res.end();
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error }));
  }
};
