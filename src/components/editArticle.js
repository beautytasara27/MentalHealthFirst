/* eslint-disable */
import React, { Component } from "react";
import { Container, Button, Form, Jumbotron } from "react-bootstrap";
import axios from "axios";
import { AuthConsumer } from "./Context/AuthContext";
import Sidebar from "./SideBar";

export default class editArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      file: {},
      username: "Admin",
      test: "test",
    };
    this.handleChange = this.handleChange.bind(this);
    //   console.log(this.props)
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  // handleSubmit(e){
  //     e.preventDefault();
  //     this.props.createArticle(this.state)

  // }
  chooseFile = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  post = (e) => {
    e.preventDefault();
    var article = {
      content: this.state.content,
      title: this.state.title,
      username: this.state.username,
    };
    var createArticleRequest = JSON.stringify(article);
    console.log(article);
    console.log(this.state.content);
    axios
      .patch("https://forumcoreapplication.herokuapp.com/v1/articles", {
        content: this.state.content,
        title: this.state.title,
        username: this.state.username,
      })
      .then((res) => {
        alert("your article has been saved")
        this.props.history.goBack();
      }).catch((err)=>{
        alert("There was an error processing your request")
    })
  };
  render() {
    return (
      <div>
        <AuthConsumer>
          {({ isAdmin }) => (isAdmin ? <Sidebar /> : null)}
        </AuthConsumer>
        <Container className="shadow">
          <Jumbotron>
            {this.state.isVisible === true}
            <Form onSubmit={this.post}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  id="title"
                  type="text"
                  defaultValue={this.props.location.data.title}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="file"
                  type="file"
                  onChange={this.chooseFile}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Content</Form.Label>
                <div className="comment">
                  <textarea
                    classname="textinput"
                    id="content"
                    defaultValue={this.props.location.data.body}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </Form.Group>
              <Button
                className="btn-green-moon"
                variant="primary"
                type="submit"
                style={{ color: "white" }}
              >
                Publish
              </Button>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
