import React, { Component } from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
export default class Footer extends Component{
    render(){
        return(
            <Container fluid>
            <Jumbotron fluid style={{backgroundColor:"#789D68"}}>
            <footer >
                <div className="container">
                        <div className="mx-auto">
                            <p className="text-center"> &copy;2020 MentalHealthFirst. Binus International</p>
                        </div>
                        <div className="col-lg-4 col-lg-offset-4 col-xs-12 mx-auto">
                
                    </div>
                </div>
            </footer>
            </Jumbotron>
            </Container>
   
        )
    }
}