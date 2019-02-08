var user = require('./user');
var post = require('./post');

module.exports = function (app,passport){
	app.use('/user', user);
	app.use('/post', post);

}