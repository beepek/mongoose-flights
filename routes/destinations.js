const express = require('express');
const router = express.Router();
const destinationsCrtl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCrtl.create)

module.exports = router;
