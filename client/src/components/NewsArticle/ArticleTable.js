import React from "react";
import "./Table.css";
import Article from "../Article/Article";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Tabs, Tab } from 'react-bootstrap';

const options = {
  onRowClick: function(row, columnIndex, rowIndex, e) {
    alert(`You click row id: column index: ${columnIndex}, row index: ${rowIndex}`);
    console.log(e);
  },
  // onRowDoubleClick: function(row, e) {
  //   alert(`You double click row id: ${row.id}`);
  //   console.log(e);
  // }
};

export class ArticleTable extends React.Component {

	constructor(props) {
      super(props);
      this.state = {
        key: 2
      };
    }

    handleTabChange = (key) => {
      this.setState({
        key
      }, () => {
        /*
         * If you enable animation in react-bootstrap tab
         * please remember to call forceUpdate in async call.
         * If disable animation, call forceUpdate directly.
         */
        if (key === 1) {
          setTimeout(() => {
            this.refs.table1.forceUpdate();
          }, 500);
        } else if (key === 2) {
          setTimeout(() => {
            this.refs.table2.forceUpdate();
          }, 500);
        }
      });
    }

  render() {
    return (
        <Tabs activeKey={ this.state.key } onSelect={ this.handleTabChange } animation>
          <Tab eventKey={ 1 } title='Trending'>
          {this.state.articles.map((article) => {
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
          <Tab eventKey={ 2 } title='Portfolio'>
          {this.state.articles.map((article) => {
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
          <Tab eventKey={ 3 } title='Favorites'>
          {this.state.articles.map((article) => {
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
