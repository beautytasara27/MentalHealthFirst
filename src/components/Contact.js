import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
export default class Contact extends Component {
    handleSubmit = (e) => {
        e.preventDeault();
        alert("your feedback has been recorded");

    }
    render() {
        var img = 'https://cdn.pixabay.com/photo/2015/04/04/22/07/stone-707173_960_720.jpg'

        return (

            <Jumbotron className="row justify-content-center" style={{ backgroundImage: `url(${img})`, opacity: '0.9', position: "relative", zIndex: 0, paddingBottom: '200px', paddingTop: "100px" }}>
                <div className="row  col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 " style={{ backgroundColor: "#11643D" }}>
                    <div className="col " style={{ backgroundColor: "#4C8F55", position: "center" }}>
                        <h2 className="display-4 text-center" style={{ padding: '60px' }}  >We would like to hear from you</h2>
                        
                    </div>
                    <div className="col" style={{ backgroundColor: '#91BB7F', position: "relative", zIndex: 1, padding: '60px' }}>
                        <h2 style={{ padding: '20px' }} className="text-center display-4">Contact Us</h2>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
                            <div className="  form-group border-bottom  border-dark">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" style={{ background: 'none', border: "none" }} />
                            </div>
                            <div className=" form-group border-bottom border-dark">
                                <label htmlFor="message">Message</label>
                                <textarea style={{ background: 'none', border: "none" }} className="form-control" rows="1"></textarea>
                            </div>
                            <button type="submit" className="btn" style={{ backgroundColor: "#11643D", color: "white" }}>Submit</button>
                        </form>
                    </div>

                </div>

            </Jumbotron>

        )
    }
}