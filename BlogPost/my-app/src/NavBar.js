import React from "react"
import  "./NavBar.css"

function NavBar(props){
    return (
        <div className="NavBarParent">

        <div>
            <a>Start Bootstrap</a>
        </div>

        <div >
            <ul className="NavList">
                <li><a>HOME</a></li>
            
                <li><a>ABOUT</a></li>
                <li><a>SAMPLE POST</a></li>
                <li><a>CONTACT</a></li>
            </ul>
        </div>

        </div>

        
    )
}

export default NavBar