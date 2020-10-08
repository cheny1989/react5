import React from "react"

function TestLink(props){
    console.log("props: " + props)
    return(
        <div className = "contantCard">
            <hr />
            <img className="sizaOfImage" src={props.contantCard.imgUrl}/>
            <h3>name: {props.contantCard.name}</h3>
            <p>phone: {props.contantCard.phone}</p>
            <p>Email: {props.contantCard.email}</p>
        </div>
    )
}

export default TestLink