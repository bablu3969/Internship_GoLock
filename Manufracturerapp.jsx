import React from "react";
import '../index.css';
import Placeorders from "./Placeorder";
import Viewmessages from "./Viewmessages";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"
function Manufracturerapp(){

    return (
      
                <div>
                <h3 style={{marginLeft:"35%"}}>manufracturer page</h3>
                <NavLink className="links" to="/manufracturer/placeorders">Placeorders</NavLink> 
                <NavLink className="links" to="/manufracturer/viewmessages">Viewmessages</NavLink>
                </div>
            
      
    )
}
export default Manufracturerapp;
//<Placeorders
// val={randomStr(5,"A1BCD2EFG3HIJ4KLMN05OPQR6STU7VWX8YZ9")}/>
// {/* <NavLink to="/profile/placeorders">Placeorders</NavLink>
//             <NavLink to="/profile/viewmessage">Viewmessage</NavLink> */}
//             {/* <Placeorders val={randomStr(5,"A1BCD2EFG3HIJ4KLMN05OPQR6STU7VWX8YZ9")}/>
//             <Viewmessages/> */}
//             {/* <Outlet/> */}