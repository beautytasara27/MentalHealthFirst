import React , { Component } from 'react'
import DatatablePage from './DataTable'
import {Threads} from '../data/data'

export default class UserMyposts extends Component {
  constructor(props){
    super(props);

    
  }
  render(){
    return(
      <div>
      <DatatablePage tableData={Threads}/>
      </div>
    )
  }
}
   