const express = require('express');

const router = express.Router();
const Ninja = require('../models/ninja');

//for get request
router.get('/ninjas',function(req,res,next){
	//res.send({type:'GET'});
	Ninja.find({}).then(function(ninjas){
		res.send(ninjas);

	}).catch(next);


});
//for post request
router.post('/ninjas',function(req,res,next){
	//console.log(req.body);
//	var ninja = new Ninja(req.body);
	//ninja.save();
	Ninja.create(req.body).then(function(ninjas){
	res.send(ninjas);	
	
	}).catch(next);
	
//req.on('error', (e) => {
    //console.error(e);
	//});

//req.end();

});
//for put request
router.put('/ninjas/:id',function(req,res,next){
	res.send({type:'PUT'});


});//for delete request
router.delete('/ninjas/:id',function(req,res,next){
	res.send({type:'delete'});


});

module.exports = router;