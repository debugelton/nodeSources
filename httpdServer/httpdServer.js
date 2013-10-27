var http = require('http'),
	url = require('url'),
	extend = require('extend');

var getParams = require('../getParams/getParams.js'),
	router = require ('../router/router.js'),
	Cache = require('../Cache/cache.js');

var docRoot = "",
	settings = {},
	def = {
		"documentRoot": "",
		"port": 80,
		"cache": {
			"Path": "./tmp"
		}
	};


function start (config) {

	extend(true, settings, def, config);
	docRoot = settings.documentRoot;
	cache = new Cache(settings);
	
//	console.log(cache);
	
	function onRequest (request, response) {
		
		var urlPath = url.parse(request.url).pathname;
		var contentType = request.headers.accept.split(",")[0];
		
		router.route(docRoot + urlPath, function (data) {
			
			if (data) {
				response.writeHead(200, {'Content-Type': contentType});
				content = data;
				response.write(content);
				cache.set(urlPath, content);
				response.end();
			}
			
			console.log(cache.stack);
			
		});
		
	
	}
	
	http.createServer(onRequest).listen(settings.port);
	console.log('httpdServer has started.');
};

exports.start = start;
