import React , { Component } from 'react'
import DatatablePage from './DataTable'
import {Threads} from '../data/data'
import { Button } from 'react-bootstrap';
import axios from 'axios'

export default class Forum extends Component {
  constructor(props){
    super(props);
    this.state ={
      posts: []
    }
    
  }
  componentDidMount(){
    axios.get( "http://localhost:7003/v1/posts").then(res=> {
            
            this.setState({posts: res.data})
            console.log("my posts",this.state.posts)

        }).
        catch((error)=>{
            console.log(error)
        
    })
  }
  createPost = (e)=>{
    e.preventDefault();
    this.props.history.push('/createThread')
  }
  render(){
    return(
      <div>
      <Button onClick={this.createPost}>Create New Post</Button>
      <DatatablePage tableData={this.state.posts} props={this.props}/>
      </div>
    )
  }
}
   
