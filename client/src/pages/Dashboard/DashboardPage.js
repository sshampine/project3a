import React, { Component } from 'react';
import Auth from '../../modules/Auth';
import Dashboard from './Dashboard.js';
import './Dashboard.css';
import Profile from './Profile.js';
import API from "../../utils/newsAPI";
import cryptoAPI from "../../utils/binanceAPI";
import Jumbotron from "../../components/Jumbotron";
import { Row, Container, Col } from "../../components/Grid";


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
      favoriteArticles: [],
      newsTopics: [],
      coins: [],
      profile: false
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    this.newsArticles();
    this.favoriteNewsArticles();
    this.newsTopics();
    
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://3pa.heroku.com:443/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `Bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user,
        });
      }
    });
    xhr.send();

    this.cryptoPairs();
  };

  newsArticles = query => {
      API.news()
        .then(res => {
         console.log(res.data.articles, "res did this work");
         this.setState({ articles: res.data.articles })
        })
        .catch(err => console.log(err))
  };

  favoriteNewsArticles = query => {
    API.favoriteNews()
      .then(res => {
       console.log(res.data.articles, "favoriteNewsArticles did this work");
       this.setState({ favoriteArticles: res.data.articles })
      })
      .catch(err => console.log(err));
  };

  newsTopics = query => {
    API.newsTopics()
      .then(res => {
       console.log(res.data.articles, "newsTopics did this work");
       this.setState({ newsTopics: res.data.articles })
      })
      .catch(err => console.log(err));
  };

  cryptoPairs = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://3pa.heroku.com:443/api/pairs');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log(xhr.response)
      if (xhr.status === 200) {
        this.setState({
          coins: xhr.response.pairs,
        });
      }
    });
    xhr.send();
  };

  /**
   * Render the component.
   */
  render() {
    return (
      <Container fluid>
        <div className="heroDash"> 
          <h1 className="text-center" data-aos="fade-down" > Welcome {this.state.user.name}</h1>
          <p className="text-center" data-aos="fade-up"> How much money have you made today?</p>
        </div>
        <Dashboard 
          secretData={this.state.secretData} 
          user={this.state.user} 
          coins={this.state.coins} 
          articles={this.state.articles} 
          favoriteArticles={this.state.favoriteArticles} 
          newsTopics={this.state.newsTopics} 
        />
      </Container>
     
    );
  }

}

export default DashboardPage;