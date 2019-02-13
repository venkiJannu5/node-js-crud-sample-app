var express = require('express');
var cors = require('cors')
var app = express();
var Promise = require('bluebird');
var cookieParser = require('cookie-parser');
var session = require('express-session')
const MongoStore = require('connect-mongo')(session);
var mongoose = Promise.promisifyAll(require('mongoose'));
mongoose.Promise = Promise;
//var mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://127.0.0.1/mapi',{ useNewUrlParser: true },(err)=>{
	if(err){
		console.log(err);
	}
	else
		console.log("db connnected");
});
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: false
    }));
app.use(session({
  secret:'venkat',
  resave:false,
  saveUninitialized:false,
  store: new MongoStore({mongooseConnection:mongoose.connection})
}));


global.mongoose = mongoose;
global.express = express;
const router = require('./routes/index.js')(app);


app.listen(3000,(err)=>{
	if(err){
		console.log(err);
	}
	else
		console.log("connected");
})