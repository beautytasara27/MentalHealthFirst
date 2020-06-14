/* eslint-disable */
import React, { Component } from 'react'
import './styler.css'

export default class Footer extends Component {
    render() {
        return (

            <section id="footer">
                <div className="container" >
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="/home"><i class="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="/about"><i class="fa fa-angle-double-right"></i>About</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="/forum"><i class="fa fa-angle-double-right"></i>Forum</a></li>
                                <li><a href="signup"><i class="fa fa-angle-double-right"></i>SignUp</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navy container fluid">
                    <div class="row ">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a href="https://www.mentalhealth.social">Mental HealthFirst</a></u> is a Non-Profit Organisation for people with mental health issues.</p>
                            <p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Mentalhealthfirst.social</a></p>
                        </div>
                        <hr />
                    </div>
                    </div>
                </div>
            </section>


        )
    }
}