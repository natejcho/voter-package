import db from "../../lib/db";

module.exports = async (req, res) => {
  console.log("creating doc");
  const docRef = db.collection("users").doc("alovelace");

  docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });

  let aTuringRef = db.collection("users").doc("aturing");

  aTuringRef.set({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912,
  });

  res.status(200);
};
