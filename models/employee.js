const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employees = new Schema({
	'firstName':String,
	'lastName':String,
	'updatedAt':{type: Date, default: Date.now},
	'createdAt':{type: Date, default: Date.now}

});


module.exports = mongoose.model('employees',employees)