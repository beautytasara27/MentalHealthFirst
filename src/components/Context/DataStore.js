import React from 'react'
import axios from 'axios'





export const Articles = (() =>{
    var articles = []
        axios.get( "http://localhost:7003/v1/articles").then(res=> {
            articles = res.data;
            console.log(articles)
            return(
                res.data
            )
        }).
        catch((error)=>{
            console.log(error)
        })
        
        //const data = proxy('/articles', {target: "http://localhost:7003/v1", changeOrigin: true})
      //  console.log(data)

    })