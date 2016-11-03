// NPM package dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// A dependency on a Mongoose model for articles.
var Article = require('./models/article.js')

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));


// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/nytsearch');
// mongoose.connect('mongodb://heroku_6ptmkdrb:1dpc4os5sodb69ch608ja34b5t@ds137197.mlab.com:37197/heroku_6ptmkdrb');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// Fetch all articles user has saved to database
app.get('/api/saved', function(req, res){
	Article.find({}).exec(function(err, doc){
		if (err){
			console.log(err);
		}
		else {
			res.send(doc);
		}
	})
});

app.post('/api/saved', function(req, res){
	console.log(req.body);
});

app.delete('/api/saved', function(req, res){

});


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
