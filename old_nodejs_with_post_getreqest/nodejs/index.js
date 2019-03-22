const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');



// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;
//bodyparser
app.use(bodyParser.json());
//using the data of api.js file
//initializing routes 
app.use('/api',routes);

//error handling middleware 
app.use(function(err,req,res,next){
//console.log(err);
res.status(422).send({error:err.message});
});
// app.get('/api',function(req,res){
// 	console.log('GET requesat');
// 	//res.end();
// 	res.send({name:'Yoshi'})

// });

//listen for request

app.listen(process.env.port||4000,function(){

	console.log('listenting to port 4000');
});