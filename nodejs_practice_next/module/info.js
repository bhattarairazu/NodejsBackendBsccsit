const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating info model

const InformationSchema = new Schema({
	name:String,
	address:String,
	productImage: { type: String, required: true }
});

const Information = mongoose.model('info',InformationSchema);
module.exports = Information;