const express = require('express');
const router = express.Router();
const careers = require('./careers');

router.use('/careers', careers);

module.exports = router;
