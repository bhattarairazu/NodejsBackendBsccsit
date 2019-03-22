const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating info model

const InformationSchemas = new Schema({
	name:String,
	address:String
});

const Informations = mongoose.model('infos',InformationSchemas);
module.exports = Informations;