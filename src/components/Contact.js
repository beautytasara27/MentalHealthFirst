/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import './styler.css'
export default class Contact extends Component {


    render() {
        //col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 "
        return (
            <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>)

        
    }
}