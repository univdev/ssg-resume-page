const router = require('express').Router();

router.get('/', (req, res) => {
  return res.json({
    commits: 1024,
    stars: 9536,
  });
});

module.exports = router;