const express = require('express');
const router = new express.Router();
const Pair = require('mongoose').model('Pair');
const Outlet = require('mongoose').model('Outlet');
const request = require('request');




router.get('/dashboard', (req, res) => {

    res.status(200).json({
	    message: "You're authorized to see thhhh secret message.",
	    // user values passed through from auth middleware
	    user: req.user,
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
router.get("/pairs", (req, res) => {

  	// Grab every document in the Pairs collection
  	Pair
    .find({})
    .then(function(dbPair) {
      // If we were able to successfully find Pairs, send them back to the client
      res.json({
      	pairs: dbPair
      });
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json({
      	error: err
      })
    });
});

// Favorite outlet routes

router.post("/saveoutlets", function(req, res) {
    console.log("here is req.body", req.body);
    Outlets.create(req.body, function(thing){
        console.log("thing", thing);
    })
    res.json({name: "test"});
})

router.get("/getoutlets", function(req, res) {
    console.log("here is req.body", req.body);
    var outletNameString = "";

    Outlets.find({}).then(function(outletWeFound){
        for (var i =0; i < outletWeFound.length; i++){
            var commaString = outletWeFound[i].name + ","
            outletNameString += commaString;
        }
        var cleanOutletNameString = outletNameString.substring(0, outletNameString.length - 1);
        console.log(cleanOutletNameString, "we found one");
        // res.json(outletWeFound);

        request('https://newsapi.org/v2/everything?q=cryptocurrency&domains=' + cleanOutletNameString +'&' +
        'apiKey=b20d4f18b29a4098b58c9c3a9a21cbfd', function(err, res, body) {  
            console.log(body);
            // res.json(body);
        });
    })
})


module.exports = router;
