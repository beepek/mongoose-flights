const Flight = require('../models/flight')

// import our Model object which can perform crud operations
// on the movies collection in our mongodb database

module.exports = {
	new: newFlight, 
	create,
	index,
	delete: deleteFlight
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
	// this should be the contents of the form
	// that was just submitted from the browser
	console.log(req.body, " <- req.body")
	Flight.create(req.body)
	// everytime we change data 
	res.redirect('/flights'); // < telling the client 
	// make a get request to /todos now
}
function show(req, res){
	res.render('flights/show.ejs', {
		flights: Flight.getOne(req.params.id)
	})
}

function deleteFlight(req, res){
	Flight.deleteOne(req.params.id)
	res.redirect('/skills');
}