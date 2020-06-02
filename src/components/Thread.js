import React,{Component} from 'react'
import {Card, Jumbotron, Container, Row, Col, ListGroup,Button} from 'react-bootstrap'
import {Replies} from '../data/data'
import axios from 'axios'


export default class PostFull extends Component{
  constructor(props){
    super(props)
    this.state = {
      question : this.props.history.location.data.question,
      title : this.props.history.location.data.title,
      author : this.props.history.location.data.author,
      id: this.props.history.location.data.id,
      expandedThread: false,
      expandedReply: false,
      text: '',
      replycard: false,
      replies: []
      

    }

  }
  componentDidMount=()=>{
    console.log("id of: ",this.state.id)
    axios.get( "http://localhost:7003/v1/comments/"+ this.state.id).then(res=> {
            
      console.log(res.data)
      this.setState({replies: res.data})
  }).
  catch((error)=>{
      console.log(error)
  
})
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
   onChange = (e) =>{
     e.preventDefault();
     this.setState({[e.target.id]:e.target.value })
   }
   postReply = () =>{
     //code to post the reply
     axios.post("http://localhost:7003/v1/comments/",{content:this.state.text, postId: this.state.id, username: "taaah"}).then(res=>{
      console.log(res.data);
      this.setState({replycard: false})
    }).catch((err)=>{
      console.log(err)
    })

   }
   likeComment =(id) => {
     console.log(id, "myid")
     axios.patch("http://localhost:7003/v1/comments/"+ id).then(res=>{
       console.log(res.data);
     }).catch((err)=>{
       console.log(err)
     })
   }

    render(){

       
      const replyList = this.state.replies.map(reply=>{
        return(
          <ul key= {reply.id} style= {{paddingTop:'30px'}}>
          <Card className='mx-auto border-dark responsive' style={{padding:'30px' ,width: '50rem',float:'none' }}>
          <Row className= "border-bottom secondary">
           <Col> <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAMFBMVEXk5ueutLfd4OGpr7Ln6erGyszY29yxt7q9wsTBxsjh4+TN0dO2u77Q1NXU19nq7OzimcAIAAADEElEQVR4nO2b25qrIAxGOUROor7/24627pnaqhDqj/uC1RdYXxICEipEo9FoNBqNRqPRaDQaDOhugQWaSBljVJimG31IqN5JvRL9EOgWGxJ9lFq+oG009TNFottqrDJxmCqbDDsaa2DGimGh4A48HnTVVMiceSwpCpVEhnORGatqhCVDZCbgVWg8qtUtCi6SqJFfItpE2EwT6bH5odPlu0H3SBU6bGg7WGSphOzcgPNDHSMkc36AQeF4LEFBeVDPCgkyKJEZE43aCxUzJPPywWyF5LkiUhqICTs5sPQofkhkhJwlMzfhbVAQMWG2tdUEsY5LClZqxPF64hfsDGJDnli73z8Qi2cqEYHsx81kx+T/qZOitYMwYRymXxgQJkU9FrIZc871vyYIEZH79feKxdzrFJxPMB8aJSU7IkTmj3P+ORZ1uGf3Ngc621PHFMGs4QXuZwbuDoV5bNOIBrvCO95H4AUKr+PDquRB/vKBfRSv5Ld8C/Xg3Fzgr0EzS6XGHMFlqEC+uD4gn1RBdpINqQTVG/GcDxF0nUnGqiJOMlRv0PR0GQ9OcK7CPOVNZXbRb4HR2ldMzKuM6J39nRfL6Md75sVPl6BM380MRt00t15NaPqDbjEhCsGMQ+ddjHYhRue73hgl6gnR/DO9i48KeStYLW103RAE3oamMPqPNfPe2rT1g0LKEKkh/zvQdgr13IFGt/eo4Tg0MvaANjep3bcVKRntzbUupIqucR5c+SaFQsn19F9g3EVxmT0KrnC2LvEKF+qL7hzf8d/WLoWcU2sG3z7VYc3MUy7+i8otGqQcq8TSwwuJeF1Eni5lhUvmklLdqpSMe7KfvKBViD+mxqhgIlKiwntowlNhNRbCiSyT23yVa/vIB/lPAK/srHtolztXCFAPybjUwOZmIe8OrmBQwCbvXpKKJo9ccu4DK4QkLyhlw1i+SjokoP3mg2TTZ89wSklPXOokJ+O1Tq3kJPfk3LfJF5CYEYL3vlcSfbZOW3uanBcK8IT0wflITOl6DOfpUfWo9JeJRqPRaDT2+AFKvySqoM9dPAAAAABJRU5ErkJggg==" className= "rounded" style={{height:'50px', width:'50px'}}></img></Col>
           <Col> <Card.Title style={{padding:'30px'}} >{reply.username}</Card.Title></Col>
           <Col> <p className="text-muted">{reply.dateCreated}</p></Col>
           <svg onClick={()=>this.setState({expandedReply:true})} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
         </svg>
         <div>
         {this.state.expandedReply? (<Card>
           <ListGroup>
           <ListGroup.Item><Button>Delete</Button></ListGroup.Item>
           </ListGroup>
           </Card>): null}
         
         </div>
          </Row>
          <Card.Body>
            <Card.Text className="text-justify"> {reply.content}
            </Card.Text>
            <Row>
            {reply.likes}
            <button  style={{style:'none'}}>
            <svg  onClick={this.likeComment(reply.id)} className="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
            <Row>
            <Card.Title style={{padding:'30px'}} className="text-center border-bottom secondary">{this.state.title}</Card.Title>
          
            <svg onClick={()=>this.setState({expandedThread:true})} className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            <div>
            {this.state.expandedThread? (<Card>
              <ListGroup>
              <ListGroup.Item><Button>Delete</Button></ListGroup.Item>
              </ListGroup>
              </Card>): null}
            
            </div>
            </Row>
           
      
            <Card.Body>
              <Card.Text className="text-justify ">
               {this.state.question}
              </Card.Text>
              <div>
              <svg onClick={()=>this.setState({replycard: true})} class="bi bi-reply-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L9.079 4.1A.716.716 0 0 0 8 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z"/>
              </svg>
            </div>
            </Card.Body>
          </Card>
          {this.state.replycard? ( <div>
            <Card className='mx-auto responsive' border="Secondary" style={{backgroundColor: '#B0C4DE', width: '50rem',float:'none'}}>
            <input id="text" type="text" onChange={this.onChange} style={{height:"300px"}}></input>
            
            </Card>
            <Button onClick={this.postReply}>Reply</Button>
            </div>) : null}
          
          <div style= {{paddingTop:'30px'}}>
          {replyList}
          </div>
         
          </Container>
          </Jumbotron>
    )
    }   
}

