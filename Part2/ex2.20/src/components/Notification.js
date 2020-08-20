import React from 'react'

const Notification = ({message,warning}) =>{
    console.log("\n\n",warning,message)
    let notiStyle 
    if(warning === true){
        notiStyle ={
            color: "red",
            fontStyle: "italic",
            fontSize: 32
        }
    }
    else{
        notiStyle ={
            color: "green",
            fontStyle: "italic",
            fontSize: 32
        }
    }
    return <div style={notiStyle}>{message}</div>
}

export default Notification