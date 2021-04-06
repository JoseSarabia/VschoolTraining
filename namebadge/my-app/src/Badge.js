import React from "react"
import "./style.css"

class Badge extends React.Component {
    render() {
        console.log(this.props)
        return(
            
            <div className="badgeStyle">
            <h2> Badge </h2>
            <h1> Full Name:{this.props.badge.firstName}
            {this.props.badge.lastName}
            </h1>
            <h1> Email :
            {this.props.badge.email} 
            </h1>
           <h1> Birth :
           {this.props.badge.birth}
        
           </h1> 

            
            <h1> Phone :

            {this.props.badge.phone}
            </h1>

            <h1> Favorite Foods :
            {this.props.badge.favoriteFood}
            </h1>

            

            <h1> Tell us about yourself. :

            {this.props.badge.about}

            </h1>
                 


            </div>
        )
    }
    
}

export default Badge