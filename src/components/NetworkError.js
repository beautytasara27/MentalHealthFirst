/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'
import './styler.css'

export default class NetworkError extends Component{
    render(){
        return(
            <Container>
                <Jumbotron className="container-Jumbotron">
                  <h2>Network Error</h2>
                  <p>Try refreshing the page</p>
                </Jumbotron>
               
            </Container>
   
        )
    }
}