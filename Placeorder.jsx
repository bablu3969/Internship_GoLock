import React, { useRef, useState } from "react";
import '../index.css';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"
import axios from "axios"; 
function randomStr(len, arr) {
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans +=
            arr[(Math.floor(Math.random() * arr.length))];
    }
    return ans;
    // console.log(ans);
}
let z =randomStr(5,"A1BC2DE3F4GHI5JK6LM7NOP8QR9ST0UVWXYZ");
function Placeorders(props){

    const [toval,setToval] = useState(props.val);
    const [to,setTo] = useState("");
    const [from,setFrom] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [transporter,setTransporter] = useState("");

    async function handle_submit(event){
        event.preventDefault();
        var data={ORDER_ID:toval,TO:to,FROM:from,QUANTITY:quantity,TRANSPORTER:transporter}
        var url="http://localhost:5000/push"
        try{
            const res = await axios.post(url,data);
            console.log("request sent");
            console.log(res);
    
          }
          catch(error){
            console.log(error);
          }
        }

    
        function handle_change(event)
        {
        const {name,value} = event.target;
        if(name==="to"){
            setTo(value);
            setToval(z);
            console.log(toval);

        }
        else if(name==="from"){
            setFrom(value);
        }
        else if(name==="quantity"){
            setQuantity(value);
        }

        else{
            setTransporter(value);
        }
    }

    return(
        <div>
            <heading>
            <h3 style={{marginLeft:"35%"}}>manufracturer page</h3>
                <NavLink className="links" to="/manufracturer/placeorders">Placeorders</NavLink> 
                <NavLink className="links" to="/manufracturer/viewmessages">Viewmessages</NavLink>
                <br/>
                you can place your order by filling the form below
            </heading>
            <form onSubmit={handle_submit}>
            
            <input name="orderid" id="foor" type="text" placeholder="oder_id" autoComplete="off"   value={z} />
            <input name="to" type="text" placeholder="to_location" onChange={handle_change}   value={to}/>
            <input name="from" type="text" placeholder="from_location" onChange={handle_change}   value={from}/>
            <input name="quantity" type="Number" placeholder="quantity" onChange={handle_change}   value={quantity}/>
            <input name="address" type="text" placeholder="address" autoComplete="off"  value={props.address}/>
            <input name="transporter" type="text" placeholder="transporter" onChange={handle_change}  value={transporter}/>
            <button type="submit">Push</button>
            </form>
            <p>functionality implemented but styling not done</p>
        </div>
    )
}
export default Placeorders;