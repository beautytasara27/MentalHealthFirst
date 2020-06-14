import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Button, Table } from 'react-bootstrap'
import './styler.css'
import Pagination from "react-js-pagination";

const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-dark', 'bg-light'];
class DatatablePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentPage:1,
      postsPerPage:3
    }

    console.log("props", this.props)
  }

  handleClick = (rowId) => {
    this.props.props.history.push({ pathname: 'forum/' + rowId })
    console.log("row is", rowId)
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
        const currentPosts = this.props.data.slice(indexOfFirstPost, indexOfLastPost)

    const postList = currentPosts.map(post => {
      return (
        
          <tr className= "text" onClick={this.handleClick.bind(this, post.id)}>
            <td>
              <div id="profile" className={colors[this.numberFromText(post.username)]} >
                <div id='name'>{post.username.charAt(0)}</div>
              </div>
              <div className="faint">{post.username}</div>
            </td>
            <td className="bold">{post.title}</td>
            <td className="date">{"Likes: "+post.likes}</td>
            <td className="date">{new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(Date.parse(post.dateCreated))}</td>
          </tr>
       
      )
    })

    return (
     
      <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr >
                <th scope="col"></th>
                <th scope="col"> </th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {postList}
            </tbody>
          </table>
        
        <Pagination
          activePage={this.state.currentPage}
          itemsCountPerPage={3}
          totalItemsCount={this.props.data.length}
          pageRangeDisplayed={3}
          itemClass="page-item"
          linkClass="page-link"
          onChange={this.handlePageChange.bind(this)}
        />
      
      </div>


    );
  }
}

const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
      <div className="row justify-content-end">

        <input
          style={{ backgroundColor: 'white', borderColor: "green" }}
          ref={n => input = n}
          type="text"
        />
        <button style={{ backgroundColor: "#11643D", color: "white" }} className="btn" onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default DatatablePage;