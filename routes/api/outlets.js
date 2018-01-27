var db = require("../../models");
const router = require("express").Router();
const request = require('request');


router.post("/saveoutlets", function(req, res) {
    console.log("here is req.body", req.body);
    db.Outlets.create(req.body, function(thing){
        console.log("thing", thing);
    })
    res.json({name: "test"});
})

router.get("/getoutlets", function(req, res) {
    console.log("here is req.body", req.body);
    var outletNameString = "";

    db.Outlets.find({}).then(function(outletWeFound){
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
            res.json(body);
        });
    })
})

module.exports = router;