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
      <div className="container border primary">
      <hr/>
      <div className="row justify-content-between align-items-center" style={{paddingRight:"15px",paddingTop:"10px", paddingBottom:'10px'}}>
      <div><text className="display-4" style={{paddingLeft:"15px"}}>All Threads</text></div>
      <button style={{backgroundColor:"#11643D", color:"white", border:"none", height:"40px"}} onClick={this.createPost}>Create New Post</button>
      </div>
      <text>Our forum members are people, maybe like yourself, who experience mental health difficulties or who have had them at some point in their life. Amongst our membership there is a wealth of expertise that has been developed through having to deal with mental health issues.</text>
      <span style={{paddingBottom:"10px"}}></span>
      <hr/>
      <span style={{paddingTop:"10px"}}></span>
      <DatatablePage tableData={this.state.posts} props={this.props}/>
      </div>
    )
  }
}
   
