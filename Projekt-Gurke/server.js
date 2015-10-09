var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname+'/'));

app.get('/', function(req, res) {
  console.log('Datei wurde ausgeliefert');
  res.sendfile(__dirname + 'index.html');
});

var port=3000;
app.listen(port);
console.log("Server läuft auf Port: "+port);

module.exports = app;
