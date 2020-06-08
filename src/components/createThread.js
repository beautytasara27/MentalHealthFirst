  
/* eslint-disable */
import React, { Component } from 'react'
import { Container, Button,Form , Jumbotron} from 'react-bootstrap';
import axios from 'axios'
import './styler.css'

export default class createThread extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            username: "taty"
        
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]: e.target.value})
        
    }
 
    post = (e) =>{
        e.preventDefault();
        console.log(this.state.content)
        axios.post('http://localhost:7003/v1/posts', {content: this.state.content, title: this.state.title, username: this.state.username}).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return(
            <Container>
                <Jumbotron className="container-Jumbotron">
                <Form onSubmit={this.post}>
                <Form.Group >
                    <Form.Label>Title</Form.Label>
                    <Form.Control id="title" type="text" placeholder="Enter title" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Content</Form.Label>
                    <Form.Control id="content" type="textarea" placeholder="Write your post here" onChange={this.handleChange} style={{ height: '300px'}}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{color:"white"}} >Publish
                </Button>
                </Form>
                </Jumbotron>
            </Container>
   
        )
    }

}