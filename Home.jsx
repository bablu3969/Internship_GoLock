import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../src/index.css"
function Home(){
    const [kill,setKill] = useState(0);
    function handle(){
            setKill(1)
    }
    return(
        <div>
            <h1>
                Welcome to home!
            </h1>
            <h4 >this is site for manufracturer,he places orders and the transporter delivers!</h4>
            <button style={{height:"5%",width:"8%",backgroundColor:"yellow"}} onClick={handle}>Login</button>
            {kill?<Navigate to="/login"/>:<Navigate to="/"/>}
        </div>
    )
}
export default Home;