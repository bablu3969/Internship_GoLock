import React from "react";
import '../index.css';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"
import Heading from "../login/Heading";
function Viewmessages(){
    return (
        <div>
            <h3 style={{marginLeft:"35%"}}>manufracturer page</h3>
            <heading>
                <NavLink className="links" to="/manufracturer/placeorders">Placeorders</NavLink> 
                <NavLink className="links" to="/manufracturer/viewmessages">Viewmessages</NavLink>
                <br/>
            </heading>
            <h1>
                apparently not done!
            </h1>
        </div>
    )
}
export default Viewmessages;