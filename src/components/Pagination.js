import React, { Component } from 'react'
export default class Pagination extends Component{
    constructor(props){
        super(props);
    }


    render(){
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
          pageNumbers.push(i);
        }
        return(
            <nav>
            <a className='page-link'> >> </a>
            <ul className='pagination'>
              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <a onClick={() => this.props.paginate(number)} href='#' className='page-link'>
                    {number}
                  </a>
                </li>
              ))}
            </ul>
            <a className='page-link'> >> </a>
          </nav>
        )
    }
}