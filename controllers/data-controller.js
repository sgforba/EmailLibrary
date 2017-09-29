var crypto = require('crypto');

//Set Models
var Email = require('../models/email.js');


//Set MiddleWare
var middleware = require('../middlewares/middleware.js');

//COntrollers
module.exports.getIndex = function(req, res) {
	Email.find({}, function(err, docs) {
		if(err){
			return res.status(500).send("Couldn't rum the query");
		} else {
			console.log(docs);
			res.render('index', {email:docs});

		}
		
	})
}

module.exports.getEdit = function(req, res) {
	res.render('edit');
}

module.exports.postData = function(req, res) {
	var file_id = crypto.randomBytes(5).toString('hex');
	var file_name = req.body.client.toString() + file_id +'.png';
	var file_path = '/public/images/screenshots/' + file_name;
	middleware.screenshot(req.body.url, file_name);

	new Email({
		url: req.body.url,
		responsive: req.body.responsive,
		client: req.body.client,
		image_link: file_path
	}).save(function(err,doc){
		if(err) {
			res.json(err);
		} else { 
			res.redirect('/');
		}	
	});
}