import db from "../../lib/db";

export default async (req, res) => {
  console.log("getting collection");
  res.status(200).json({ data: "i exist" });
  // db.collection('post').get()
  //   .then((snapshot) => {
  //     const comments = snapshot.map((doc) => doc.data());
  //     res.status(200).json({ comments });
  //   })
  //   .catch((error) => {
  //     console.log('Error getting comments', error);
  //     res.json({ error })
  //   });
};
