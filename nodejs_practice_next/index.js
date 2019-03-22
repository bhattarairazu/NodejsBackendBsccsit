const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/api');
const userRoutes = require('./routes/user_routes');
const mongoose = require('mongoose');


//initializing express server
const app = express();
//initializing mongoose
mongoose.connect('mongodb://localhost/Infodb');
mongoose.Promise = global.Promise;
app.use(express.static(__dirname + '/uploads'));
//body parsing using
app.use(bodyparser.json());

//using api
app.use('/api',routes);
app.use('/user',userRoutes);
//handling error
app.use(function(err,req,res,next){
	res.send({error:err.message});
});

//listing to localhost port

app.listen(process.env.port || 4000,function(){
	console.log("Now listening to port 4000");
});

