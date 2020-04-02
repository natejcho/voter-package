const admin = require('firebase-admin');
let serviceAccount = require('../resources/voter-package-fae5c2b2adf9.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

module.exports = admin.firestore();