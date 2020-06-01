import React , { Component } from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import {About} from '../data/data'

export default class Contact extends Component{
    render(){
        return(
            <Jumbotron style={{backgroundColor: '#ffd1dc',position: "center", padding:'200px'}}>
                <Container style={{backgroundColor: 'lightblue',padding:'20px',position: "center",}} >
                  <h2 className="text-center">{About.subtitle} </h2>
                  <h1 className="text-center " >{About.title}</h1>
                  <p className="text-center">{About.content}</p>
                </Container>
               
            </Jumbotron>
   
        )
    }
}