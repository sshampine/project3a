const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3003;
const https = require('https');

// Require all models
var db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/p3a",
  {
    useMongoClient: true
  }
);

// Routes

// A GET route for scraping the echojs website
app.get("/scrapeAllCryptoPairs", function(req, res) {

	var options = {
		"method": "GET",
		"hostname": "api.binance.com",
		"path": "/api/v1/ticker/allPrices"
	};

	var pairsArray = [];

	const request = https.request(options, function (response) {
		console.log('statusCode:', response.statusCode);
		console.log('headers:', response.headers);

		response.on('data', function (d) {
			pairsArray = JSON.parse(d);
		});

		response.on('end', function() {
			for (var i = 0; i < pairsArray.length; i++) {
				var pair = {};
				pair.symbol = pairsArray[i].symbol;
				pair.price = pairsArray[i].price;

				// Create a new Pair using the `pair` object built from scraping
				db.Pair
				.findOneAndUpdate({"symbol" : pair.symbol} , {"price" : pair.price}, {upsert: true})
				.then(function(dbPair) {
				  // If we were able to successfully scrape and save an Pair, send a message to the client
				  res.send("Pair Complete");
				})
				.catch(function(err) {
				});
			}
		})
	});
	request.end();
});

// Route for getting all Pairs from the db
app.get("/pairs", function(req, res) {
  // Grab every document in the Pairs collection
  db.Pair
    .find({})
    .then(function(dbPair) {
      // If we were able to successfully find Pairs, send them back to the client
      res.json(dbPair);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
