import logo from './logo.svg';
import './App.css';
import React from 'react';
import Square from "./Square";
import "./style.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: //["1", "2","3", "4", "5",]
      ["black", "white", "black", "white"]
    }
    // lete us use the word (this) in the call back where we are calling the function
    this.handleDjSmall=this.handleDjSmall.bind(this)
    this.handlePartyDj=this.handlePartyDj.bind(this)
    this.ProsDj=this.ProsDj.bind(this)
    this.ProsDj2=this.ProsDj2.bind(this)
    this.BigTimeDj=this.BigTimeDj.bind(this)
    this.BigTimeDj2=this.BigTimeDj2.bind(this)
    this.BigTimeDj3=this.BigTimeDj3.bind(this)
    this.BigTimeDj4=this.BigTimeDj4.bind(this)
  }
 
  handleDjSmall() {
    
  if (this.state.color[0] !== "white") {
    this.setState({
      color: ["white", "white", "white", "white"]

    })


  } else {
    this.setState({
      color: ["black", "black", "black", "black"]
    })
  }

}

  handlePartyDj() {
   
     this.setState(function (preState) {
       return ({
        color: ["purple", "purple", preState.color[2], preState.color[3]]
       })
     
       
     })
   
 }

  ProsDj() {
    this.setState(function (preState){
     return ({
      color:[preState.color[0], preState.color[1], "blue", preState.color[3]]
     }) 
    })
  }

  ProsDj2() {
    this.setState (function(preState){
      return ({
        color:[preState.color[0], preState.color[1], "green", "blue"]
      })
    })
  }

  BigTimeDj() {
    this.setState (function(preState){
      return ({
        color:[ "gray",preState.color[1], preState.color[2], preState.color[3]]
      })
    })
  }

  
  BigTimeDj2() {
    this.setState (function(preState){
      return ({
        color:[preState.color, "red", preState.color[2], preState.color[3]]
      })
    })
  }

  BigTimeDj3() {
    this.setState (function(preState){
      return ({
        color:[preState.color, preState.color[1],"pink", preState.color[3]]
      })
    })
  }

  BigTimeDj4() {
    this.setState (function(preState){
      return ({
        color:[preState.color[0], preState.color[1], preState.color[2],"brown"]
      })
    })
  }



render() {
  return (
    <div className="container">


      {this.state.color.map(function (item) {
        return (
          <Square color={item} />

        )
      })}

      <button onClick={this.handleDjSmall}>Dj Small</button>
      
      <button onClick={this.handlePartyDj}>Party Dj</button>
    
      <button onClick={this.ProsDj}>Professional Dj</button>
      <button onClick={this.ProsDj2}>Professional Dj2</button>
      <button onClick={this.BigTimeDj}>Big Time Dj</button>
      <button onClick={this.BigTimeDj2}>Big TIme Dj2</button>
      <button onClick={this.BigTimeDj3}>Big Time Dj3</button>
      <button onClick={this.BigTimeDj4}>Big Time Dj4</button>
      
      
    </div>
  )
}
}





export default App
