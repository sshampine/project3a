import axios from "axios";

export default {
  allPairs: function() {
    return axios.get("/api/binance/pairs");
  },

  favoritePairs: function() {

  },

  topPairs: function() {

  }
};