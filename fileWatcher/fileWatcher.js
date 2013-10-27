var fs = require('fs');

var default_set = {
	"": ""
};


function start (config, callback) {
	
	console.log(config);
	
	fs.watch (config.filePath, function (event, filename) {
		console.log(event);
		console.log(filename);
		if (typeof callback === 'function') {
			callback.apply();
		}
	});
	
	
}




exports.start = start;