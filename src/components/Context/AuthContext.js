import React from 'react'
import { auth } from 'firebase/app'
import firebase from '../config/fbConfig'
import { generateUserDocument } from '../config/fbConfig'

const AuthContext = React.createContext({user: null})

class AuthProvider extends React.Component {
  state = { user: null, isAdmin: false}
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    
  }

  login(email, password) {
    
    firebase.auth().signInWithEmailAndPassword(email,password).then((u)=>{
      console.log("signed in",u)
      
    }).catch((err)=>{
      console.log(err)
    })
  
  }

  logout() {
    //this.setState({ user: null })
    auth().signOut().then(() => {
        console.log("user signed out")
    })
  }

  userDetails(){
    return(
      <div>
      <div>{this.state.user.displayName}</div>
      <div>{this.state.user.photoUrl}</div>
      </div>
    )
  }

  //keeps track of the user whenever the authentication changes
 componentDidMount = () =>{
  console.log("auth=",auth())
     auth().onAuthStateChanged(async userAuth => {
         const user = firebase.auth().currentUser
         // await generateUserDocument(userAuth);
         this.setState({user})
         console.log("on start :", user)
        
     });
 };

  render() {
    return (
      <AuthContext.Provider value={{isAuth:this.state.user, login:this.login, logout: this.logout, isAdmin: this.state.isAdmin}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
