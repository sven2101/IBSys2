var fs = require('fs');
var mongoose = require('mongoose');
var session = require('express-session');
var sess;

module.exports = function (app) {
	app.use(session({secret: 'ssshhhhh'}));

	app.get('/download', function (req, res) {
		var dateiName = req.query.dateiName;
		res.download('files/'+dateiName);
	});

	app.post('/file', function (req, res) {
		var timestamp = new Date().getTime();
		var dateiName = 'input' + timestamp + '.txt';
		fs.writeFile('files/' + dateiName, req.body.content, function (err) {
			if (err) { console.log(err); }
			else {
				console.log(dateiName + ' successfully created.');
			}
		});
		res.send({ dateiName: dateiName });

	});

	require("./MongooseModel/Benutzer");

	//Test funtktion für produktivsystem bitte löschen

	app.get('/benutzer/:loginName', function (req, res) {
		if(req.session.name && mongoose.connection.readyState == 1) {
			var login = req.params.loginName;
			mongoose.model('benutzer').findOne({name: login}, function (err, doc) {
				res.send(doc);
			})
		}else{
			console.log('No Databaseconnection or Rights!');
		}
	});

	app.get('/session', function (req, res) {
		res.send({ session: req.session });
	});
	app.post('/addBenutzer', function (req, res) {
		if(mongoose.connection.readyState == 1 && !req.session.name) {
			var benutzerName = req.body.benutzername;
			var passwort = req.body.passwort;
			var Benutzer = mongoose.model('benutzer');
			var benutzer = new Benutzer({
				name: benutzerName,
				password: passwort
			});
			benutzer.save(function (err) {
				if (err) {
					res.send({erg: '500'});
				}
				else if (benutzerName.length < 3 && passwort < 5) {
					res.send({erg: '400'});
				} else {
					res.send({erg: '200'});
					console.log('benutzer gespeichert mit ' + benutzerName + ' und passwort ' + passwort)
				}
			})
		}else{
				res.send({erg: '502'});
				console.log('No Database Connection or you have already an account!')
			}
	});


	app.post('/checkLogin', function (req, res){
		if(mongoose.connection.readyState == 1) {
			var benutzerName = req.body.benutzername;
			var passwort = req.body.passwort;

			mongoose.model('benutzer').findOne({name: benutzerName}, function (err, benutzer) {
					if (benutzer && passwort) {
						if (benutzer.password == passwort) {
							sess = req.session;
							sess.name = benutzer.name;
							res.send({erg: '202'});
							console.log('Login Correct!')
						} else {
							res.send({erg: '400'});
							console.log('Login inCorrect!')
						}
					} else {
						res.send({erg: '400'});
						console.log('Login inCorrect!')
					}
				}
			)
		} else{
			res.send({erg: '502'});
			console.log('No Database Connection!')
		}
	});

	app.get('/logout', function (req, res){
		if(mongoose.connection.readyState == 1) {
		req.session.destroy(function(err) {
			if (err) console.log(err);
			else {
				res.send({erg: '200'});
				console.log("logout success");
			}
		});
		} else{
			res.send({erg: '502'});
			console.log('No Database Connection!')
		}
	});

}