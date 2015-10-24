
module.exports = function (app) {
	app.get('/download', function (req, res) {
		res.download('gulpfile.js');
	});
	
	app.post('/file',function(req,res){
		res.send('Request erfolreich.');
		console.log(req.body.content);
	});
}