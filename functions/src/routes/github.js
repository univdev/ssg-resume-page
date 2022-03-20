const axios = require('axios').default;
const router = require('express').Router();

router.get('/', async (req, res) => {
  const { data: user } = await axios.get('https://api.github.com/users/univdev');
  return res.json({
    repositories: user.public_repos,
    commits: 536,
    stars: 50,
  });
});

module.exports = router;