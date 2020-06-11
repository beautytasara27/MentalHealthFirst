
/* eslint-disable */
import React, { Component } from 'react'
import { Container, Button, Form, Jumbotron } from 'react-bootstrap';
import axios from 'axios'
import { AuthConsumer } from './Context/AuthContext';
import Sidebar from './SideBar'

export default class editArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            file: {},
            username: "Admin",
            test: "test"

        }
        this.handleChange = this.handleChange.bind(this);
        console.log(this.props)
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })

    }
    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.createArticle(this.state)

    // }
    chooseFile = (e) => {
        this.setState({ file: e.target.files[0] });

    }
    post = (e) => {
        e.preventDefault();
        var article = {
            content: this.state.content,
            title: this.state.title,
            username: this.state.username
        }
        var createArticleRequest = JSON.stringify(article)
        console.log(article)
        console.log(this.state.content)
        axios.patch('http://localhost:7003/v1/articles', { content: this.state.content, title: this.state.title, username: this.state.username }).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
            <AuthConsumer>
                {({ isAdmin }) => (
                    isAdmin?<Sidebar/> : null
            )}
            </AuthConsumer>
            <Container>
                <Jumbotron>
                    {this.state.isVisible === true}
                    <Form onSubmit={this.post}>
                        <Form.Group >
                            <Form.Label>Title</Form.Label>
                            <Form.Control id="title" type="text" defaultValue={this.props.location.data.title} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control id="file" type="file" onChange={this.chooseFile} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Content</Form.Label>
                            <Form.Control id="content" type="textarea" defaultValue={this.props.location.data.body} onChange={this.handleChange} style={{ height: '300px' }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ color: "white" }} >Publish
                </Button>
                    </Form>
                </Jumbotron>
            </Container>
            </div>
   
        )
    }

}