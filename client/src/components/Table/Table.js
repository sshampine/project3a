import React from "react";
import "./Table.css";
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

export class Table extends React.Component {

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
            <BootstrapTable ref='table1' data={ this.props.cryptoData } options={ options }>
              <TableHeaderColumn dataField='symbol' isKey width='300' dataSort>Crypto Pair</TableHeaderColumn>
              <TableHeaderColumn dataField='price' dataSort>Price</TableHeaderColumn>
            </BootstrapTable>
          </Tab>
          <Tab eventKey={ 2 } title='Portfolio'>
            <BootstrapTable ref='table2' data={ this.props.cryptoData } options={ options }>
              <TableHeaderColumn dataField='symbol' isKey width='300' dataSort>Crypto Pair</TableHeaderColumn>
              <TableHeaderColumn dataField='price' dataSort>Price</TableHeaderColumn>
            </BootstrapTable>
          </Tab>
          <Tab eventKey={ 3 } title='Favorites'>
            <BootstrapTable ref='table2' data={ this.props.cryptoData } options={ options }>
              <TableHeaderColumn dataField='symbol' isKey width='300' dataSort>Crypto Pair</TableHeaderColumn>
              <TableHeaderColumn dataField='price' dataSort>Price</TableHeaderColumn>
            </BootstrapTable>
          </Tab>
        </Tabs>
    );
  }
}
