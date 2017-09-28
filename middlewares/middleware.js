var webshot = require("webshot");
var crypto = require('crypto');


//Webshot Stuff
var options = {
	windowSize: { width: 1024 , height: 768 },
	shotSize: {width: 'window', height: 'window'}
}
module.exports.screenshot = function(data) {
	var file_id = crypto.randomBytes(5).toString('hex');
	var file_name =  data.client.toString() + file_id +'.png';

	webshot(data.url, file_name, options, function(err) {
 		console.log("Saved!")
	});

}

//GridFS Stuff