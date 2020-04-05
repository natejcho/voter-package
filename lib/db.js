const atob = require('atob');
const admin = require("firebase-admin");
const serviceAccount = process.env.NODE_ENV === 'development' ? require("../firebase-secret.json") : atob(process.env.FIREBASE_SECRET);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin.firestore();
