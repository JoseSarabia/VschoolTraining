
import './App.css';
import React, { Component } from "react";
import "./style.css"
import InputForm from "./InputForm"
import Badge from "./Badge"

class App extends Component {
  constructor() {
    super()
    this.state = {
     listOfBadges:[]
     
      

    
    }
    this.PeopleInfo= this.PeopleInfo.bind(this)
    
  }

   PeopleInfo(values){
     
          this.setState(function(prevState){
            const newState= prevState
            return newState.listOfBadges.push(values)
          })
   }

//       newPeople(values){
     
//     this.setState(function(prevState){
//       const newState= prevState
//       return newState.listOfBadges.push(values)
//     })
// }



  render() {
      
      // this.state.listOfBadges.map((eachBadge,index) =>  console.log(eachBadge))
    
  //  console.log(this.state)

    return (

      <div className="input-container">

        <InputForm addBadge={this.PeopleInfo}/>
         {/* eachBadge is an object */}
         
        {this.state.listOfBadges.map((eachBadge,index) => <Badge key={index} badge={eachBadge}/>)}
       
        {/* <input style={{width: "300%", position: "relative", right: "420px"}} type="text" 
        name="firstName" placeholder="First Name" value={this.state.firstName} 
        minlength="3" onChange={this.handleChange} required/> */}


      </div>
  
    )
  }

}


export default App;
