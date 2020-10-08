import React from "react"

function CheckboxInput(){

    const styleOfCheckbox={
        color: "blue",
    }

    return(
        <div>
            <p style= {styleOfCheckbox}>chack me - 1</p>
            <input type="checkbox"></input>

            <p style= {styleOfCheckbox}>chack me - 2</p>
            <input type="checkbox"></input>

            <p style= {styleOfCheckbox}>chack me - 3</p>
            <input type="checkbox"></input>

            <p style= {styleOfCheckbox}>chack me - 4</p>
            <input type="checkbox"></input>
        </div>
    )
}

export default CheckboxInput