var fs = require('fs');

module.exports = function (app) {
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
}