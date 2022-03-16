const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    result: [
      { data: 1 },
    ],
  });
});

module.exports = router;
