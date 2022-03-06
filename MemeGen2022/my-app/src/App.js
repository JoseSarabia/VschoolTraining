import React from "react"
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import './header.css';
import MemeForm from "./MemeForm";
import  "./MemeForm.css";


export default function App(props) {
  return (
    <div>
      <Header/>
      <MemeForm/>
      <p>Top Text: {props.topText}</p>
      
      
    </div>
  )

  }

  
