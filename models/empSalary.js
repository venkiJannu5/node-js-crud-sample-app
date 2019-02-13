const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var empSalary = new Schema({
	'salary':Number,
	'employee':{
		type: Schema.Types.ObjectId,
		ref:'employees'
	},
	'updatedAt':{type: Date, default: Date.now},
	'createdAt':{type: Date, default: Date.now}
});

module.exports = mongoose.model('empSalary',empSalary);