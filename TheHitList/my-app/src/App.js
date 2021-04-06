import logo from './logo.svg';
import './App.css';
import React from "react";
import "./style.css";
import Header from "./Header.js";

// class App extends React.Component{
//   constructor(){
//       super()
//       this.state = {
//         // Targets is an array
//           targets: []

//       }

//   }
//   //   means component has render.
//   componentDidMount(){
//     fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
//         .then(response => {
//           console.log(response)
//           // response
//         } )
//         .then(data => {
//             this.setState({
//                 targets: data
//             })
//         })
//  }

//  render() {
//    return(
//         "hey"
//    )
   
//     // const hitlist = this.state.targets.map((people, index) => <h1 key={index}>{people.targets}</h1>)
//     //     return (
//     //         <div>
//     //             <h1>{hitlist}</h1>
//     //        </div>
//     //     )
//      }
// }



// //  next i will have component lifecycles











//  export default App






















class App extends React.Component{
  constructor(){
      super()
      this.state = {
          targets: []
      }
  }
  componentDidMount(){
      fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
          .then(response => response.json())
          .then(data => {
            
              this.setState({
                  targets: data
              })
          })
  }
  render() {
  //  const hitlist = this.state.targets.map((people, index) => <h1 key={index}>{people.targets}</h1>)
  const hitList = this.state.targets.map((people) =>
  
  <div className="tiger">
     
    <img src={people.image} ></img>
    <li key={people.name}>
      {people.name}
     
    </li>
    
    
  </div>)

  return (
        
          
            <div>
              <div>
        
            </div>
            <Header/>
              <h1>{hitList}</h1>
              
         </div>
      )
  }
}



export default App;
