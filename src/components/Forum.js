import React , { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button, Table} from 'react-bootstrap'
import {Threads} from '../data/data'

export default class Contact extends Component{
    render(){
        const threadlist = Threads.map(thread =>{
        return(
           
                  <tr>
                    <td>{thread.author}</td>
                    <td>{thread.question}</td>
                    <td>{thread.label}</td>
                    <td>{thread.likes}</td>
                    <td>today</td>
                  </tr>

        )
    }) 
    return(
        <Jumbotron style={{backgroundColor:'#ffd1dc', paddingTop: "20px", listStyle:"none"}}>
        <Container reponsive style={{backgroundColor: 'lightblue',position: "center"}}>
        <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Topic</th>
            <th>Likes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {threadlist}
        </tbody>
        </Table>
        </Container>
    </Jumbotron>
    )
}
}