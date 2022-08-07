var express = require('express');
var router = express.Router();
const flightController = require('../controllers/flights')
/* GET users listing. */
// /flights/new
router.get('/', flightController.index);
router.get('/new', flightController.new);
// /movies
router.get('/:id', flightController.show);
router.post('/', flightController.create);

module.exports = router;