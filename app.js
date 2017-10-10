var methodOverride = require('method-override');
var LocalStrategy  = require('passport-local');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var passport       = require('passport');
var express        = require('express');
var app            = express();

//Gets rid of mongoose promise console warning/error
mongoose.Promise = global.Promise;

//Models
var PhotoGallery = require("./models/photoGallery");
var Toys = require("./models/toys");
var User = require("./models/user");

var URL = process.env.DATABASEURL || 'mongodb://localhost/fartingDog';
mongoose.connect(URL, {useMongoClient: true}, (err)=>{
	if(err){
		console.log("Error Connecting to Database, error= " + err);
	} else {
		console.log('Mongoose connected to database');
	}
});


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
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUse
//HOME PAGE ROUTEr(User.deserializeUser());

app.get('/', function(req, res, next){
	res.render("index", {title: "FDC"});
});

app.get('/toys', function(req, res, next){
	res.render("index", {title: "Toys - FDC"})
})

app.get('/error', function(req, res, next){
	res.render("/error");
})

app.get('/admin/create', function(req, res, next){
	res.render("index");
});

app.post('/admin/create-new', function(req, res, next){

	let newToy = {name:req.body.name,
	 description: req.body.description,
	 price: req.body.price,
	 colors: [req.body.colors],
	 images: [req.body.images] };

	Toys.create(newToy, function(err, brand){
		if(err){
			console.log(err);
			res.redirect("/error");
		} else{
			res.redirect("/");
		}
	})
})

app.get('/get-toys', function(req, res, next){
	Toys.find({}, function(err, toy){
		if(err){
			console.log(err)
		} else{
			res.json({toy: toy})
		}
	})
})


app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
	console.log("Farting Dog Express Server Is Up");
})