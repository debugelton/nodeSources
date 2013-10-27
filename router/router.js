var fs = require("fs");

var routeUrl;

var reader = function (exists, callback) {
	
	if (!exists) {
		console.log("file not exists");
		return;
	}
	
	fs.readFile(routeUrl, function (err, data) {
		
		if (err) throw err;
		
		content = data;

		if (typeof callback === 'function') {
			
			callback(content);
			
		}
	});
};

function route (url, callback) {
	
	console.log('About to route a request for ' + url);
	
	routeUrl = url;
	
	fs.exists(routeUrl, function (exists) { reader(exists, callback); });
	
}



exports.route = route;
