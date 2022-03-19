const express = require('express');
const router = express.Router();
const { admin } = require('../helpers/admin');

router.get('/', async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('careers').get();
    const items = [...snapshot.docs].map((doc) => doc.data());
    return res.json({
      result: [...items],
    });
  } catch (e) {
    return res.status(500).json(e);
  } 
});

module.exports = router;
