/* eslint-disable */
import React from 'react'

const AuthContext = React.createContext({user: null})
const existingTokens = JSON.parse(localStorage.getItem("tokens"));
class AuthProvider extends React.Component {

  state = { user: null, isAdmin: false, authTokens: existingTokens}
  constructor() {
    super();
    
    
  }
 setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    this.setState({authTokens:data});
  }

  
  render() {
    return (
      <AuthContext.Provider value={{isAuth:this.state.user, isAdmin: this.state.isAdmin, authTokens: this.state.authTokens, setAuthTokens: this.setTokens}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer , AuthContext}
