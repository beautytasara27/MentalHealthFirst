/* eslint-disable */
import React, { Component } from 'react'
import { Card, Jumbotron, Container, Button, Image } from 'react-bootstrap'
import axios from 'axios'
import './styler.css'
import Loader from 'react-loader'
import { AuthConsumer } from './Context/AuthContext'
import Sidebar from './SideBar'
import './styler.css'

const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-dark', 'bg-light'];
export default class PostFull extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expandedThread: false,
      expandedReply: false,
      myid: null,
      text: '',
      replycard: false,
      replies: [],
      post: {},
      loaded: false,
      reload: false,

    }
  }

  componentDidMount = () => {
    console.log("id of: ", this.state.id)
    axios.get("https://forumcoreapplication.herokuapp.com/v1/comments/" + this.props.match.params.threadId).then(res => {

      console.log(res.data)
      this.setState({ replies: res.data, loaded: true })
    }).
      catch((error) => {
        console.log(error)

      })
    axios.get(`https://forumcoreapplication.herokuapp.com/v1/posts/getPostById/${this.props.match.params.threadId}`).then(res => {
      this.setState({ post: res.data })
    })
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value })
  }
  postReply = () => {
    this.setState({ replycard: !this.state.replycard }, () => { console.log("truth", this.state.replycard) })
    axios.post("https://forumcoreapplication.herokuapp.com/v1/comments/", { content: this.state.text, postId: this.props.match.params.threadId, username: "taaah" }).then(res => {
      console.log(res.data);
      this.componentDidMount();
    }).catch((err) => {
      console.log(err)
    })

  }

  likeComment = (id) => {
    console.log(id, "myid")
    axios.get(`https://forumcoreapplication.herokuapp.com/v1/comments/like/${id}`).then(res => {
      this.componentDidMount();
      console.log(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }

  deleteComment = (id) => {
    console.log(id, "myid")
    axios.delete("https://forumcoreapplication.herokuapp.com/v1/comments/" + id).then(res => {
      this.componentDidMount();
      console.log(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }
  numberFromText = (text) => {
    // numberFromText("AA");
    const charCodes = text.charCodeAt(0)
    return parseInt(charCodes, 10) % colors.length;
  }


  render() {


    const replyList = this.state.replies.map(reply => {
      return (

        <ul key={reply.id} style={{  listStyle: "none", paddingLeft: "0px" }}>
          <Card className='mx-auto responsive shadow p-3 mb-5 bg-white rounded' >
            <Card.Body>
              <div className="row justify-content-end" >
                <div>
                  {this.state.expandedReply & this.state.myid == reply.id ? (<div>
                    <Button className="delete-btn" onClick={this.deleteComment.bind(this, reply.id)}>Delete</Button>
                  </div>) : null}
                </div>
                <svg onClick={() => this.setState({ expandedReply: !this.state.expandedReply, myid: reply.id })} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
              <div className="border-bottom secondary row align-items-center " style={{ paddingLeft: '30px' }}>
                <div className='col-md-1' > <div id="profile" className={colors[this.numberFromText(reply.username)]}  >
                  <div id='name'>{reply.username.charAt(0)}</div>
                </div></div>
                <div className='col-md-8' > <Card.Title style={{ padding: '30px' }} >{reply.username}</Card.Title></div>
                <div className='col-md-2' > <p className="text-muted">{reply.dateCreated}</p></div>
              </div>
              <Card.Text className="text-justify border-bottom secondary padding-top" style={{ paddingBottom: "30px" }}> {reply.content}
              </Card.Text>
              <div>
                <div className="row justify-content-between padding-right">
                  <p className="padding-left"> {reply.likes + "  Likes"}</p>
                  <div className="row justify-content-end">
                    <svg onClick={this.likeComment.bind(this, reply.id)} className="bi bi-heart-fill text-danger" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>

                  </div>
                </div>
              </div>

            </Card.Body>
          </Card>
        </ul>
      )
    })

    return (
      <Loader loaded={this.state.loaded}>
        <Jumbotron className="container-Jumbotron list">
          <div className="row">
            <AuthConsumer>
              {({ isAdmin }) => (<div>
                <div>{isAdmin ? <Sidebar /> : null}</div>
              </div>)}
            </AuthConsumer>
            <Container style={{ backgroundColor: "#F7F8F7" }}>
              <Card className='mx-auto responsive shadow p-3 mb-5 bg-white rounded' border="Secondary">
                <Card.Body>
                  <div className="row justify-content-end">
                    <div >
                      {this.state.expandedThread ? (<div ><Card style={{ width: "100px" }}>

                        <button className="delete-btn" >Delete</button>

                      </Card></div>) : null}

                    </div>
                    <svg onClick={() => this.setState({ expandedThread: !this.state.expandedThread })} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>


                  </div>

                  <div className="border-bottom secondary row align-items-center" style={{ paddingLeft: '30px' }}>
                    <div className='col-md-1' > <Image roundedCircle className="row justify-content-center align-items-center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAMFBMVEXk5ueutLfd4OGpr7Ln6erGyszY29yxt7q9wsTBxsjh4+TN0dO2u77Q1NXU19nq7OzimcAIAAADEElEQVR4nO2b25qrIAxGOUROor7/24627pnaqhDqj/uC1RdYXxICEipEo9FoNBqNRqPRaDQaDOhugQWaSBljVJimG31IqN5JvRL9EOgWGxJ9lFq+oG009TNFottqrDJxmCqbDDsaa2DGimGh4A48HnTVVMiceSwpCpVEhnORGatqhCVDZCbgVWg8qtUtCi6SqJFfItpE2EwT6bH5odPlu0H3SBU6bGg7WGSphOzcgPNDHSMkc36AQeF4LEFBeVDPCgkyKJEZE43aCxUzJPPywWyF5LkiUhqICTs5sPQofkhkhJwlMzfhbVAQMWG2tdUEsY5LClZqxPF64hfsDGJDnli73z8Qi2cqEYHsx81kx+T/qZOitYMwYRymXxgQJkU9FrIZc871vyYIEZH79feKxdzrFJxPMB8aJSU7IkTmj3P+ORZ1uGf3Ngc621PHFMGs4QXuZwbuDoV5bNOIBrvCO95H4AUKr+PDquRB/vKBfRSv5Ld8C/Xg3Fzgr0EzS6XGHMFlqEC+uD4gn1RBdpINqQTVG/GcDxF0nUnGqiJOMlRv0PR0GQ9OcK7CPOVNZXbRb4HR2ldMzKuM6J39nRfL6Md75sVPl6BM380MRt00t15NaPqDbjEhCsGMQ+ddjHYhRue73hgl6gnR/DO9i48KeStYLW103RAE3oamMPqPNfPe2rT1g0LKEKkh/zvQdgr13IFGt/eo4Tg0MvaANjep3bcVKRntzbUupIqucR5c+SaFQsn19F9g3EVxmT0KrnC2LvEKF+qL7hzf8d/WLoWcU2sG3z7VYc3MUy7+i8otGqQcq8TSwwuJeF1Eni5lhUvmklLdqpSMe7KfvKBViD+mxqhgIlKiwntowlNhNRbCiSyT23yVa/vIB/lPAK/srHtolztXCFAPybjUwOZmIe8OrmBQwCbvXpKKJo9ccu4DK4QkLyhlw1i+SjokoP3mg2TTZ89wSklPXOokJ+O1Tq3kJPfk3LfJF5CYEYL3vlcSfbZOW3uanBcK8IT0wflITOl6DOfpUfWo9JeJRqPRaDT2+AFKvySqoM9dPAAAAABJRU5ErkJggg==" style={{ height: '50px', width: '50px', float: 'left', position: "left" }} /></div>
                    <div className='col-md-8' > <Card.Title style={{ padding: '30px' }} >{this.state.post.username}</Card.Title></div>
                    <div className='col-md-2' > <p className="text-muted">{this.state.post.dateCreated}</p></div>

                  </div>

                  <Card.Title className="text-justify border-bottom secondary" style={{ padding: '30px' }}>
                    {this.state.post.title}
                  </Card.Title>
                  <Card.Text className="text-justify ">
                    {this.state.post.content}
                  </Card.Text>
                  <div className="row justify-content-between">
                    <svg onClick={() => this.setState({ replycard: !this.state.replycard })} className="bi bi-reply-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L9.079 4.1A.716.716 0 0 0 8 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z" />
                    </svg>
                    <svg onClick={this.likeComment.bind(this, this.state.post.id)} className="bi bi-heart-fill text-danger" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                  </div>
                </Card.Body>
              </Card>
              {this.state.replycard ? (<div>
                <Card className='mx-auto responsive' border="Secondary" style={{ backgroundColor: '#B0C4DE', float: 'none' }}>
                  <input id="text" type="text" onChange={this.onChange} style={{ height: "300px" }}></input>

                </Card>
                <Button className="btn-green-moon" onClick={this.postReply}>Reply</Button>
              </div>) : null}

              <div style={{ paddingTop: '30px' }}>
                {replyList}
              </div>

            </Container>
          </div>
        </Jumbotron>
      </Loader>
    )
  }
}

