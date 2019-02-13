
var emp = require('./emp');

module.exports = function (app){
	
	app.use('/emp',emp);

}