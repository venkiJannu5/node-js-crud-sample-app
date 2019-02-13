const express = require('express');
const router  =  express.Router();


const emp = require('../controllers/employee.js');


router.get('/allemps',emp.getEmployess, async function(req,res){
	
});
router.get('/allempsal',emp.getEmployesalary, async function(req,res){
	
});


module.exports = router;