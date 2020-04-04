import { FieldValue } from '@google-cloud/firestore';
import db from "../../lib/db";

export default async (req, res) => {
  const { post_id, comment_id } = req.query.parse();
  // console.log(req.query);
  try {
    let doc;
    if (post_id) {
      doc = db.collection("posts").doc(post_id);
    } else if (comment_id) {
      doc = db.collection("posts").doc(comment_id);
    }
    await doc.set({ votes: FieldValue.increment(1) }, { merge: true });

    res.statusCode = 200;
    res.end();
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error }))
  }
};