import React , { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'
export default class Contact extends Component{
    handleSubmit = (e) => {
        e.preventDeault();
        alert("your feedback has been recorded");

    }
    render(){
        return(
            <Container>
                <Jumbotron>
                  <h2>We wellcome all feedback</h2>
                </Jumbotron>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
               
            </Container>
   
        )
    }
}