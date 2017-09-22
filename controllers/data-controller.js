//Set Models
var Email = require('../models/email.js');


//Set MiddleWare
var middleware = require('../middlewares/middleware.js');

//COntrollers
module.exports.getData = function(req, res) {
	Email.find({}, function(err, people) {
		if(err){
			return res.status(500).send("Couldn't rum the query");
		}
		res.render('edit');
	})
}

module.exports.postData = function(req, res) {
	//middleware.screenshot(req.body.url);
	new Email({
		url: req.body.url,
		responsive: req.body.responsive,
		client: req.body.client
	}).save(function(err,doc){
		if(err) res.json(err);
		else res.send('saved');
	});
}