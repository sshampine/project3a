import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Article from "../../components/Article/Article";
import { Table } from "../../components/Table";
import { ArticleTable } from "../../components/NewsArticle";
import API from "../../utils/newsAPI";
import cryptoAPI from "../../utils/binanceAPI";
import "./Public.css";

class Public extends Component {
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

cryptoPairs = query => {
  cryptoAPI.allPairs()
    .then(res => {
     console.log(res.data, "cryptoData did this work");
     this.setState({ coins: res.data })
    })
    .catch(err => console.log(err));
};
  render() {
    
    return (
    
      <Container fluid >
        <Jumbotron className="heroHome" > 
          <h1 className="text-center" data-aos="fade-down"> Track Your Crypto</h1>
          <p className="text-center" data-aos="fade-down"> Stay up to date with the latest news, prices, and all the drama.</p>
          <div className="heroIcon" data-aos="zoom-out-up">
            <img className="heroArrow center-block" src="https://cdn1.iconfinder.com/data/icons/utility-icons/50/Down-512.png" alt="arrow down" />
          </div>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-2">
              <p className="text-right"><i class="fas fa-chart-line"></i></p>
            </Col>
            <Col size="md-6">
              <h2>Track Real Time Rates</h2>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-4"></Col>
          </Row>
          <Row>
            <Col size="md-2">
              <p className="text-right"><i class="far fa-newspaper"></i></p>
            </Col>
            <Col size="md-6">
              <h2>Follow the Latest News</h2>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-4"></Col>
          </Row>
          <Row>
            <Col size="md-2">
              <p className="text-right"><i class="fas fa-universal-access"></i></p>
            </Col>
            <Col size="md-6">
              <h2>Customize Your News Feed</h2>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-4"></Col>
          </Row>
        </Container>
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

export default Public;
