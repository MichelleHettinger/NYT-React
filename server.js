// TO BE ADDED
// ===========
// NPM package dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// TO BE ADDED
// ===========
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

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/nytsearch');
// mongoose.connect('mongodb://admin:codingrocks@ds023674.mlab.com:23674/heroku_5ql1blnl');
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

app.get('/api/saved', function(req, res){

});

app.post('/api/saved', function(req, res){

});

app.delete('/api/saved', function(req, res){

});


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
