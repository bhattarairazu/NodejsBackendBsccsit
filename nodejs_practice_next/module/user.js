const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating info model

const userSchema = new Schema({
_id: Schema.Types.ObjectId,
email: {
	type:String,
	required:true,
	unique:true,
	match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

},
password:{type: String,required:true}	
});

const userSchemas = mongoose.model('User',userSchema);
module.exports = userSchemas;