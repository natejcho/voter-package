const admin = require('firebase-admin');
let serviceAccount = require('../resources/key.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

module.exports = admin.firestore();