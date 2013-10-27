var fs = require("fs");

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