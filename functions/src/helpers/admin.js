const admin = require('firebase-admin');
const serviceAccount = require('../permissions.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.admin = admin;