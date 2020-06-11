import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Users } from '../data/data'
import { Navbar, Nav, NavItem, Button, } from 'react-bootstrap';
import Sidebar from './SideBar';
import axios from 'axios'

export default class ManageuserAccounts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            users : [],
            refresh : false
        };
    }
    componentDidMount = () =>{
        axios.get('http://localhost:7004/api/users').then((res)=>{
                this.setState({users: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    deleteUser = (postId) =>{
        axios.delete(`http://localhost:7004/api/users/${postId}`).then((res)=>{
            this.setState({resfreh: !this.state.refresh})
        }).catch((err)=>{
            console.log(err)
        })
    }
    


    render() {
        const users = this.state.users.map((post) => {
            return (
                <ul key={post.id}>
                    <li>
                        <div>
                            <ListGroup.Item>
                                <div className="row justify-content-between">
                                    <div>{post.id}</div>
                                    <div>{post.name}</div>
                                    <div>{post.email}</div>
                                    <div><button onClick={this.deleteUser.bind(this,post.id)}>Delete</button></div>
                                </div>
                            </ListGroup.Item>
                        </div>
                    </li>
                </ul>
            )
        })


        return (
            <div className="row">
                <Sidebar />
                <div className="container">
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            {users}
                        </ListGroup>
                    </Card>
                </div>
            </div>
        )

    }
}