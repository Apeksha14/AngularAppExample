/* Scrape and Display (18.3.8)
 * (If you can do this, you should be set for your hw)
 * ================================================== */

// STUDENTS:
// Please complete the routes with TODOs inside.
// Your specific instructions lie there

// Good luck!

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Requiring our Note and Article models

// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));


app.get("/", function(req, res) {
res.sendFile(__dirname + "/public/index.html");
});
// Make public a static dir

// Database configuration with mongoose

   //var uristring = process.env.MONGOLAB_URI ||  process.env.MONGODB_URI || process.env.MONGOHQ_URL || 'mongodb://heroku_z49hw4k5:jg8j247rul3ho8c8gb5qndited@ds111791.mlab.com:11791/heroku_z49hw4k5';

    //var uristring = 'mongodb://heroku_z49hw4k5:jg8j247rul3ho8c8gb5qndited@ds111791.mlab.com:11791/heroku_z49hw4k5'
    //var uristring = 'mongodb://localhost/timesnowdb';
    var PORT = process.env.PORT || 3000;



// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
