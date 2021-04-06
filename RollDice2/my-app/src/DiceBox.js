import logo from './logo.svg';
import './App.css';
import "./style.css"
import React, {Component}  from "react"



class DiceBox extends Component {
  constructor(){
      super()
      this.state = {
      number: null
      }
      this.RollDice=this.RollDice.bind(this)
  }


     RollDice(){
        const randomNumber= Math.floor(Math.random() * 6 ) +1
        this.setState({number: randomNumber})
      }


   render(){
     return (
        <div>

          <h1 className="DiceContainer">{this.state.number}</h1>
          <button className="stylebutton" onClick={this.RollDice}>Roll Dice</button>


        </div>


     )
   }
}
  export default DiceBox


