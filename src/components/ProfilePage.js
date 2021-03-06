/* eslint-disable */
import React from "react";
import { AuthConsumer,AuthContext } from './Context/AuthContext'
import { Modal } from 'react-bootstrap'


class ProfilePage extends React.Component {
  static contextType = AuthContext
  state = {
    file: {},
    imgUrl: '',
    oldPassword: '',
    newPassword: '',
    modal: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal })
  
  }
  changePassword =()=> {
    var data = {oldPassword: this.state.oldPassword, newPassword: this.state.newPassword}
    var config = {
      method: 'post',
      url: 'https://forumuaapplication.herokuapp.com/users/change-password',
      headers: {
        'Authorization': 'Basic dWFhOnBhc3N3b3JkQDEyMw==',
        'Authorization': `Bearer ${this.context.authTokens.access_token}`
        //...data.getHeaders()
      },
      data: data
    };
    axios(config).then(result => {
      this.context.setAuthTokens(result.data);
     // console.log("my context", this.context);
      this.setState({ isLoggedIn: true });
      this.props.unmount();
     // console.log("token :", result)

    }).catch(e => {
      alert("Account Information is wrong. Sign up if you are new to the site")
    });
  }

  render() {
    return (

      <AuthConsumer>
        {({currentUser }) => (
          <div className="container" style={{ backgroundColor: 'white', position: "center", paddingTop: '100px', paddingBottom: '200px' }}>
            <div style={{ backgroundColor: '#91BB7F', padding: '20px' }}>
              <div className="row justify-content-between" style={{ padding: "20px" }}>
                <img className="img-fluid img-thumbnail" src={"data:image/jpeg;base64,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"} alt="profile pic"
                />
                <div >
                  <div>
                    <h3 className="display-4 texty" >{currentUser ? currentUser.diplayName : "username"}</h3>
                  </div>
                  <div className="row justify-content-center">
                    <h3 className="italic texty">{currentUser ? currentUser.email : "email"}</h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="btn-green-moon" onClick={() => { this.setState({ modal: !this.state.modal }) }}>Change Password</button>
              </div>
            </div>
            <div>
              <Modal centered show={this.state.modal} onHide={() => { this.setState({ modal: !this.state.modal }) }}>
                <div className="container" style={{ backgroundColor: "white", padding: "30px" }}>
                  <div ><h2 className="text-left">Change Password</h2></div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group border-bottom border-dark">
                      <label htmlFor="name">Old Password</label>
                      <input type="password" className="form-control" id="oldPassword" style={{ background: 'none', border: "none" }} onChange={this.handleChange} />

                    </div>
                    <div className=" form-group border-bottom border-dark">
                      <label htmlFor="name">New Password</label>
                      <input type="text" id="newPassword" type="password" className="form-control" style={{ background: 'none', border: "none" }} onChange={this.handleChange} />
                    </div>

                    <div className="row justify-content-start" style={{ paddingLeft: "15px" }}>
                      <button className="btn btn-green-moon" type="submit" style={{ backgroundColor: "#11643D", color: "white" }} >Login</button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>

        )}
      </AuthConsumer>
    )
  }
}
export default ProfilePage;

