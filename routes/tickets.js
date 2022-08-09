const express = require('express');
const router = express.Router();
const ticketsCrtl = require('../controllers/tickets');

router.post('/flights/:id/tickets/new', ticketsCrtl.create);
//router.get('/tickets/:id/', ticketsCtrl.show);
    //res.redirect('/flights');


module.exports = router;