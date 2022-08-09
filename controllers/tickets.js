const flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    create,
};

function create(req, res) {
    console.log(req.params.id, "<- params ticket id");
    console.log(req.body, "the contents of the form");
    req.body.flight=req.params.id
    Ticket.create(req.body, function(){
        res.redirect('/flights');
    })
    //flight.findById(req.params.id, function (err, ticketDocument) {
       //console.log(ticketDocument, "ticket document");
       //ticketDocument.tickets.push(req.body);

    //    ticketDocument.save(function(err) {
    //     res.redirect(`/tickets/${req.params.id}`);
    //    });

//     })
 }