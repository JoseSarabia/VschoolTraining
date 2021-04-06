import React, { Component } from "react"



class InputForm extends Component {
    constructor() {
        super()
        this.state = {
        
          firstName: "",
          lastName: "",
          birth: "",
          email: "",
          phone:"",
          favoriteFood :"",
          about:""
        
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
      }

      handleSubmit(e){
          e.preventDefault()
        this.props.addBadge(this.state)
        this.setState({
            firstName: "",
            
           lastName: "",
           birth: "",
           email: "",
           phone:"",
           favoriteFood :"",
           about:""
            

        })
      }

      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
    
        return (


            <form className= "container" onSubmit={this.handleSubmit}>
                <div className="containerRow">
                <input type="text" name="firstName" 
        value={this.state.firstName}
        placeholder=" First Name " 
        onChange={this.handleChange} />

        <input type="text" name="lastName"
         value={this.state.lastName}
        placeholder=" Last Name " 
        onChange={this.handleChange} />
                </div>
        
        
        <div className="containerRow">
        <input type="text" name="birth"
        value={this.state.birth}
         placeholder=" Date of Birth " 
         onChange={this.handleChange} />
        
        <input type="text" name="email" 
        value={this.state.email}
        placeholder=" Email Address " 
        onChange={this.handleChange} />
    
        </div>

        <div className="containerRow"  >

        <input type="text" name="phone"
        value={this.state.phone}
         placeholder=" Phone " 
         onChange={this.handleChange} />
         
         <input type="text" name="favoriteFood"
         value={this.state.favoriteFood}
         placeholder="What food do you like ? " 
         onChange={this.handleChange} />
        
        </div>


        <textarea name="about"
                    value={this.state.about}
                    onChange={this.handleChange}
                    placeholder="Tell us about yourself"
                />

        <button type="submit" >Submit</button>
        
        
      </form>
        )
    }

    

}

export default InputForm
         