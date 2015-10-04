var http = require('http'),
    express = require('express'),
	app = express();
	
	
var server = app.listen(8080, function () {
	var port = server.address().port;
	console.log('Server listening on port ' + port);
});