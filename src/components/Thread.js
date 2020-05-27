import React,{Component} from 'react'
import {Threads} from '../data/data'
import {Card, Button, Jumbotron, Container, Row, Col} from 'react-bootstrap'
import {Replies} from '../data/data'

export default class PostFull extends Component{
  constructor(props){
    super(props)
    this.state = {
      question : this.props.history.location.data.question,
      title : this.props.history.location.data.title,
      author : this.props.history.location.data.author,
      

    }

  }
  componentDidUpdate(prevProps) {
    if (this.props.history.location.data !== prevProps.history.location.data) {
      this.fetchData(this.props.location.data);
      this.setState({question: this.props.history.location.data.question,
        label: this.props.history.location.data.label,
        author: this.props.history.location.data.author

      })

    }
   }

    render(){

      const repliesList = Replies.filter(reply => reply.articleid == 1 );
       
      const replyList = repliesList.map(reply=>{
        return(
          <ul style= {{paddingTop:'30px'}}>
          <Card className='mx-auto border-dark responsive' style={{padding:'30px' ,width: '50rem',float:'none' }}>
          <Row className= "border-bottom secondary">
           <Col> <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAMFBMVEXk5ueutLfd4OGpr7Ln6erGyszY29yxt7q9wsTBxsjh4+TN0dO2u77Q1NXU19nq7OzimcAIAAADEElEQVR4nO2b25qrIAxGOUROor7/24627pnaqhDqj/uC1RdYXxICEipEo9FoNBqNRqPRaDQaDOhugQWaSBljVJimG31IqN5JvRL9EOgWGxJ9lFq+oG009TNFottqrDJxmCqbDDsaa2DGimGh4A48HnTVVMiceSwpCpVEhnORGatqhCVDZCbgVWg8qtUtCi6SqJFfItpE2EwT6bH5odPlu0H3SBU6bGg7WGSphOzcgPNDHSMkc36AQeF4LEFBeVDPCgkyKJEZE43aCxUzJPPywWyF5LkiUhqICTs5sPQofkhkhJwlMzfhbVAQMWG2tdUEsY5LClZqxPF64hfsDGJDnli73z8Qi2cqEYHsx81kx+T/qZOitYMwYRymXxgQJkU9FrIZc871vyYIEZH79feKxdzrFJxPMB8aJSU7IkTmj3P+ORZ1uGf3Ngc621PHFMGs4QXuZwbuDoV5bNOIBrvCO95H4AUKr+PDquRB/vKBfRSv5Ld8C/Xg3Fzgr0EzS6XGHMFlqEC+uD4gn1RBdpINqQTVG/GcDxF0nUnGqiJOMlRv0PR0GQ9OcK7CPOVNZXbRb4HR2ldMzKuM6J39nRfL6Md75sVPl6BM380MRt00t15NaPqDbjEhCsGMQ+ddjHYhRue73hgl6gnR/DO9i48KeStYLW103RAE3oamMPqPNfPe2rT1g0LKEKkh/zvQdgr13IFGt/eo4Tg0MvaANjep3bcVKRntzbUupIqucR5c+SaFQsn19F9g3EVxmT0KrnC2LvEKF+qL7hzf8d/WLoWcU2sG3z7VYc3MUy7+i8otGqQcq8TSwwuJeF1Eni5lhUvmklLdqpSMe7KfvKBViD+mxqhgIlKiwntowlNhNRbCiSyT23yVa/vIB/lPAK/srHtolztXCFAPybjUwOZmIe8OrmBQwCbvXpKKJo9ccu4DK4QkLyhlw1i+SjokoP3mg2TTZ89wSklPXOokJ+O1Tq3kJPfk3LfJF5CYEYL3vlcSfbZOW3uanBcK8IT0wflITOl6DOfpUfWo9JeJRqPRaDT2+AFKvySqoM9dPAAAAABJRU5ErkJggg==" className= "rounded" style={{height:'50px', width:'50px'}}></img></Col>
           <Col> <Card.Title style={{padding:'30px'}} >{reply.author}</Card.Title></Col>
           <Col> <p className="text-muted">{reply.date}</p></Col>
          </Row>
          <Card.Body>
            <Card.Text className="text-justify"> {reply.content}
            </Card.Text>
            <Row>
            {reply.like}
            <button style={{style:'none'}}>
            <svg className="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </button>
            </Row>
          </Card.Body>
        </Card>
        </ul>
        )
      })
        return(
            <Jumbotron style={{backgroundColor:'#ffd1dc', paddingTop: "20px", listStyle:"none"}}>
            <Container style={{padding:'30px', backgroundColor: 'lightblue',position: "center"}}>
            <Card className='mx-auto responsive' border="Secondary" style={{backgroundColor: '#B0C4DE', width: '50rem',float:'none'}}>
            <Card.Title style={{padding:'30px'}} className="text-center border-bottom secondary">{this.state.title}</Card.Title>
      
            <Card.Body>
              <Card.Text className="text-justify ">
               {this.state.question}
              </Card.Text>
            </Card.Body>
          </Card>
          <div style= {{paddingTop:'30px'}}>
          {replyList}
          </div>
          </Container>
          </Jumbotron>
    )
    }   
}

