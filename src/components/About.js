import React , { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'
import {About} from '../data/data'

export default class Contact extends Component{
    render(){
        return(
            <Container>
                <Container bg="dark" >
                  <h1>{About.title}</h1>
                  <h2>{About.subtitle} </h2>
                  <p>{About.content}</p>
                </Container>
               
            </Container>
   
        )
    }
}