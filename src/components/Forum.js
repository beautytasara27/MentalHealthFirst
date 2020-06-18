/* eslint-disable */
import React, { Component } from 'react'
import DatatablePage from './DataTable'
import axios from 'axios'
import './styler.css'
import Loader from 'react-loader'
import { AuthConsumer, AuthContext } from './Context/AuthContext'
import Sidebar from './SideBar'
import {Modal} from 'react-bootstrap'
import Login from './Login'

export default class Forum extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false,
      modal: false
    }

  }
  componentDidMount() {
    axios.get("https://forumcoreapplication.herokuapp.com/v1/posts").then(res => {

      this.setState({ posts: res.data, loaded: true })
      console.log("my posts", this.state.posts)

    }).
      catch((error) => {
        console.log(error)
        this.props.history.push({ pathname: "/NetworkError" })
      })
  }
  createPost = (e) => {
    e.preventDefault();
    (this.context.currentUser ? this.props.history.push('/createThread') : this.setState({ modal: !this.state.modal }))
  
  }
  UnmountModal = () => {
    this.setState({ modal: !this.state.modal })
  }
  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <div className="row">
          <AuthConsumer>
            {({ isAdmin }) => (<div>
              <div>{isAdmin ? <Sidebar /> : null}</div>
            </div>)}
          </AuthConsumer>
          <div className="container border primary text shadow">
            <hr />
            <div className="row justify-content-between align-items-center padding-div">
              <div><h3 className="display-4 text" >All Threads</h3></div>
              <div style={{ paddingRight: "15px" }}>
                <button className="button btn-sm" onClick={this.createPost}>Create New Post</button>
              </div>
            </div>
            <p className="card-item">Our forum members are people, maybe like yourself, who experience mental health difficulties or who have had them at some point in their life. Amongst our membership there is a wealth of expertise that has been developed through having to deal with mental health issues.</p>
            <span className="span-bottom"></span>
            <hr />
            <span className="span-top"></span>
            <DatatablePage data={this.state.posts} props={this.props} />

          </div>
        </div>
        <Modal
          centered
          show={this.state.modal} onHide={() => this.setState({ modal: !this.state.modal })}><Login pass={this.props} unmount={this.UnmountModal} /></Modal>
      </Loader>
    )
  }
}

