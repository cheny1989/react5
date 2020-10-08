import React from "react"

function Product(props){

    return(
        <div>
            <h2>{"name: " + props.Product.name}</h2>
            <p>{"age: " + props.Product.age}</p>
            <p>{"city: " + props.Product.city}</p>
            <p>{"type of car: " + props.Product.car}</p>
                <hr />
        </div>
    )
}

export default Product