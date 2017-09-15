var Email = require('../models/email.js');

module.exports.getData = function(req, res) {
	Email.find({}, function(err, people) {
		if(err){
			return res.status(500).send("Couldn't rum the query");
		}
		res.render('form');
	})
}


module.exports.postData = function(req, res) {
	var email = new Email(req.email);
	email.save(function(err) {
		if(err) {
			return res.status(500).send("couldn't save user");
		}

		res.render('home');
	})
}