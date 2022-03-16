const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors({ origin: true }));

app.use('/', routes);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

exports.api = functions.https.onRequest(app);