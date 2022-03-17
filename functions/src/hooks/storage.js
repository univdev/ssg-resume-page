const functions = require('firebase-functions');
const firestore = require('@google-cloud/firestore');
const db = new firestore();

exports.finalized = functions.storage.object().onFinalize(async (response) => {
  console.log(response);
  // await db.collection('storage').docs().set(response);
  // return response;
});
exports.deleted = functions.storage.object().onDelete(async (response) => {
  
});