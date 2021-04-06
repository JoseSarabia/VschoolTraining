import React from "react"
import './Blog.css';



function Blog(props){
    return (
        <div className="blogContainer">
    <p className="title1">{props.author.title}</p> 
     <p className= "subTitle">{props.author.subTitle}</p>
     <p className="authorDate">posted by {props.author.author} on {props.author.date}</p>

        </div>
    )
}

export default Blog