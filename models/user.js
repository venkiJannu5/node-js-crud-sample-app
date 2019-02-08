const mongoose = require('mongoose');
var bcyrpt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const users = new Schema({
	'name':String,
	'password':String,
	'mobile':Number
});
users.methods.encryptPassword = (password)=>{
	return bcyrpt.hashSync(password,bcyrpt.genSaltSync(10),null);
}
//console.log(users);
module.exports = mongoose.model("users",users);