import logo from './logo.svg';
import './App.css';
import DiceBox from "./DiceBox"
import React, {Component}  from "react"



class App extends Component {
  render () {
    return(
      
      <div className={"InRowDice"}>
      <DiceBox/>
      <DiceBox/>
      <DiceBox/>
      <DiceBox/>
      <DiceBox/>
      </div>
    )
  }
}
  export default App


