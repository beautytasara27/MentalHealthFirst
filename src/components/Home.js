/* eslint-disable */
import React ,{Component} from 'react'
import { Row, Col, Container, Jumbotron, Card, Button } from 'react-bootstrap'
import {BrowserRouter, Link, Switch} from 'react-router-dom'
import {stories} from '../data/data'
import Dotdotdot from 'react-dotdotdot'

class Home extends Component{
   
    render(){
        //
        const postList = stories.map(post =>{
        return(
            <li key={post.id} style={{padding: "20px", listStyle:"none"}}>
                <Container className="fluid" style={{backgroundColor: 'lightblue',position: "center"}}>
                <Link to={'/PostFull'+ post.id} style={{color: 'black'}}>
                    <Card className='mx-auto'  border="Secondary" style={{ width: '40rem' , float:'none'}}>
    
                    <Card.Img variant="top" src={post.img}/> 
                    
                   <Card.Body style={{backgroundColor: 'white'}}>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    <Dotdotdot clamp={4}><p>{post.body}</p></Dotdotdot>
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Link>
                </Container>
            </li>
        
            
        )
    })

    return(
        <div>
            <ul>{postList}</ul>
        </div>
        
    )
    
}

}

export default Home;