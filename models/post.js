const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
var posts = new Schema({
	'post':String,
	'voteCount':{
		type:Number,
		default:0
	},
	'createdDate':{
		type: Date, 
		default: Date.now
	}
});

module.exports = mongoose.model("posts",posts)