import React from "react"


function Checkbox(props){
    
    // const a = 4;
    // const b = 2
    // if(a>b){
    //     alert(a + " is a big to: " + b)
    // }else{
    //     alert("error!")
    // }
    return(
        <div> 
        <input type="checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p> 
        <p>{props.item.date}</p>
        </div>
    )
}

export default Checkbox