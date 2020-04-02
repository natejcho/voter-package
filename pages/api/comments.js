import db from "../../lib/db";

const getComment = async (req, res) => {
  const { post_id } = req.query;
  console.log("getting comments for " + post_id);
  try {
    const doc = await db.collection("comments").doc(post_id).get();
    if (!doc.exists) {
      await db.collection("comments").doc(post_id).set(
        {
          children: [],
          value: "",
          parentId: null,
        },
        { merge: true }
      );
      // good idea but this has potential to wrack up a huge bill
      // await getComment(req, res);
    } else {
      res.status(200).json({ data: doc.data() });
    }
  } catch (error) {
    console.log("Error getting comments", error);
    res.json({ error });
  }
  // db.collection('comments').doc(id).get()
  //   .then((doc) => {
  // })
  // .catch((error) => {
  //   console.log('Error getting comments', error);
  //   res.json({ error })
  // });
};

export default getComment;
