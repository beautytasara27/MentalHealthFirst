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
import Thread from './components/Thread'
import createArticle from './components/CreateArticle'
import createThread from './components/createThread'
import UserMyposts from './components/UserMyposts'
import DataTablePage from './components/DataTable'
import editArticle from './components/editArticle'
import NetworkError from './components/NetworkError';
import Header from './components/Header'
import ManageuserAccounts from './components/ManageuserAccounts'
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div >
    <Router>
    <AuthProvider>
    <div >
      <Header/>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/forum" component={Forum}/>
      <Route path="/login" component={Login}/>
      <Route path="/PostFull/:postId" component={PostFull}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/resetpassword" component={PasswordReset}/>
      <Route path="/imageupload" component={ImageUpload}/>
      <Route path="/profilepage" component={ProfilePage}/>
      <Route path="/forum/:threadId" component={Thread}/>
      <Route path="/createArticle" component={createArticle}/>
      <Route path="/createThread" component={createThread}/>
      <Route path="/myPosts" component={UserMyposts}/>
      <Route path="/NetworkError" component={NetworkError}/>
      <Route path="/DataTable" component={DataTablePage}/>
      <Route path="/editArticle" component={editArticle}/>
      <Route path="/accounts" component={ManageuserAccounts}/> 
      <Route path="/nomatch" component={NoMatch}/>
    </div>
    </AuthProvider>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
