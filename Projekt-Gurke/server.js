var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname+'/'))
app.get('/', function(req, res) {
  console.log('Datei wurde ausgeliefert');
  res.sendfile(__dirname + 'index.html');
});

app.listen(3000);
console.log("Server läuft");




module.exports = app;
