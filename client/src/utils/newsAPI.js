import axios from "axios";
var url = 'https://newsapi.org/v2/top-headlines?q=cryptocurrency&' +
          'apiKey=b20d4f18b29a4098b58c9c3a9a21cbfd';

var favoriteNews = 'https://newsapi.org/v2/everything?q=cryptocurrency&domains=cnbc.com,ccn.com&' +
'apiKey=b20d4f18b29a4098b58c9c3a9a21cbfd';

var newsTopics = 'https://newsapi.org/v2/everything?q=nba,bitcoin&language=en&' +
'apiKey=b20d4f18b29a4098b58c9c3a9a21cbfd';

export default {
  news: function() {
    return axios.get(url);
  },
  
  favoriteNews: function() {
    return axios.get(favoriteNews);
  },
  newsTopics: function() {
    return axios.get(newsTopics);
  },

  getNewsOutlet: function() {
    return axios.get("/api/newsoutlet");
  },

  // Gets the book with the given id
  getOutlet: function(id) {
    return axios.get("/api/newsoutlet" + id);
  },

  // Saves a book to the database
  saveOutlet: function(outletData) {
    console.log("we are about to save", outletData);
    return axios.post("/api/outlets/saveoutlets", outletData);
  },

  // Saves a book to the database
  getFavOutlets: function(outletData) {
    console.log("we are about to save", outletData);
    return axios.post("/api/outlets/saveoutlets", outletData);
  }
};
