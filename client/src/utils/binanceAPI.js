import axios from "axios";

export default {
  allPairs: function() {
    return axios.get("http://localhost:3000/api/pairs");
  },

  favoritePairs: function() {

  },

  topPairs: function() {

  }
};