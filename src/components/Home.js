/* eslint-disable */
import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import Dotdotdot from 'react-dotdotdot'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import Loader from 'react-loader'
import { AuthConsumer } from './Context/AuthContext'
import SideBar from '../components/SideBar'
import SearchSideBar from '../components/SearchSideBar'

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
        axios.get("https://forumcoreapplication.herokuapp.com/v1/articles").then(res => {

            console.log(res.data)
            this.setState({ Articles: res.data, loaded: true })
        }).
            catch((error) => {
                console.log(error)
                this.props.history.push({ pathname: '/NetworkError' })

            })
    }
    handleClick = (post) => {
        this.props.history.push({ pathname: '/PostFull/' + post.id, state: post.dateCreated })
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
                                            <Card.Text className=" text-muted">{new Intl.DateTimeFormat("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "2-digit"
                                            }).format(Date.parse(post.dateCreated))}</Card.Text>
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
                    <Container className="container">
                        <button className="link-btn" onClick={this.handleClick.bind(this, post)} >
                            <Card className='mx-auto' border="Secondary" >
                                <div>
                                    <Card.Text>{post.username}</Card.Text>
                                    <Card.Text className="date text-muted">{new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                    }).format(Date.parse(post.dateCreated))}</Card.Text>
                                </div>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />

                                <Card.Body >
                                    <Card.Title>{post.title}</Card.Title>
                                    <Dotdotdot clamp={4}><p>{post.content}</p></Dotdotdot>
                                </Card.Body>

                            </Card>
                        </button>
                    </Container>
                </Container>
            )
        })
        // <AuthConsumer>
        //                     {({ currentUser }) => (<div>
        //                         <div>{currentUser && currentUser.name == 'admin' ? <SideBar /> : <SearchSideBar data={this.state.Articles} handleClick={this.handleClick} />}</div>
        //                     </div>)}
        //                 </AuthConsumer>

        return (

            <Loader loaded={this.state.loaded}>
                <div className="row justify-content-between">
                    
                    <SearchSideBar data={this.state.Articles} handleClick={this.handleClick} />
                        <div className="fluid border-bottom secondary container-Jumbotron" >
                            <div className="container">
                                <ul>{postList}</ul>
                            </div>
                        </div>
                    
                    <div className="container-fluid border-top secondary" style={{ paddingTop: "30px" }}>
                    <h3 className="display-4 texty" style={{ fontSize: '4vw' }}>Recent Posts</h3>
                    <div className="container">
                        <Carousel responsive={responsive}>
                            {cardDeckk}
                        </Carousel>
                        </div>
                    </div>

                </div>
            </Loader>






        )
    }
}

export default Home;