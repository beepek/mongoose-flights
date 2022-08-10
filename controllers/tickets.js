const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    create,
    
    
};
function newTicket(req, res) {
Flight.findById(req.params.id, function(err, flight){
    res.render("tickets/new", {
        flight
    })
})
}
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
//  function deleteTicket(req, res){
// 	Ticket.deleteOne(req.params.id)
// 	res.redirect('/flights');
// }