import React, { useState } from "react";
import '../index.css';
 
function Heading(props){
    return(
    <div className="forms" style={{backgroundColor:"lightgreen",width:"20%"}}>
        <h1>{props.val?"LOGIN":"SIGNUP"}</h1>
        <p>Enter your username</p>
    </div>
    )
}
export default Heading;