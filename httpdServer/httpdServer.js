var http = require('http');
var url = require('url');
var extend = require('extend');

var getParams = require('../getParams/getParams.js');
var router = require ('../router/router.js');

var docRoot = "";
var settings = {};
var def = {
		"documentRoot": "",
		"port": 80
};


function start (config) {

	extend(true, settings, def, config);
	docRoot = settings.documentRoot;
	
	function onRequest (request, response) {
		
		var urlPath = url.parse(request.url).pathname;
		var contentType = request.headers.accept.split(",")[0];
	console.log(request.headers.accept.split(","));
		

		router.route(docRoot + urlPath, function (data) {
			console.log("yeahh");
			if (data) {
			
				response.writeHead(200, {'Content-Type': contentType});
				content = data;
				response.write(content);
				response.end();
			}
			
		});
		
	
	}
	
	http.createServer(onRequest).listen(settings.port);
	console.log('httpdServer has started.');
}

exports.start = start;
