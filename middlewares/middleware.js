var webshot = require("webshot")
var options = {
	windowSize: { width: 1024 , height: 768 },
	shotSize: {width: 'window', height: 'window'}
}
module.exports.screenshot = function(data) {
	webshot(data, 'image.png');
}