/* eslint-disable */
import React ,{Component} from 'react'
import { Row, Col, Container, Jumbotron, Card, Button, CardColumns ,CardDeck} from 'react-bootstrap'
import {BrowserRouter, Link, Switch} from 'react-router-dom'
import {stories} from '../data/data'
import Dotdotdot from 'react-dotdotdot'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

class Home extends Component{
   
    render(){
        //
        const postList = stories.slice(0,3).map(post =>{
        return(
            
            <li key={post.id} style={{padding: "20px", listStyle:"none"}}>
                <Container style={{backgroundColor: 'lightblue',position: "center"}}>
                <Link to={'/PostFull/'+ post.id} style={{color: 'black'}}>
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
    const cardDeckk = stories.slice(3).map(post=>{
        return(
            
            <li key={post.id} style={{padding: "20px", listStyle:"none"}}>
            <Container style={{backgroundColor: 'lightblue',position: "center"}}>
            <Link to={'/PostFull/'+ post.id} style={{color: 'black'}}>
                <Card className='mx-auto'  border="Secondary" style={{ width: '18rem' , float:'none'}}>

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
        <Jumbotron className="fluid" style={{backgroundColor:'#ffd1dc', paddingTop: "20px", listStyle:"none"}}>
        <div>
            <ul>{postList}</ul>
        </div>
        </Jumbotron>
        <text>Recent Posts</text>
        <Carousel responsive={responsive}>
        {cardDeckk}
        </Carousel>
        </div>
        
    )
    
}

}

export default Home;