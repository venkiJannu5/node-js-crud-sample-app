const empSalary = require("../models/empSalary");
const employee = require("../models/employee");

empController={}

empController.getEmployess = async (req,res)=>{
	try{
		var list = await employee.find();
			console.log(list);
			return res.status(200).json(
				list
			)
	}
	catch(err){
		console.log(" catch error",err);
	}
};

empController.getEmployesalary = async (req,res)=>{
	try{
		var list = await empSalary.find().populate('employee');
			console.log(list);
			return res.status(200).json(
				list
			)
	}
	catch(err){
		console.log(" catch error",err);
	}
};
module.exports = empController;