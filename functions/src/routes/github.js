const router = require('express').Router();

router.get('/', (req, res) => {
  return res.json({
    commits: 768,
    stars: 50,
  });
});

module.exports = router;