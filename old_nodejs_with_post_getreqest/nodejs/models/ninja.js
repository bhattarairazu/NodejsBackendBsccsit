const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//creat ninja Schema and Model

const NinjaSchema = new Schema({
	name:String,
	rank:String,
	/*{
		type:String,
		//required:[true,'Name Field is Required']
	},
	rank:{
		type:String
	},*/
	available:{
		type:Boolean,
		default:false
	}

});

const Ninja = mongoose.model('ninja',NinjaSchema);
module.exports = Ninja;