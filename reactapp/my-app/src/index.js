import React from 'react';
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      
    </div>
  )
}

ReactDom.render(<MyInfo/>, document.getElementById("root"))


// function MyInfo(){
//   return (
//     <div>
//     <h1> Jose Sarabia</h1>
//     <p> This is where i have lived</p>
//     <ul>
//     <li> Atlanta</li>
//     <li> Titon</li>
//     <li>Omega</li>
//     </ul>
//     </div>
//   )
// }
// ReactDom.render(<h1>hello</h1>, document.getElementById('root'))