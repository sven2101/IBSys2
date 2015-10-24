var http = require('http'),
    express = require('express'),
	bodyParser = require('body-parser'),
	app = express();
	
app.use(bodyParser.json());

app.use(express.static('build'));

app.get('/', function (req, res) {
	res.sendFile('index.html');
});

require('./server/server.routes.file')(app);

var server = app.listen(3789, function () {
	var port = server.address().port;
	console.log('Server listening on port ' + port);
});