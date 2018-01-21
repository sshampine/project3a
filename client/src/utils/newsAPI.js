import axios from "axios";
var url = 'https://newsapi.org/v2/top-headlines?q=cryptocurrency&' +
          'apiKey=b20d4f18b29a4098b58c9c3a9a21cbfd';

var favoriteNews = 'https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&' +
'apiKey=b20d4f18b29a4098b58c9c3a9a21cbfd';

export default {
  news: function() {
    return axios.get(url);
  },
  news2: function() {
    return axios.get(favoriteNews);
  }
};
