import React , { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button, Table} from 'react-bootstrap'

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider ,  PaginationListStandalone,
  PaginationTotalStandalone, SizePerPageDropdownStandalone} from 'react-bootstrap-table2-paginator';  

class DatatablePage extends Component {
    constructor(props){
      super(props);
     
  
    }
    rowEvents = {
      onClick: (e, row, rowIndex) => {
        
        this.props.props.history.push({pathname: 'forum/'+ row.id, data: row })
        console.log("row is", row)
      }
    };
    
    render(){
        const dataRows = this.props.tableData
        //console.log(props.location.data)
        const paginationOption = {
            custom: true,
            totalSize: dataRows.length
        }
        

        const data = {
            columns: [
            {
                text: '',
                dataField: 'username',
                width: 150
            },
            {
                text: 'title',
                dataField: 'title',
                width: 300
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
                dataField: 'dateCreated',
                width: 150,
                order: 'desc'
            }
            ],
            
            rows: dataRows
        }

  //
    return (
  
      <PaginationProvider
      pagination={ paginationFactory(paginationOption) }>
      {
        ({
          paginationProps,
          paginationTableProps
        }) => (
          <div>
          <div className="row justify-content-between" style={{paddingRight:"30px", paddingLeft:"15px"}}>
          <SizePerPageDropdownStandalone
          { ...paginationProps }
          />
        
          <MySearch { ...this.props.searchProps } />
          </div>
          <BootstrapTable
        
          responsive
          data={data.rows}
          columns={ data.columns }
          keyField='id'
          rowEvents= {this.rowEvents}
          { ...paginationTableProps }
          />
          <div style={{backgroundColor:"#233C1D"}}>
          <PaginationListStandalone
          { ...paginationProps }
          />
          </div>
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
      <div className="row justify-content-end">

        <input
          style={ { backgroundColor: 'white', borderColor:"green" } }
          ref={ n => input = n }
          type="text"
        />
        <button style={{backgroundColor:"#11643D", color:"white"}} className="btn" onClick={ handleClick }>Search</button>
        </div>
      </div>
    );
  };  
  
  export default DatatablePage;