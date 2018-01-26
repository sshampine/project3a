const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see thhhh secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

// Binance API Routes
// A GET route for scraping the echojs website
router.get("/scrapeAllCryptoPairs", function(req, res) {

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
router.get("/pairs", function(req, res) {
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

module.exports = router;
