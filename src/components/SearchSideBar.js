/* eslint-disable */
import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import './styler.css'


export default class SearchSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        console.log(this.props.props)
    }
    updateSearch = (e) => {
        this.setState({ search: e.target.value.substr(0, 20) })
    }
    render() {
        const filteredPosts = this.props.data.filter(
            (post) => {
                return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )
        const articles = filteredPosts.map(post => {
            return (
                <div className="list border-bottom secondary" key={post.id}>
                    <li>
                        <a onClick={this.props.handleClick.bind(this,post)}>{post.title}</a>
                    </li>
                </div>
            )
        })
        return (
            <div className="faint card-item" style={{ padding: "30px"}}>
                <input type="text" id="myInput" onChange={this.updateSearch} placeholder="Search for Articles.."></input>
                <Nav defaultActiveKey="/home" className="flex-column" >
                    {articles}
                </Nav>
            </div>
        )
    }
}