var webshot = require("webshot");
var fs = require('fs');
var storage = require('@google-cloud/storage');


//Google Cloud
var gcs = storage({
  projectId: 'email-library',
  keyFilename: 'keyfile.json'
});

var bucket = gcs.bucket('test-bucket-1989');


//Webshot Stuff
var options = {
	windowSize: { width: 1024 , height: 768 },
	shotSize: {width: 'window', height: 'window'},
	onResourceReceived: function(response) {
  		console.log("TEST");
	}

}
module.exports.screenshot = function(a, b) {

	var options = {
		windowSize: { width: 500 , height: 500 },
		shotSize: {width: 'window', height: 'window'},
		onResourceReceived: function(response) {
	  		console.log("SCREENSHOT CONMPLETE");
		}

	}

	var filename = './public/images/screenshots/'+b;



	webshot(a, filename, options, function(err) {
 		if (err) {
 			console.log(er)
 		} 
	});
}


