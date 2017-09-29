var mongoose = require("mongoose");


module.exports = mongoose.model('Email', {
	url: 'String',
	responsive: 'String',
	client: 'String',
	image_link: 'String'
});