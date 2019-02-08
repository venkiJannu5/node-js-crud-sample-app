const express = require('express');
const router = express.Router();
var passport = require('passport');

const userController = require('../controllers/user.js');

router.post('/adduser',userController.createUser,function(req,res){
	
});

router.get('/home',function(req,res){
	//console.log(userController.createUser);
	res.send("hello....");

});
router.post('/signup',passport.authenticate('local.signup',{failureRedirect:'/signup',
successRedirect:'/home'}),function(req,res) {
    res.redirect('/home');
  });

module.exports = router;