import React from "react"
import './Header.css';
import NavBar from'./NavBar.js';

//why wont image show up in header
function Header(){
    return (
        <div className="TopSection">
            <NavBar/>
            <header>clean</header>
        </div>
        
    )
}

export default Header