import React , { Component } from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import {About} from '../data/data'

export default class Contact extends Component{
    render(){
        var img ='https://cdn.pixabay.com/photo/2015/04/04/22/07/stone-707173_960_720.jpg'
            
        return(
            <Jumbotron className="row justify-content-center" style={{backgroundImage:`url(${img})`,opacity:'0.9',position: "center", paddingTop:'200px', paddingBottom:"200px"}}>
                <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-3 " style={{backgroundColor: '#91BB7F',padding:'20px',position: "center",}} >
                  <h2 className="text-center display-4">{About.subtitle} </h2>
                  <h1 className="text-center " >{About.title}</h1>
                  <p className="text-center">{About.content}</p>
                </div>
               
            </Jumbotron>
   
        )
    }
}