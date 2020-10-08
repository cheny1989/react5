import React from "react"

function Datecurrentely(){
        //check currentely date
        const date = new Date(); // new Date(2020, 10, 3, 11); לבדוק לפי תאריך ושעה את השינוי
        const hours = date.getHours();
        let timeOfDay;

        const styleOfDateByTime={
            backgroundColor: "yellow",
            paddingTop: "20px",
            paddingBottom: "20px",
            textAlign: "center",
            fontSize: "25px",
        }
        
        if(hours < 12){
            timeOfDay= "morning"
            styleOfDateByTime.color = "red"
        }else if (hours >= 12 && hours < 17){
            timeOfDay= "afternoon"
            styleOfDateByTime.color = "black"
            styleOfDateByTime.backgroundColor = "green"

        }else{
            timeOfDay= "nigth"
            styleOfDateByTime.color = "blue"
        }

        const changeSytle = {
            color: "red",
            backgroundColor: "black",
            fontSize: "15px" // ""  - necessary
        }

    return(
        <div>
            <div style={styleOfDateByTime}>Good {timeOfDay}</div>
            <hr></hr>
            <p style={{color: "yellow", backgroundColor: "black", fontSize: "25px"}}>currentely time:{date.getHours() % 24}</p>
            <p style={changeSytle}>change sytle - this paragraph</p>
        </div>
    )
}

export default Datecurrentely