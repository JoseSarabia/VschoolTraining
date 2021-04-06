import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "./style.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      companyEmployed:"",
      vote:""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (

      <form className= "container" onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" 
        value={this.state.firstName}
        placeholder=" First Name " 
        onChange={this.handleChange} />
        <br />
        <br/>
        <input type="text" name="lastName"
         value={this.state.lastName}
        placeholder=" Last Name " 
        onChange={this.handleChange} />
        <br />
        <br/>
        <input type="text" name="age"
        value={this.state.age}
         placeholder=" Persons Age " 
         onChange={this.handleChange} />
        <br />
        <br/>
        <input type="text" name="address" 
        value={this.state.address}
        placeholder=" Home Address " 
        onChange={this.handleChange} />
        <br/>
        <br/>
        <input type="text" name="companyEmployed"
        value={this.state.companyEmployed}
         placeholder=" Employed Where " 
         onChange={this.handleChange} />
         <br/>
         <input type="text" name="vote"
         value={this.state.vote}
         placeholder="Did You Vote? " 
         onChange={this.handleChange} />
        <h1>
          {this.state.firstName}
          {this.state.lastName}
          {this.state.age}
          {this.state.address}
          {this.state.companyEmployed}
          {this.state.vote}
          
          <button >Submit</button>
          <br/>
          <br/>
          
          </h1>
          
      </form>
  
    )
  }

}


export default App;
