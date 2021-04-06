import React from "react"
// line 3 creates a react component 
const Card= (props) => {
    let price ="$"
    if(props.citys.price > 1500 ){
        price= "$$$"
    } else if(props.citys.price > 1000){
        price = "$$"
    }
    let color = "green"
    if(props.citys.timeToGo === "spring"){
        color = "blue"
    }else if(props.citys.timeToGo === "summer"){
        color = "yellow"
    } else if (props.citys.timeToGo === "fall"){
        color = "orange"
    }
    return (
        
        <div style={style.container}> 
        
        <p>{props.citys.place}</p>
        <p>{price}{props.citys.price}</p>
        <img src={props.citys.picture} width={"100%"}/>
        <p>{props.citys.timeToGo}</p>
        </div>
    )
}
    const style = {
        container:{
            border:"1px solid red",
            margin: " 26px ",
            width: "20%"
            
            

        }
    }
// line 7 export the component to use in a different file
export default Card
