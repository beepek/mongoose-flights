const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ticketSchema = new mongoose.Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: Number,
    flight: {type: Schema.Types.ObjectId, ref:"Flight"}
});

// Create our model, which will create the collection, 
// and return to us and object that can perform CRUD
// operations on that collection (typically you'll use the model in controller files)
module.exports = mongoose.model('Ticket', ticketSchema);