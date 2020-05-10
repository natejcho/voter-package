import db from "../../lib/db";
import { VOTE_TYPE_ENUM } from "../../utils/constants";

export default async (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        console.log("getting elections upvote data");
        const snapshot = await db
          .collection("elections")
          .orderBy(VOTE_TYPE_ENUM.UPVOTE)
          .get();
        if (snapshot.empty) throw "no elections found";
        else {
          return res.status(200).json(
            snapshot.docs.reduce((acc, doc) => {
              acc[doc.id] = doc.data();
              return acc;
            }, {})
          );
        }
        break;
      default:
        break;
    }
    return res.status(200).end();
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error }));
    return res;
  }
};
