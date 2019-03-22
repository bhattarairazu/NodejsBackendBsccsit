const express  = require('express');
const router = express.Router();
const Information = require('../module/info');
const Subje = require('../module/sub');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

//REST api requests
//subupload
router.post('/sub_post',function(req,res,next){
	console.log(req.body);
	const ss = new Subje({
		name: 'rauzuu',
		address: 'sdfsdfsdf'
	});
	ss.save().then(function(result){
		res.send(result);
	}).catch(next);
});
router.get('/sub_get',function(req,res,next){
	Subje.find({}).then(function(result){
		res.send(result);
	});
});
router.get('/get_datas',function(req,res,next){
	console.log('Get request is hitting');
	Information.find({}).then(function(info){
	res.send(info);

	}).catch(next);
});

//post request 

router.post('/post_datas',upload.single('productImage'),function(req,res,next){
	console.log(req.file);
	console.log('Post Request is hitting');
	console.log(req.body);
	const information = new Information({
		name: req.body.name,
		address: req.body.address,
		productImage:req.file.path
	});
	information.save().then(result =>{
		res.status(400).json({
			message:"Successfully uploaded",
			upload_info:{
				name:result.name,
				address:result.address,
				productImage:"http://localhost:4000/api/"+result.path
			}
		}).catch(next);

	});
	
	/*Information.create(req.body).then(function(info){
	res.send(info);
	
	}).catch(next);*/

	//retrieving single notes
	router.get('/get_datas/:id',function(req,res,next){
		Information.findById(req.params.id).then(function(info){
			res.send(info);
		}).catch(next);
	});
	
	//delete requests
	router.delete('/get_datas/:id',function(req,res,next){
		console.log(req.params.id);
		Information.findByIdAndRemove({_id:req.params.id}).then(function(info){
			res.send(info);
		}).catch(next);
	});

	

});
module.exports = router;