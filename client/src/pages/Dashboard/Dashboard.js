import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from "../../components/Grid";
import { Table } from "../../components/Table";
import { ArticleTable } from "../../components/NewsArticle";

const Dashboard = props => (
  <Container fluid >
        <Container>
          <Row>
            <br/>
            <br/>
            <br/>
            <hr/>
            <Table
              cryptoData= {props.coins}
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
                articles= {props.articles}
                favoriteArticles= {props.favoriteArticles}
                newsTopics= {props.newsTopics}
              />
              
            <br/>
            <br/>
          </Row>
        </Container>
      </Container>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
};

export default Dashboard;
