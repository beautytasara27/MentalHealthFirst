
/* eslint-disable */
import React, { Component } from 'react'
import { Container, Button, Form, Jumbotron } from 'react-bootstrap';
import axios from 'axios'
import { AuthConsumer } from './Context/AuthContext';
import Sidebar from './SideBar'

export default class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            file: {},
            username: "Admin",
            isAdmin: true

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })

    }

    chooseFile = (e) => {
        this.setState({ file: e.target.files[0] });

    }
    post = (e) => {
        e.preventDefault();
        axios.post('https://forumcoreapplication.herokuapp.com/v1/articles', { content: this.state.content, title: this.state.title, username: this.state.username }).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    }
    render() {
        return (
            <div className="row">
                <AuthConsumer>
                    {({ isAdmin }) => (<div>
                        <div>{isAdmin ? <Sidebar /> : null}</div>
                    </div>)}
                </AuthConsumer>

                <Container >
                    <Jumbotron>
                        {this.state.isVisible === true}
                        <Form onSubmit={this.post}>
                            <Form.Group >
                                <Form.Label>Title</Form.Label>
                                <Form.Control id="title" type="text" placeholder="Enter title" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="file" type="file" onChange={this.chooseFile} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Content</Form.Label>
                                <Form.Control id="content" type="textarea" placeholder="Content" onChange={this.handleChange} style={{ height: '300px' }} />
                            </Form.Group>
                            <Button className="btn-green-moon" variant="primary" type="submit" style={{ color: "white" }} >Publish
                            </Button>
                        </Form>
                    </Jumbotron>
                </Container >
            </div>

        )
    }

}