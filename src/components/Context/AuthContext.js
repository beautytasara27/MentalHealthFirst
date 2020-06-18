/* eslint-disable */
import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext()
const existingTokens = (localStorage.getItem("tokens"));
class AuthProvider extends React.Component {

  constructor() {
    super();
    this.state = { user: null, isAdmin: false, isLogged: false, authTokens: existingTokens }

  }
  setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState({ authTokens: data, isLogged : true });
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
        this.setState({ user: response.data , isLogged : true })
        if (response.data.name == "admin"){
          this.setState({isAdmin: true})
        }
        else{
          this.setState({isAdmin:false})
        }
        console.log("my user", JSON.stringify(response.data), "mystate user ", this.state.user);
      })
      .catch( (error) =>{
        console.log(error);
      });
  }


  render() {
    return (
      <AuthContext.Provider value={{ currentUser: this.state.user, isAdmin: this.state.isAdmin, isLogged:this.state.isLogged, authTokens: this.state.authTokens, setAuthTokens: this.setTokens, logout: this.logout }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer, AuthContext }
