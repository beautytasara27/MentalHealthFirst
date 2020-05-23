import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './components/Contact'
import NavBar from './components/CustomNavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './components/Context/AuthContext';
import About from './components/About'
import Forum from './components/Forum'
import SignUp from './components/SignUp'
import Login from './components/Login'
import PostFull from './components/PostFull'
import PasswordReset from './components/PasswordReset';
import ImageUpload from './components/ImageUpload';
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div>
    <Router>
    <AuthProvider>
    <div>
      <NavBar/>
      
      <Route exact path="/" component={Home}/>
      <Route path="/forum" component={Forum}/>
      <Route path="/login" component={Login}/>
      <Route path="/PostFull/:postId" component={PostFull}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/resetpassword" component={PasswordReset}/>
      <Route path="/imageupload" component={ImageUpload}/>
      <Route path="/profilepage" component={ProfilePage}/>
      
    </div>
    </AuthProvider>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
