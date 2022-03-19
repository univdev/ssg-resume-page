const express = require('express');
const router = express.Router();
const careers = require('./careers');
const introductions = require('./introductions');
const github = require('./github');

router.use('/careers', careers);
router.use('/introductions', introductions);
router.use('/github', github);

module.exports = router;
