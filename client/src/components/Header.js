import {Link} from "react-router-dom";
import React from "react";
import "../App.css"



const Header = ()=>{
    return(
    <div className="container">
    <h1>NYT Search App </h1>
    <Link to='/'> Home </Link>
    <Link to='/search'> Search </Link>
    <Link to='/results'> Results </Link>
    <Link to='/save'> Saved Articles </Link>
    </div>
    )
}

export default Header;