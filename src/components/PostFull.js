import React,{Component} from 'react'
import {stories} from '../data/data'
import{Card, Button, Jumbotron, Container} from 'react-bootstrap'

export default class PostFull extends Component{
  constructor(props){
        super(props);
        
    }
    render(){
        const post = stories.find(post => post.id == this.props.match.params.postId)
        
        return(
            <Jumbotron style={{backgroundColor:'#ffd1dc', paddingTop: "20px", listStyle:"none"}}>
            <Container style={{backgroundColor: 'lightblue',position: "center"}}>
            <Card className='mx-auto' border="Secondary" style={{ width: '50rem',float:'none' }}>
            <Card.Title style={{padding:'30px'}} className="text-center">{post.title}</Card.Title>
            <Card.Img variant="top" src={post.img} />
            <Card.Body>
              <Card.Text className="text-justify">
               {post.body}
              </Card.Text>
            </Card.Body>
          </Card>
          </Container>
          </Jumbotron>
    )
    }   
}