import React,{Component} from 'react'
import {stories} from '../data/data'

export default class PostFull extends Component{

    render(){
        const post = stories.find(post => post.id === this.props.match.params.postId);
        console.log(post)
        return(
            <div key={ post.id}>
            <h1>{ post.title }</h1>
            <img src={post.img} />
            <p>{post.body}</p>
        </div>
    )
    }   
}