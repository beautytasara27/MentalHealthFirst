import React, { Component } from 'react'
import {Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default class Sidebar extends Component {

    render() {
        return (
            <div style={{padding:"30px", backgroundColor: "#DAE9A6"}}>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/createArticle">New Article</Link>
                <Link to="/accounts"> Manage Users</Link>
                <Link to="/">Manage Articles</Link>
                <Link to="/forum">Manage Posts</Link>
                   
                </Nav>
            </div>
        )
    }
}