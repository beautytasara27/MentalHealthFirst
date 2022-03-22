import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Sidebar from './SideBar';
import axios from 'axios'
import '../components/styler.css'
import Pagination from "react-js-pagination";
import {AuthContext} from './Context/AuthContext'

const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-dark', 'bg-light'];
export default class ManageuserAccounts extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            users: [],
            refresh: false,
            loading: false,
            currentPage: 1,
            postsPerPage: 3,
            prev: 0,
            next: 0,
            lastVisible: 0,
            firstVisible: 0,
            

        };

    }
    componentDidMount = () => {
        var auth = this.context.authTokens.access_token
        var config = {
            method: 'get',
            url: 'https://forumuaapplication.herokuapp.com/api/users',
            headers: { 
              'Authorization': `Bearer ${auth}`
            }
          };
          
          axios(config)
          .then( (response) =>{
          //  console.log(response)
            this.setState({users:response.data})
            
          })
          .catch( (error) =>{
          //  console.log(error);
          });
          
    }
    deleteUser = (postId) => {
        axios.delete(`https://forumuaapplication.herokuapp.com/api/users/${postId}`).then((res) => {
            alert("user deleted");
            this.setState({ resfreh: !this.state.refresh })
        }).catch((err) => {
            console.log(err);
        })
    }
    paginate = (number) => {
        this.setState({ currentPage: number })
    }
    clickNext = (number) => {
        this.setState({ currentPage: number + 1, lastVisible: this.state.lastVisible + 1 })
    }
    clickPrev = (number) => {
        this.setState({ currentPage: number - 1, firstVisible: this.state.firststVisible + 1 })
    }
    handlePageChange = (pageNumber) => {

        this.setState({ currentPage: pageNumber });
    }
    numberFromText = (text) =>{
        // numberFromText("AA");
        const charCodes =text.charCodeAt(0)
        return parseInt(charCodes, 10) % colors.length;
      }

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
        const currentPosts = this.state.users.slice(indexOfFirstPost, indexOfLastPost)
        const users = currentPosts.map((post) => {
            return (
                <ul key={post.id} className="list">
                    <li>
                        <div>
                            <ListGroup.Item>
                                <div className="row ">
                                    <div id="profile" className={colors[this.numberFromText(post.name)]}>
                                        <div id='name'>{post.name.charAt(0)}</div>
                                    </div>
                                    <div className="col ">{post.name}</div>
                                    <div className="col"><p>{post.email}</p></div>
                                    <div className="row justify-content-end">
                                        <div className=" col "><button className="delete-btn" onClick={this.deleteUser.bind(this, post.id)}>Delete</button></div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </div>
                    </li>
                </ul>
            )
        })


        return (
            <div className="row">
                <Sidebar />
                <div className="container">
                    <Card>
                        <Card.Header className="display-4">All Users</Card.Header>
                        <ListGroup variant="flush">
                            {users}
                        </ListGroup>
                    </Card>
                    <Pagination
                        activePage={this.state.currentPage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.state.users.length}
                        pageRangeDisplayed={3}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        )

    }
}