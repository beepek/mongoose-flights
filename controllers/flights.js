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
	// log out what the function needs
	console.log(req.body)
	// take teh contents of the form (req.body), and add it to our database
	//req.body.nowShowing = !!req.body.nowShowing; // forces the value to a boolean
	// remove whitespace next to commas, wierd syntax is a regular expression (regex)
	//req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
	// split if it's not an empty string
	//if (req.body.cast) req.body.cast = req.body.cast.split(',');  // <- returns an array 
							// the callback function occurs after the database sends a respone
							// back to our express server, and its send either an error object, 
							// or the document you created or were looking for as teh second argument
	Flight.create(req.body, function(err, flightDocumentCreatedInTheDatabase){
		if(err){
			console.log(err, ' <- err in the flight create controller')
			return res.render('flights/new.ejs')
		}

		console.log(flightDocumentCreatedInTheDatabase, ' <- flight created in db')
		//normally redirect, but for testing 
		// the response is always inside of the callback of the Movie model crud operation
		// because we want to confirm with the database our action before we respond to the client
		// aka the browser
		res.redirect('/flights')
	})
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