import { FieldValue } from '@google-cloud/firestore';
import db from "../../../lib/db";

export default async (req, res) => {
  const { query: { postId } } = req;
  console.log(postId);
  try {
    if (postId) {
      const doc = db.collection("posts").doc(postId);
      await doc.set({ votes: FieldValue.increment(1) }, { merge: true });
      res.statusCode = 200;
      res.end();
    }
    else {
      return res.status(404).json({
        status: 404,
        message: `Post: ${postId} not found`
      })
    }
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error }))
  }
};