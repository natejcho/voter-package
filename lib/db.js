const admin = require("firebase-admin");

//let's only do this once!
if (!admin.apps.length) {
  const atob = require("atob");
  const serviceAccount =
    process.env.NODE_ENV === "development"
      ? require("../firebase-secret.json")
      : JSON.parse(atob(process.env.FIREBASE_SECRET));
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin.firestore();
