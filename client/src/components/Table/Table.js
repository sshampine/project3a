import React from "react";
import "./Table.css";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export const Table = props => (
 
  <BootstrapTable data={props.cryptoData} striped hover>
    <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
    <TableHeaderColumn dataField='name'>Crypto Pair</TableHeaderColumn>
    <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
  </BootstrapTable>

)