/* eslint-disable */
import React, { Component } from 'react'
import { Row, Col, Container, Jumbotron, Card, Button, CardColumns, CardDeck } from 'react-bootstrap'
import { BrowserRouter, Link, Switch } from 'react-router-dom'
import { stories } from '../data/data'
import Dotdotdot from 'react-dotdotdot'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import Loader from 'react-loader'
import NetworkError from './NetworkError'
import { Articles } from './Context/DataStore'
import { CardText } from 'react-bootstrap/Card'

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Articles: [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get("http://localhost:7003/v1/articles").then(res => {

            console.log(res.data)
            this.setState({ Articles: res.data, loaded: true })
        }).
            catch((error) => {
                console.log(error)
                this.props.history.push({pathname: '/NetworkError'})

            })
    }
    handleClick = (post) => {
        this.props.history.push({ pathname: '/PostFull/' + post.id })
        console.log("post is", post)
    }
    render() {
        //
        console.log("my articles", this.state.Articles)
        const postList = this.state.Articles.slice(0, 3).map(post => {
            return (
                <li key={post.id} className="list">
                    <Container >
                        <button className="link-btn" onClick={this.handleClick.bind(this, post)} >
                            <Card className='mx-auto' border="Secondary">
                                <div className="row"><div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 "><Card.Img variant="top" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
                                </div>
                                    <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 ">
                                        <Card.Body><Card.Text>{post.username}</Card.Text>
                                            <Card.Text>{post.dateCreated}</Card.Text>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Dotdotdot clamp={4}><p>{post.content}</p></Dotdotdot>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </button>
                    </Container>
                </li>



            )
        })
        const cardDeckk = this.state.Articles.slice(1).map(post => {
            return (
                <Container key={post.id}>
                    <li className="list">
                        <Container className="container">
                            <button className="link-btn" onClick={this.handleClick.bind(this, post)} >
                                <Card className='mx-auto' border="Secondary" >
                                    <div>
                                        <Card.Text>{post.username}</Card.Text>
                                        <Card.Text>{post.dateCreated}</Card.Text>
                                    </div>
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />

                                    <Card.Body >
                                        <Card.Title>{post.title}</Card.Title>
                                        <Dotdotdot clamp={4}><p>{post.content}</p></Dotdotdot>
                                    </Card.Body>

                                </Card>
                            </button>
                        </Container>
                    </li>

                </Container>
            )
        })

        return (
            <Loader loaded={this.state.loaded}>
                <div>

                    <Jumbotron className="fluid border-bottom secondary container-Jumbotron" >
                        <div>
                            <ul>{postList}</ul>
                        </div>
                    </Jumbotron>

                    <Container>
                        <h3 className="display-4">Recent Posts</h3>
                        <Carousel responsive={responsive}>
                            {cardDeckk}
                        </Carousel>
                    </Container>
                </div>
            </Loader>





        )
    }
}

export default Home;