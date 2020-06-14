import React, { Component } from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import './styler.css'

export default class NoMatch extends Component{
    render(){
        return(
            <Container>
                <Jumbotron className="container-Jumbotron">
                  <h2>No Match</h2>
                  <p>The item you requested is not available</p>
                </Jumbotron>
               
            </Container>
   
        )
    }
}