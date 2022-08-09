const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
// import our Model object which can perform crud operations
// on the movies collection in our mongodb database

module.exports = {
	new: newFlight, 
	create,
	index,
	//delete: deleteTicket,
	show,
	
}
function show(req, res) {
	Flight.findById(req.params.id, function(err, flightDocument){
		Ticket.find({flight:req.params.id}, function(err, ticketDocuments){
		console.log(flightDocument, "flight page")
		res.render('flights/show', { title: 'Flight Detail', flight: flightDocument, tickets: ticketDocuments});
		})
	});
}

function index(req, res){
	// List out the flights
	Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
		//Ticket.find({flightDocumentCreatedInTheDatabase}) " <- all the flights");
		if(err){
			res.send('You have an error trying to find the flights, check the terminal')
		}

		// response should be inside the callback, 
		// because this is after we got a response from the db that we 
		// found all the movies
		res.render('flights/index.ejs', {
			flights: allOfTheFlightsInTheDatabase
		});// end of render
	});

	
}

function newFlight(req, res){
	res.render('flights/new.ejs')
}

function create(req, res){
	if (req.body.airport == '') {
		req.body.airport = 'DEN'
	}
	// this should be the contents of the form
	// that was just submitted from the browser
	console.log(req.body, " <- req.body")
	Flight.create(req.body, function(err, flightDocumentCreatedInTheDatabase){
	if(err){
		console.log(err, 'err in the create flight controller')
		return res.render('flights/new.ejs')
	}	
	console.log(flightDocumentCreatedInTheDatabase, 'flight created in db')
	// everytime we change data 
	res.redirect('flights'); // < telling the client 
	// make a get request to /todos now
	})
}


