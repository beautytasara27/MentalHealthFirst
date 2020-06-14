/* eslint-disable */
import React from 'react'

const AuthContext = React.createContext({user: null})

class AuthProvider extends React.Component {
  state = { user: null, isAdmin: false}
  constructor() {
    super()
    
  }

  
  render() {
    return (
      <AuthContext.Provider value={{isAuth:this.state.user, isAdmin: this.state.isAdmin}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
