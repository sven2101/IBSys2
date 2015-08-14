var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname+'/'))
app.get('/', function(req, res) {
  console.log('Datei wurde ausgeliefert');
  res.sendfile(__dirname + 'index.html');
});

app.listen(3000);
console.log("Server läuft");




module.exports = app;
