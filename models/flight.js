const mongoose = require('mongoose')

// Creates the schema, which defines, 
// what the documents (objects) in a mongodb collection (movies) 
// will all look like
const airports = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'];
const destinationSchema = new mongoose.Schema({
	content: String,
	airport: { type: String, enum: airports },
	arrivals: Date,
	//default: 'DEN'//attempting the default destination

});






const flightSchema = new mongoose.Schema({
	airline: String, 
	airport: { type: String, default: "DEN"},
	flightNo: Number, 
	departs: Date,
	destinations: [destinationSchema]//one to many, many destinations (at least I think)
});

// Create our model, which will create the collection, 
// and return to us and object that can perform CRUD
// operations on that collection (typically you'll use the model in controller files)
module.exports = mongoose.model('Flight', flightSchema);