var webshot = require("webshot");



//Webshot Stuff
var options = {
	windowSize: { width: 1024 , height: 768 },
	shotSize: {width: 'window', height: 'window'}
}
module.exports.screenshot = function(a, b) {
	var filePath = './public/images/screenshots/'+b
	webshot(a, filePath, options, function(err) {
 		console.log("Saved!")
	});

}

//GridFS Stuff