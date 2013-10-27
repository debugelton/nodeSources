var exend = require('extend');

function Cache (config) {
	
	this.def = {
		"cache": {
			"Path": "./tmp"
		}
	};
	
	this.stack = [];
	
	this.settings = {};
	
	exend(true, this.settings, this.def, config);

};

Cache.prototype.set = function (key, val) {
	var _cache = {};
	_cache[key] = {
			"buffer": val,
			"Last-Modified": Date.now()
	};
	this.stack.push(_cache);
};

Cache.prototype.get = function (key) {
	return this.stack[key];
	
};

module.exports = Cache;