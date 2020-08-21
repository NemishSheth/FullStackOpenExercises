import React from 'react'

const Notification = ({message,warning}) =>{
    console.log("\n\n",warning,message)
    let notiStyle 
    if(warning === true && message !== ""){
        notiStyle ={
            color: "red",
            fontStyle: "italic",
            fontSize: 32,
            border:"2px solid red",
            borderRadius:"20px",
            padding:"15px"
        }
    }
    else if(message !== ""){
        notiStyle ={
            color: "green",
            fontStyle: "italic",
            fontSize: 32,
            border: "2px solid green",
            borderRadius:"20px",
            padding:"15px"
        }
    }
    return(
        <>
        <div style={notiStyle}>{message}</div>
        <br/><br/>
        </>
    )
}

export default Notification