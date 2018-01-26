import axios from "axios";

export default {
  allPairs: function() {
    return axios({
    	method: 'get',
    	url: 'http://localhost:3000/api/pairs',
    	auth: {
		  username: '',
		  password: ''
		}
	})
  },

  favoritePairs: function() {

  },

  topPairs: function() {

  }
};