import React from "react"


function ArrayTest(){
    const newArrOfNames = ["Moshe, Izik, Ronen, Eli, Sigalit, Rona, Arnon, Orna"];
    
    const newArrOfnumber = [3, 5, 7, 10, 25, 87, 1, 103, 6];
    const filterfun = newArrOfnumber.filter((number) => number <12)
    // const sumFun = newArrOfnumber.reduce( (accumulator, currentValue)=> accumulator + currentValue);
    // const findfun = newArrOfnumber.find((number) => number <8)

    // console.log(sumFun)
    return(
        <div>
            <hr />
            <h1>show me a arry</h1>
            <p>{filterfun}</p>
            <input type="text"></input>
            <button type="submit" onClick={ArrayTest}>Click me</button>
        </div>
    )
}

export default ArrayTest