import React from "react";
import "./Table.css";
import Article from "../Article/Article";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Tabs, Tab } from 'react-bootstrap';

export class ArticleTable extends React.Component {

	constructor(props) {
      super(props);
      this.state = {
        key: 1
      };
    }

    handleTabChange = (key) => {
      this.setState({ key });
    }

  render() {
    return (
        <Tabs activeKey={ this.state.key } onSelect={ this.handleTabChange } animation>
          <Tab eventKey={ 1 } title='Trending'>
            {this.props.articles.map((article) => {
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
          </Tab>
          <Tab eventKey={ 2 } title='Favorite Outlets'>
            {this.props.favoriteArticles.map((article) => {
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
          </Tab>
          <Tab eventKey={ 3 } title='News Topics'>
            {this.props.newsTopics.map((article) => {
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
          </Tab>
        </Tabs>
    );
  }
}
