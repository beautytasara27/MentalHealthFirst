import React , { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button, Table} from 'react-bootstrap'
import {Threads} from '../data/data'
import { MDBDataTable } from 'mdbreact';
import BootstrapTable from 'react-bootstrap-table-next';
import { useHistory, Link } from 'react-router-dom'
import paginationFactory, { PaginationProvider ,  PaginationListStandalone,
  PaginationTotalStandalone, SizePerPageDropdownStandalone} from 'react-bootstrap-table2-paginator';  
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'


class DatatablePage extends Component {
  constructor(props){
    super(props);
   

  }
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      
      this.props.history.push({pathname: 'forum/'+ row.id, data: row })
console.log("row is", row)
    }
  };

  render(){
const dataRows = Threads
//console.log(props.location.data)
const paginationOption = {
  custom: true,
  totalSize: dataRows.length
};
  

  const data = {
    columns: [
      {
        text: '',
        dataField: 'author',
        width: 150
      },
      {
        text: 'title',
        dataField: 'title',
        width: 270
      },
      {
        text: 'Topic',
        dataField: 'label',
        width: 200
      },
      {
        text: 'Likes',
        dataField: 'likes',
        width: 100
      },
      {
        text: 'Date',
        dataField: 'date',
        sort: 'asc',
        width: 150
      }
    ],
    
   rows: dataRows
  }


  return (

    <PaginationProvider
    pagination={ paginationFactory(paginationOption) }
  >
    {
      ({
        paginationProps,
        paginationTableProps
      }) => (
        <div>
        <SizePerPageDropdownStandalone
        { ...paginationProps }
        />
        <PaginationTotalStandalone
          { ...paginationProps }
        />
        <MySearch { ...this.props.searchProps } />
        <BootstrapTable
      
        responsive
        data={data.rows}
        columns={ data.columns }
        keyField='id'
        rowEvents= {this.rowEvents}
        { ...paginationTableProps }
        />
        <PaginationListStandalone
        { ...paginationProps }
        />
      </div>
      ) 
    }
  </PaginationProvider>

  );
  }
}

const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
    <Row>
      <input
        className="form-control"
        style={ { backgroundColor: 'pink' } }
        ref={ n => input = n }
        type="text"
      />
      <Button className="btn" onClick={ handleClick }>Search</Button>
      </Row>
    </div>
  );
};  

export default DatatablePage;