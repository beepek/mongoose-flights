const Flight = require('../models/flight')

// import our Model object which can perform crud operations
// on the movies collection in our mongodb database

module.exports = {
	new: newFlight, 
	create,
	index,
	delete: deleteFlight,
	show
}
function show(req, res) {
	Flight.findById(req.params.id, function(err, flightDocument){
		console.log(flightDocument, "flight page")
		res.render('flights/show', { title: 'Flight Detail', flight: flightDocument});
	});
}

function index(req, res){
	// List out the flights
	Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
		console.log(allOfTheFlightsInTheDatabase, " <- all the flights");
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
function show(req, res){
	Flight.findById(req.params.id, function(err, flightDocument) {
		console.log(flightDocument, "show page")
		res.render('flights/show', { title: 'flight detail', flight: flightDocument});
	});
}

function deleteFlight(req, res){
	Flight.deleteOne(req.params.id)
	res.redirect('/flights');
}