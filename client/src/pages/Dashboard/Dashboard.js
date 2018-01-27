import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Article from "../../components/Article/Article";
import API from "../../utils/newsAPI";
import cryptoAPI from "../../utils/binanceAPI";
import { Table } from "../../components/Table";
import { ArticleTable } from "../../components/NewsArticle";
import "./Dashboard.css";


class Dashboard extends Component {
  state = {
    articles: [],
    favoriteArticles: [],
    newsTopics: [],
    coins: []
  };


 componentDidMount() {
  this.newsArticles();
  this.favoriteNewsArticles();
  this.newsTopics();
  this.cryptoPairs();
}

newsArticles = query => {
  API.news()
    .then(res => {
     console.log(res.data.articles, "res did this work");
     this.setState({ articles: res.data.articles })
    })
    .catch(err => console.log(err));
};

favoriteNewsArticles = query => {
  API.getFavOutlets()
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

cryptoPairs = query => {
  cryptoAPI.allPairs()
    .then(res => {
     console.log(res.data, "cryptoData did this work");
     this.setState({ coins: res.data })
    })
    .catch(err => console.log(err));
};

  render() {
    return(
      <Container>
        <Container>
          <Row>
            <br/>
            <br/>
            <br/>
            <hr/>
              <Table
                cryptoData= {this.state.coins}
              />
            <hr/>
            <br/>
            <br/>
            <br/>
          </Row>
        </Container>
        <Container>
          <Row>
            <br/>
            <br/>
            <br/>
            <hr />
            <h1 className="text-center">Latest Cryptocurrency News Articles</h1>
            <hr />
            <ArticleTable 
             articles= {this.state.articles}
             favoriteArticles= {this.state.favoriteArticles}
             newsTopics= {this.state.newsTopics}
            />
            <br/>
            <br/>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Dashboard;
