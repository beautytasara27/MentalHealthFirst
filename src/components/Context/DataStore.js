import React from 'react'
import axios from 'axios'
const GetData = React.createContext()



class DataStore extends React.Component {
    state = {articles : null}
    constructor(){
        super()
    }

    componentDidMount(){
        axios.get( "http://localhost:7003/v1/articles").then(res=> {
            const articles = res.data;
            this.setState({articles})
            console.log(articles)
        }).
        catch((error)=>{
            console.log(error)
        })
        //const data = proxy('/articles', {target: "http://localhost:7003/v1", changeOrigin: true})
      //  console.log(data)

    }
    render(){
        return(
            <GetData.Provider value={{Articles : this.state.articles}}>
            {this.props.children}
            </GetData.Provider>
        )
    }


}

const GetDataConsumer = GetData.Consumer

export {GetDataConsumer, DataStore}