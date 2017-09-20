var mongoose = require("mongoose");


module.exports = mongoose.model('Email', {
	url: 'String',
	responsive: Boolean,
	client: 'String'
});