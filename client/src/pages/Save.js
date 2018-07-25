import React, {Component} from "react";
import axios from "axios"


class Save extends Component{
    state={
        savedArticles:[],
    }

    componentDidMount(){
        axios.get('/savedArticles').then(function(data){
            console.log(data)
        }).catch(function(err){console.log(err)})
    }

    render(){
        return(
            <h1>Saved Articles Route </h1>
        )
    }
}

export default Save;