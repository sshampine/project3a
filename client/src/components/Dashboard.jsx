import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from "../components/Grid";
import Article from "../components/Article";
import { Table } from "../components/Table";

const Dashboard = ({ secretData, user, coins, articles }) => (
  <Container fluid >
        <Container>
          <Row>
            <br/>
            <br/>
            <br/>
            <hr/>
            <Table
              cryptoData= {coins}
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
            {articles.map((article) => {
              return (
              <Article 
                key={article.url}
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

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
