require('dotenv').load();
const admin = require('firebase-admin');
const firebasekey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

admin.initializeApp({
  credential: admin.credential.cert({
    "project_id": process.env.FIREBASE_ADMIN_PROJECT_ID,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "private_key": firebasekey,
  }),
  databaseURL: "https://gateway-7aff7.firebaseio.com",
});

module.exports = admin.database();