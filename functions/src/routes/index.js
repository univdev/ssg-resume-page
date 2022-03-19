const express = require('express');
const router = express.Router();
const careers = require('./careers');
const introductions = require('./introductions');

router.use('/careers', careers);
router.use('/introductions', introductions);

module.exports = router;
