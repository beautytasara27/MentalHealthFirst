import React, { Component } from 'react'
import './styler.css'
import Pagination from "react-js-pagination";

const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-dark', 'bg-light'];
class DatatablePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentPage:1,
      postsPerPage:10,
      search:""
    }
   
   // console.log("props", this.props)
  }

  handleClick = (rowId) => {
    this.props.props.history.push({ pathname: 'forum/' + rowId })
  //  console.log("row is", rowId)
  }
  handlePageChange = (pageNumber) => {

    this.setState({ currentPage: pageNumber });
}


 numberFromText = (text) =>{
  // numberFromText("AA");
  const charCodes =text.charCodeAt(0)
  return parseInt(charCodes, 10) % colors.length;
}


updateSearch =(e)=>{
this.setState({search: e.target.value.substr(0,20)})
}




  render() {
    const filteredPosts = this.props.data.filter(
      (post)=>{
        return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
        const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

    const postList = currentPosts.map(post => {
      return (
        
          <tr className= "text" onClick={this.handleClick.bind(this, post.id)}>
            <td>
              <div  className={`profile ${colors[this.numberFromText(post.username)]} `} >
                <div className='name'>{post.username.charAt(0)}</div>
              </div>
              <div className="username">{post.username}</div>
            </td>
            <td className="bold card-item">{post.title}</td>
            <td className="date username">{"Likes: "+post.likes}</td>
            <td className="date username">{new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(Date.parse(post.dateCreated))}</td>
          </tr>
       
      )
    })

    return (
     
      <div className="table-responsive">
      <input className="username" type="text" id="myInput" onChange={this.updateSearch} placeholder="Search for Keywords.."></input>
          <table className="table table-hover" >
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
          itemsCountPerPage={this.state.postsPerPage}
          totalItemsCount={this.props.data.length}
          pageRangeDisplayed={3}
          itemClass="page-item username"
          linkClass="page-link"
          onChange={this.handlePageChange.bind(this)}
        />
      
      </div>


    );
  }
}



export default DatatablePage;