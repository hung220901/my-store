const express = require('express');
const router = express.Router();

const aboutControllers = require('../app/controllers/AboutControllers')

router.use('/', aboutControllers.index )

module.exports = router;