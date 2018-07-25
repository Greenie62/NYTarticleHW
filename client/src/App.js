import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import  "./App.css";
import Search from "./pages/Search.js";
import Results from "./pages/Results.js";
import Header from "./components/Header.js";
import Save from "./pages/Save.js";


const App = () =>{
  return(
  <Router>
    <div className='container'>
    <Header/>
    <Route exact path="/search" component={Search}/>
    <Route exact path="/results" component={Results}/>
    <Route exact path="/save" component={Save}/>
    </div>
    </Router> 
    
  )
}


export default App;