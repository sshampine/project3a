import axios from "axios";

export default {
  allPairs: function() {
    return axios({
    	method: 'get',
    	url: 'https://3pa.heroku.com:443/api/pairs',
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