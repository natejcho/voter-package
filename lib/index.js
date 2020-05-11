import cookie from "cookie";
import admin from "firebase-admin";

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

export const db = admin.firestore();

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
