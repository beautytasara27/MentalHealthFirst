import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
export default class Contact extends Component {



    render() {
        //col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 "
        return (

            <Jumbotron className="" style={{ backgroundColor: "white", position: "center", paddingBottom: '200px', paddingTop: "100px" }}>
                <div className="" >
                    <h2 className=" text-center" style={{ padding: '60px' }}  >We would like to hear from you</h2>

                </div>
                <div className="container" style={{ backgroundColor: '#91BB7F', position: "center", zIndex: 1, padding: '60px' }}>
                    <h2 style={{ padding: '20px' }} className="text-center display-4">Contact Us</h2>
                    <form method="POST" data-netlify="true" id="contact-form" >
                        <div className="  form-group border-bottom  border-dark">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="form-control" style={{ background: 'none', border: "none" }} />
                        </div>
                        <div className=" form-group border-bottom border-dark">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" style={{ background: 'none', border: "none" }} className="form-control" rows="1"></textarea>
                        </div>
                        <button type="submit" className="btn" style={{ backgroundColor: "#11643D", color: "white" }}>Submit</button>
                    </form>
                </div>

            </Jumbotron >

        )
    }
}