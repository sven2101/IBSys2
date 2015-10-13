var http = require('http'),
    express = require('express'),
	app = express();

app.use(express.static('build'));

app.get('/', function (req, res) {
	res.sendFile('index.html');
});

app.get('/download', function (req, res) {
	res.download('gulpfile.js');
});

var server = app.listen(3789, function () {
	var port = server.address().port;
	console.log('Server listening on port ' + port);
});