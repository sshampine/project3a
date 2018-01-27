import axios from "axios";

export default {
  allPairs: function() {
    return axios({
    	method: 'get',
    	url: 'https://p3a.herokuapp.com:443/api/pairs',
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