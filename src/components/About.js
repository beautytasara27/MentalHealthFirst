/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import { About } from '../data/data'
import './styler.css'

export default class Contact extends Component {
    render() {

        return (
            <Jumbotron className="row justify-content-center" style={{  position: "center", paddingTop: '100px', paddingBottom: "200px" }}>
                <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-3 " style={{ backgroundColor: '#91BB7F', padding: '20px', position: "center", }} >
                    <h2 className="text-center display-4 texty">{About.subtitle} </h2>
                    <h1 className="text-center texty" >{About.title}</h1>
                    <p className="text-center text">{About.content}</p>
                </div>

            </Jumbotron>

        )
    }
}