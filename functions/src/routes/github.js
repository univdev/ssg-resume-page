const router = require('express').Router();
const admin = require('../helpers/admin');

router.get('/', (req, res) => {
  return res.json({
    commits: 768,
    stars: 50,
  });
});

exports.github = router;