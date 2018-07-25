import React, {Component} from "react";
import axios from "axios";




class Results extends Component{
    constructor(props){
        super();
    }
 
saveArticle=()=>{
    console.log(this.props.id)
    var savedObject={
        id:this.props.id,
        article:this.props.articles
    }
    axios.post('/saveArticle',savedObject).then(function(){
        console.log('sent to the back end!')
    })

 }
 render(){
return(
            <div className='container'>
            <li>{this.props.articles} <button onClick={this.saveArticle}>Save</button></li>
            </div>
        )
    }
    
}

export default Results;