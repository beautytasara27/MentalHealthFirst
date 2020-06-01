import React,{Component} from 'react'
import {stories} from '../data/data'
import{Card, Button, Jumbotron, Container, ListGroup, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class PostFull extends Component{
  constructor(props){
        super(props);
        this.state={
          post:{},
          expanded: false
        }
        
    }
    componentDidMount(){
      this.setState({post : stories.find(post => post.id == this.props.match.params.postId)})

    }
    render(){
       
        
        return(
            <Jumbotron style={{backgroundColor:'#ffd1dc', paddingTop: "20px", listStyle:"none"}}>
            <Container style={{backgroundColor: 'lightblue',position: "center"}}>
            <Card className='mx-auto' border="Secondary" style={{ width: '50rem',float:'none' }}>
            <Row>
              <Card.Title style={{padding:'30px'}} className="text-center">{this.state.post.title}</Card.Title>
              <div>
              <svg onClick={()=>this.setState({expanded:true})} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
              <div>
              {this.state.expanded? (<Card>
                <ListGroup>
                <ListGroup.Item><Link to='/createArticle'>Edit</Link> </ListGroup.Item>
                <ListGroup.Item><Button>Delete</Button></ListGroup.Item>
                </ListGroup>
                </Card>): null}
              
              </div>
              </div>
              </Row>
            <Card.Img variant="top" src={this.state.post.img} />
            <Card.Body>
              <Card.Text className="text-justify">
               {this.state.post.body}
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

}
}