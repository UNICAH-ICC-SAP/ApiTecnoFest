const admin = require("firebase-admin");
require('dotenv').config({ path: 'hola.env' });

//firebase
const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://tecnofest2024-default-rtdb.firebaseio.com/'
});

const db = admin.database();

module.exports = db;
