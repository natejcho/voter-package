// const admin = require('firebase-admin');


// export default admin
//   .initializeApp(
//     {
//       credential: admin.credential.cert(
//         require('../resources/voter-package-fae5c2b2adf9.json')
//       ),
//       // databaseURL: 'https://your-name-here.firebaseio.com'
//     },
//   )
//   .firestore();


const admin = require('firebase-admin');

let serviceAccount = require('../resources/voter-package-fae5c2b2adf9.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

let db = admin.firestore();

module.exports = db;