import React from "react"

function Jock(props){
    return(
        <div className = "QueAndAns">
            <h3 style={{color: "red"}}>question: {props.Question}</h3>
            <h3 style={{color: "green"}}>Answer: {props.Answer}</h3> 
            <hr />
        </div>
    )
}

export default Jock