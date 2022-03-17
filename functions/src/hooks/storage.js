const functions = require('firebase-functions');
const { admin } = require('../helpers/admin');

const db = admin.firestore();

exports.finalized = functions.storage.object().onFinalize(async (response) => {
  await db.collection('storage').add(response);
  return response;
});
exports.deleted = functions.storage.object().onDelete(async (response) => {
  const { id } = response;
  const q = await db.collection('storage').where('id', '==', id);
  const snapshots = await q.get()
  snapshots.forEach((doc) => {
    doc.ref.delete();
  });
});