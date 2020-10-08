import React from "react"

function Food(props){

    return(
        <div className = "styleFoodComponent">
            <hr />
            <h3>{"name: " + props.Food.name}</h3>
            <p>{"color: " + props.Food.color}</p>
            <p>{"size: " + props.Food.size}</p>
            <img className="sizaOfImage" src={props.Food.imgUrl}/>

        </div>
    )
}


export default Food