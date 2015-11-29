var fs = require('fs');
var mongoose = require('mongoose');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var sess;

module.exports = function (app) {

	//register mongoose models
	require("./MongooseModel/Benutzer");
	require("./MongooseModel/Datei");


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

			mongoose.model('benutzer').findOne({name: benutzerName}, function (err, benutzer) {
				if(benutzer)
					res.send({erg: '409'});
				else
				{
					var hash = bcrypt.hashSync(passwort, bcrypt.genSaltSync(10));
					var benutzerModel = new Benutzer({
						name: benutzerName,
						password: hash
					});
					benutzerModel.save(function (err) {
						if (err) {
							res.send({erg: '500'});
						}
						else if (benutzerName.length < 3 && passwort < 5) {
							res.send({erg: '400'});
						} else {
							res.send({erg: '200'});
							console.log('benutzer gespeichert mit ' + benutzerName + ' und passwort ' + hash+'('+passwort+')')
						}
					})
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

						if (bcrypt.compareSync(passwort, benutzer.password)) {
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


	app.post('/addSimulationFile', function (req, res) {
		if(mongoose.connection.readyState == 1 && req.session.name) {
			var dateiInhalt = JSON.stringify(req.body.dateiInhalt);
			var dateiPeriode = req.body.periode;

			mongoose.model('benutzer').findOne({name: req.session.name}, function (err, benutzer) {
				if(!benutzer)
					res.send({erg: '404'});
				else
				{
					var objectId = benutzer._id;
					mongoose.model('datei').findOne({benutzerId: objectId,periode:dateiPeriode}, function (err, simulationFile) {
						var Datei = mongoose.model('datei');
						var dateiModel = new Datei({
							benutzerId: objectId,
							periode:dateiPeriode,
							datei: dateiInhalt
						});
						if(!simulationFile) {
							dateiModel.save(function (err) {
								if (err) {
									res.send({erg: '500'});
								} else {
									res.send({erg: '200'});
									console.log('Datei gespeichert für ' + objectId)
								}
							})
						}
						else{
							var query = {_id: simulationFile._id};
							Datei.update(query,{benutzerId: simulationFile.benutzerId,periode:simulationFile.periode,datei: dateiInhalt},function (err,numAffected) {
								console.log(numAffected);
								if (err) {
									res.send({erg: '500'});
								} else {
									res.send({erg: '300'});
									console.log('Datei Aktualisiert für ' + objectId)
								}
							})
						}
					})

				}
			})

		}else{
			res.send({erg: '502'});
			console.log('No Database Connection or you arent logged in')
		}
	});
	app.get('/getSimulationFiles', function (req, res) {
		if(req.session.name && mongoose.connection.readyState == 1) {

			mongoose.model('benutzer').findOne({name: req.session.name}, function (err, benutzer) {
				if(!benutzer)
					res.send({erg: '404'});
				else
				{
					var objectId = benutzer._id;
					mongoose.model('datei').find({benutzerId: objectId}, function (err, simulationFiles) {
						res.json({ simulationFile: simulationFiles });
					})

				}
			})
		}else{
			console.log('No Databaseconnection or Rights!');
		}
	});

	app.get('/getSimulationFile', function (req, res) {
		if(req.session.name && mongoose.connection.readyState == 1) {

			mongoose.model('benutzer').findOne({name: req.session.name}, function (err, benutzer) {
				if(!benutzer)
					res.send({erg: '404'});
				else
				{
					var objectId = benutzer._id;
					mongoose.model('datei').find({benutzerId: objectId,periode:req.body.periode}, function (err, simulationFile) {
						res.json({ simulationFile: simulationFile });
					})

				}
			})
		}else{
			console.log('No Databaseconnection or Rights!');
		}
	});


}