
import React, {Component} from "react";


class ClassTest extends Component{

    render(){

        const styleClass = {
            color: "white",
            fontSize: "40px",
            backgroundColor: "#254737"
        }

        const AnyArray = [1, 2, 3, 4]
        // if (AnyArray.length > 2)
        // alert ("the array > 2")

        return(
            <div>
                <h1 style={styleClass}>This is class extends Component </h1>
                {AnyArray}
            </div>
        )
    }
}

export default ClassTest