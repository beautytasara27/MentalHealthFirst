/* eslint-disable */
import React, { Component } from 'react'
import './styler.css'

export default class Footer extends Component {
    render() {
        return (

            <section id="footer">
                <div className="container" >
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="/home"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="/about"><i className="fa fa-angle-double-right"></i>About</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="/home"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="/about"><i className="fa fa-angle-double-right"></i>About</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="/forum"><i className="fa fa-angle-double-right"></i>Forum</a></li>
                                <li><a href="/signup"><i className="fa fa-angle-double-right"></i>SignUp</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" container fluid navy">
                    <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="/home"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="/home"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="/home"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="/home"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="/home" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a href="https://www.mentalhealthfirst.social">Mental HealthFirst</a></u> is a Non-Profit Organisation for people with mental health issues.</p>
                            <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.mentalhealthfirst.social" target="_blank">Mentalhealthfirst.social</a></p>
                        </div>
                        <hr />
                    </div>
                    </div>
                </div>
            </section>


        )
    }
}