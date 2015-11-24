var http = require('http'),
    express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	databaseName = 'mydb',
	app = express();

app.use(bodyParser.json());
app.use(express.static('build'));
app.use(session({secret: 'ssshhhhh'}));

app.get('/', function (req, res) {
		res.sendFile('index.html');
});

mongoose.connect('mongodb://localhost/' +databaseName);
var db = mongoose.connection;
db.on('error', startServer);
db.once('open', startServer);

//Start up the server
function startServer(){
var server = app.listen(3789, function () {
	var port = server.address().port;
	console.log('Server listening on port ' + port);
})
}

require('./server/server.routes.file')(app);


