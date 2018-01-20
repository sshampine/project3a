import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Article from "../../components/Article/Article";
import API from "../../utils/newsAPI";
import cryptoAPI from "../../utils/binanceAPI";
import { Table } from "../../components/Table";


class Dashboard extends Component {
  state = {
    articles: [],
    coins: []
  };

 // When this component mounts, search for the movie "The Matrix"
 componentDidMount() {
  this.newsArticles();
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

cryptoPairs = query => {
  cryptoAPI.allPairs()
    .then(res => {
     console.log(res.data, "res did this work");
     this.setState({ coins: res.data })
    })
    .catch(err => console.log(err));
};

  render() {
    return (
      <Container fluid >
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
            {this.state.articles.map((article) => {
              return (
              <Article 
                src={article.urlToImage}
                title={article.title}
                url={article.url}
                description={article.description}  
              />
              )
            })}
            <br/>
            <br/>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Dashboard;
