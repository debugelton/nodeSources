var fW = require("./fileWatcher.js");
var config = require("./settings-default");


fW.start(config, function () {
	console.log('love me tender');
	
});
