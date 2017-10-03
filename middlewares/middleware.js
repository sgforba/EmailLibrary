var webshot = require("webshot");
var fs = require('fs');
var storage = require('@google-cloud/storage');
var Jimp = require("jimp");

//Google Cloud
var gcs = storage({
  projectId: 'email-library',
  keyFilename: 'keyfile.json'
});

var bucket = gcs.bucket('test-bucket-1989');


//Webshot Stuff
module.exports.screenshot = function(a, b) {

	var options = {
		windowSize: { width: 600 , height: 600 },
		shotSize: {width: 'window', height: 'window'},
		onResourceReceived: function(response) {
	  		console.log("SCREENSHOT CONMPLETE");
		}

	}

	var filename = './public/images/screenshots/'+b;

	webshot(a, filename, options, function(err) {
 		if (err) {
 			console.log(ere)
 		}  else {
			Jimp.read(filename, function (err, data) {
			    if (err) throw err;
			    data.resize(200, 200)  	// resize                
			         .write(filename); // save 
			});
 		}
	});


}


