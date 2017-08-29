var methodOverride = require('method-override');
var LocalStrategy  = require('passport-local');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var passport       = require('passport');
var express        = require('express');
var app            = express();


mongoose.Promise = global.Promise;

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride("_method"))

app.use(require("express-session")({
	secret: "Farting dogs are awesome",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//HOME PAGE ROUTE
app.get('/', function(req, res, next){
	res.render("index", {title: "FDC"});
});


app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
	console.log("Farting Dog Express Server Is Up");
})