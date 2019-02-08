var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Users = require('../models/user');

passport.serializeUser((user,done)=>{
	done(null,user.id);
})
passport.deserializeUser((id, done) =>{
  Users.findById(id,(err, user) =>{
    done(err, user);
  });
});

passport.use('local.signup',new LocalStrategy({
       			usernameField:'name',
       			passwordField :'password',
       			passReqToCallback:true
			},(req,name,password,done)=>{
		Users.findOne({'name':name},(err,user)=>{
				if(err){
					console.log("name checking",err);
					return done(err);
				}
				if(user){
		 			return done(null,false,{msg:"alreday register"});
				}
				var newUser = new Users();
				newUser.name     = req.body.name;
				newUser.password = newUser.encryptPassword(req.body.password);
				//console.log(newUser);
				newUser.save((err)=>{
					if(err){
						return done(err);
					}
					console.log(newUser);
					return done(null,newUser);
					
				});
		});
}));