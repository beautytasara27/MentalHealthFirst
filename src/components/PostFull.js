/* eslint-disable */
import React, { Component } from 'react'
import { Card, Button, Jumbotron, Container, ListGroup, Row } from 'react-bootstrap'
import axios from 'axios'
import { AuthConsumer, AuthContext } from './Context/AuthContext'
import Sidebar from "./SideBar"

export default class PostFull extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      articles: [],
      article: {}
    }

  }
  componentDidMount() {
    axios.get(`https://forumcoreapplication.herokuapp.com/v1/articles/getById/${this.props.match.params.postId}`,
    
       'Basic dWFhOnBhc3N3b3JkQDEyMw==',
      //...data.getHeaders()
    
    ).then(res => {
     // console.log(res.data)
      // this.setState({articles: res.data})
      this.setState({ article: res.data })

    }).
      catch((error) => {
      //  console.log(error)
        this.props.history.push('/nomatch')
      })

  }
  deleteArticle = (e) => {
    e.preventDefault();
    //code to delete
    axios.delete(`https://forumcoreapplication.herokuapp.com/v1/articles/${this.state.article.id}`)
      .then(res => {
      //  console.log(res);
        this.componentDidMount();
      //  console.log(res.data);
      }).catch((err) => {
      //  console.log(err)
        this.props.history.push('/home')
      })
    this.setState({ expanded: false })
  }
  likeComment = (id) => {
    //console.log(id, "myid")
    axios.get(`https://forumcoreapplication.herokuapp.com/v1/articles/${id}`).then(res => {
      this.componentDidMount();
     // console.log(res.data);
    }).catch((err) => {
     // console.log(err)
    })
  }
  //   <div className="row justify-content-end">
  //   <div>
  //     {this.state.expanded ? (<Card>
  //       <ListGroup>
  //         <button className="btn-green-moon" onClick={() => { this.props.history.push({ pathname: '/editArticle', data: this.state.post }) }}>Edit</button>
  //         <button className="delete-btn" onClick={this.deleteArticle}>Delete</button>
  //       </ListGroup>
  //     </Card>) : null}

  //   </div>
  //   <svg onClick={() => this.setState({ expanded: !this.state.expanded })} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  //     <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  //   </svg>
  // </div>
//   <div className="row justify-content-end">
//   <svg onClick={() => this.setState({ expanded: !this.state.expanded })} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
//   </svg>
// </div>
// {this.context.isLogged ? this.state.expanded ? this.context.isAdmin ? (
//   <div>
//     <button className="btn-green-moon" onClick={() => { this.props.history.push({ pathname: '/editArticle', data: this.state.post }) }}>Edit</button>
//     <button className="delete-btn" onClick={this.deleteArticle}>Delete</button>
//   </div>
// )
//   : (null) : null : null}

  render() {
  //  const Datey = this.state.article.dateCreated
    return (

      <div className="container-fluid" style={{ backgroundColor: 'white', paddingTop: "20px", listStyle: "none" }}>
        <div className=" row">
          <AuthConsumer>
            {({ isAdmin }) => (<div>
              <div>{isAdmin ? <Sidebar /> : null}</div>
            </div>)}
          </AuthConsumer>
          <div className="container" style={{ backgroundColor: 'white', position: "center" }}>
            <Card className='mx-auto shadow' border="Secondary">
              <Card.Body>

               

                <div className="row justify-content-end">
                  <svg onClick={() => this.setState({ expanded: !this.state.expanded })} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </div>
                {this.context.isLogged ? this.state.expanded ? this.context.isAdmin ? (

                  <button className="delete-btn" onClick={this.deleteArticle}>Delete</button>
                )
                  : (<button className="btn-green-moon" onClick={this.likeComment}>Like</button>) : null : null}

                <div className="row justify-content-between" style={{ padding: "20px" }}>

                  <Card.Text >{this.state.article.username}</Card.Text>
                  <Card.Text className="date text-muted">{this.state.article.dateCreated}</Card.Text>
                </div>
                <Row>
                  <div  >
                    <Card.Title style={{ padding: '20px' }} >{this.state.article.title}</Card.Title>
                  </div>

                </Row>

                <Card.Img variant="top" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
                <div className="padding-top"></div>
                <Card.Text className="text-justify">
                  {this.state.article.content}
                </Card.Text>
                <div>
                  <div className="row justify-content-between padding-right">
                    <p className="padding-left"> {this.state.article.likes + "  Likes"}</p>
                    <div className="row justify-content-end">
                      <svg onClick={this.likeComment.bind(this, this.state.article.id)} className="bi bi-heart-fill text-danger" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>

                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }

}