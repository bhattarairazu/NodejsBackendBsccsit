const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../module/user');
router.post('/singup',function(req,res,next){
	User.find({ email: req.body.email }).exec()
	.then(function(user){
		if(user.length >=1){
			return res.status(409).json({
				message:'Mail Already Exists'
			});
		}else{
		bcrypt.hash(req.body.password,10,function(err,hash){
		if(err){
			return res.status(500).json({
				error: err
			});
		}else{
			const user = new User({
			_id: new mongoose.Types.ObjectId(),
			email: req.body.email,
			password:hash
   			});
   			user.save()
   			.then(function(result){
   				console.log(result);
   				res.status(201).json({
   					message:'user created'
   				});
   			}).catch(next);
		}
	});
		}
	});
	 

});

router.delete('/:userId',function(req,res,next){
	User.findByIdAndRemove({_id: req.params.userId })
	.exec()
	.then(function(result){
		res.status(200).json({
			message:'User Deleted'
		});
	}).catch(next);
});

module.exports = router;