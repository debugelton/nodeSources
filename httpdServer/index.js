var server = require ('./httpdServer.js');
var router = require ('../router/router.js');
var setInputStream = require ('../inputStream/inputStream.js');

setInputStream.inputStream();
server.start(router.route);