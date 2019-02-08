var Promise = require('bluebird');
userController ={};
const userService = Promise.promisifyAll(require('../services/user.js'));
const async = require('async');

userController.createUser = async function(req,res){
    if (!req.body.name || !req.body.mobile) {
        res.status(500).json({
            message: "missing Arguements",
        });
    }
    else{
		const users ={
		    name  : req.body.name,
			mobile:req.body.mobile
			}
		try{		
			var data = await userService.create(users)
				//.then(function(data){
			  	data = JSON.parse(JSON.stringify(data));
			  		res.status(200).json({
                                message: "User Register",
                                user: data
                            });
				//	})
		}
		catch(err){
		    console.log(" catch error",err);
		}
    }
}

module.exports = userController;