const functions = require('firebase-functions');

exports.finalized = functions.storage.object().onFinalize(async (response) => {
  console.log(response);
});
exports.deleted = functions.storage.object().onDelete(async (response) => {
  console.log(response);
});