import React , { Component } from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
export default class Contact extends Component{
    handleSubmit = (e) => {
        e.preventDeault();
        alert("your feedback has been recorded");

    }
    render(){
        return(
            
                <Jumbotron style={{backgroundColor: '#ffd1dc',position: "center", padding:'200px', paddingTop:"100px"}}>
                
                  <h2 style={{padding:'20px'}} className="text-center">Contact Us</h2>
                  <Container style={{backgroundColor: 'lightblue',position: "center", padding:'60px'}}>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="  form-group border-bottom  border-primary">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" style={{background:'none'}}/>
                    </div>
                    <div className=" form-group border-bottom border-primary">
                        <label htmlFor="message">Message</label>
                        <textarea style={{background:'none'}} className="form-control" rows="1"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            </Container>
               
          
            </Jumbotron>
   
        )
    }
}