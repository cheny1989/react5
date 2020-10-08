import React from "react"

function BodyOfPage(){
    const firstName = "Chen";
    const lastName = "yaacov";

    return(
    <div>
            <hr></hr>
            <h3>Hello to BodyOfPage</h3>
            <p>Hello, my name is: <b>{firstName + " " + lastName}...</b></p>
            <p>another option: <b>{`${firstName} ${lastName}`}</b></p>
    </div>
    )
}

export default BodyOfPage