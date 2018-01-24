import React, { Component } from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import API from "../utils/newsAPI";
import cryptoAPI from "../utils/binanceAPI";


class DashboardPage extends Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
      articles: [],
      coins: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    this.newsArticles();
    this.cryptoPairs();
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  };

  newsArticles(query) {
    return(
      API.news()
        .then(res => {
         console.log(res.data.articles, "res did this work");
         this.setState({ articles: res.data.articles })
        })
        .catch(err => console.log(err))
    );
  };

  cryptoPairs(query) {
    return(
      cryptoAPI.allPairs()
        .then(res => {
         console.log(res.data, "res did this work");
         this.setState({ coins: res.data })
        })
        .catch(err => console.log(err))
      );
  };

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} user={this.state.user} coins={this.state.coins} articles={this.state.articles} />);
  }

}

export default DashboardPage;
