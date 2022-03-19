const express = require('express');
const { admin } = require('../helpers/admin');
const router = express.Router();

router.use('/', async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('introductions').get();
    const items = [...snapshot.docs].map((doc) => doc.data());
    return res.json({
      result: [...items],
    });
  } catch (e) {
    return res.status(500).json(e);
  }
});

module.exports = router;
