module.exports = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit.');
		next();				
	},
	logger: function (req, res, next) {
		var date = new Date().toLocaleDateString();
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();		
	}
};