/* eslint-disable */
import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext({ user: null })
const existingTokens = (localStorage.getItem("tokens"));
class AuthProvider extends React.Component {

  state = { user: null, isAdmin: true, authTokens: existingTokens }
  constructor() {
    super();


  }
  setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState({ authTokens: data });
    this.getUser()
    console.log("triggered", this.state.authTokens)

  }
  logout = () => {
    this.setTokens()
    localStorage.removeItem('tokens');
  }
  getUser = () => {
    console.log("tokkv", this.state.authTokens)
    var config = {
      method: 'get',
      url: 'http://localhost:7004/api/users/me',
      headers: {
        'Authorization': `Bearer ${this.state.authTokens.access_token}`
      }
    };

    axios(config)
      .then((response) =>{
        this.setState({ user: response.data })
        console.log("my user", JSON.stringify(response.data), "mystate user ", this.state.user);
      })
      .catch( (error) =>{
        console.log(error);
      });
  }


  render() {
    return (
      <AuthContext.Provider value={{ isAuth: this.state.user, isAdmin: this.state.isAdmin, authTokens: this.state.authTokens, setAuthTokens: this.setTokens, logout: this.logout }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer, AuthContext }
