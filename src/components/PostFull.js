import React,{Component} from 'react'
import {stories} from '../data/data'
import{Card, Button, Jumbotron, Container, ListGroup, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class PostFull extends Component{
  constructor(props){
        super(props);
        this.state={
          expanded: false,
          articles: [],
          article: {}
        }
   
        
    }
    componentDidMount(){
      axios.get( `http://localhost:7003/v1/articles/getById/${this.props.match.params.postId}`).then(res=> { 
        console.log(res.data)
       // this.setState({articles: res.data})
       this.setState({article : res.data})
    }).
    catch((error)=>{console.log(error)})
     
      
  
}
  
    render(){
       
      //  const article = this.state.articles.find(element => element.id == this.state.post.id)
        return(
            <Jumbotron style={{backgroundColor:'white', paddingTop: "20px", listStyle:"none"}}>
            <Container style={{backgroundColor: 'white',position: "center"}}>
            <Card className='mx-auto' border="Secondary" style={{ width: '50rem',float:'none' }}>
            <Card.Body>
            <div className="row justify-content-end">
              <svg onClick={()=>this.setState({expanded:!this.state.expanded})} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
              </div>
              <div className="row justify-content-between" style={{padding:"20px"}}>
              <Card.Text >{this.state.article.username}</Card.Text>
              <Card.Text>{this.state.article.dateCreated}</Card.Text>
              </div>
            <Row>
              <Card.Title style={{padding:'20px'}} className="text-center">{this.state.article.title}</Card.Title>
              
              <div>
              {this.state.expanded? (<Card>
                <ListGroup>
                <ListGroup.Item><Button onClick={()=>{this.props.history.push({pathname: '/editArticle', data: this.state.post })}}>Edit</Button> </ListGroup.Item>
                <ListGroup.Item><Button onClick={this.deleteArticle}>Delete</Button></ListGroup.Item>
                </ListGroup>
                </Card>): null}
              
              </div>
              </Row>
             
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
           
              <Card.Text className="text-justify">
               {this.state.article.content}
              </Card.Text>
            </Card.Body>
          </Card>
          </Container>
          </Jumbotron>
    )
    }   


 deleteArticle = (e) =>{
  e.preventDefault();
  //code to delete
  axios.delete(`http://localhost:7003/v1/articles/${this.state.article.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.setState({expanded:false})

}
}