import React, {Component} from "react";
import axios from "axios";
import Results from "./Results"
var articlesArray=[];
class Search extends Component{
    state={
        articles:[],
    }
    //pass these down as props to Results
     

    userSearch=()=>{
        var searchedFor={
            topic:document.getElementById('topic').value,
            startyear:document.getElementById('startyear').value,
            endyear:document.getElementById('endyear').value
        }
        console.log(searchedFor)

        // use the results to run a search
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
        const APIKEY = "&apikey=668fcc4ba0224106aa8ccc507d6f5c54";
        axios.get(BASEURL + "q="+ searchedFor.topic + APIKEY).then((response=>{
            for(let i=0;i<response.data.response.docs.length;i++){
              articlesArray.push(response.data.response.docs[i].headline)
            }
            this.setState({articles:articlesArray})
           
        }));
    }

    clearHistory=()=>{
        this.setState({articles:this.state.articles.splice(0,this.state.articles.length)})
        console.log("Search history has been cleared")
     
    }

    render(){
        
        return(
            <div className='container'>
            <h1>Search Route </h1>
            <form>
                <label>Topic:
                    <input type='text' id='topic'/>
                </label>
            </form>
            <br/>
            <form>
                <label>Start Year:
                    <input type='text' id='startyear'/>
                </label>
            </form>
            <br/>
            <form>
                <label>End Year:
                    <input type='text' id='endyear'/>
                </label>
            </form>
            <br/>
            <button onClick={this.userSearch}>Search</button>
            <button onClick={this.clearHistory}>Clear History</button>
            {this.state.articles.map(article=>(
            <Results articles={article.main}
                       key={this.state.articles.indexOf(article)}
                       id={this.state.articles.indexOf(article)}/>))}
            </div>
        )
    }
}


export default Search;
