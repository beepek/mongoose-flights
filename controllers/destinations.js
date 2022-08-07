const Flight = require("../models/flight");

module.exports = {
    create,
};

function create(req, res) {
    console.log(req.params.id, "<- params flight id");
    console.log(req.body, "the contents of the form");

    Flight.findById(req.params.id, function (err, flightDocument) {
       console.log(flightDocument, "flight document");
       flightDocument.destinations.push(req.body);

       flightDocument.save(function(err) {
        res.redirect(`/flights/${req.params.id}`);
       });

    })
}