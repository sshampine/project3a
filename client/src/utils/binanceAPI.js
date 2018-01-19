import axios from "axios";


export default {
  allPairs: function() {
  	var url = 'https://api.binance.com/api/v1/ticker/allPrices';
    return axios.get(url);
  },

  favoritePairs: function() {

  },

  topPairs: function() {

  }
};



// var options = {
//   "method": "GET",
//   "hostname": "api.binance.com",
//   "path": "/api/v1/ticker/allPrices"
// };



// const request = https.request(options, function (response) {
//   console.log('statusCode:', response.statusCode);
//   console.log('headers:', response.headers);

//   response.on('data', function (d) {
//   	// process.stdout.write(d);
//     var obj = JSON.parse(d);
//     console.log(obj);
//   });

// });

// request.end();