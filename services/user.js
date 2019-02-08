var Promise = require('bluebird')
userService = {}
const User = Promise.promisifyAll(require('../models/user.js'));
const async = require('async');



module.exports.create = async function(query){
	console.log(query);
	try{
		let user = new User(query)
		var data = await user.save()
		 //.then(function (data){
			data = JSON.parse(JSON.stringify(data));
	        return data;

		//})
	}
	catch(err){
        console.log("error",err);
    }
};

