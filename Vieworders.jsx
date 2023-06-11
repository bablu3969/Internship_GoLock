import React, { useEffect, useState } from "react";
import axios from "axios";
import Inputform from "./Inputform";
function Vieworders(props) {
  const [believe, setBelieve] = useState([]);
  // console.log(props.var);
  const z = props.var;
  const data = { USERNAME: z };
  var y = 0;
  console.log("yes");

  function render_comp(a) {
    return (
    <div>
    <button >
        {a.order_id}
        </button>
        <br/>
        <br/>
        </div>
     ) 
}
  useEffect(()=>{
  async function fun1() {
    try {
      const res = await axios.post("http://localhost:5000/sendorders", data);
      console.log("responded for request");
      console.log(res.data[0]);
      setBelieve(res.data);
      // console.log(y);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
  fun1()
}
  ,[])
  return (
    <div>
      {believe.map(render_comp)}
      <Inputform/>
      {/* {console.log(believe)}     */}
    </div>
  );
}
export default Vieworders;
// localStorage.setItem("isloggedin",z)
// let a=localStorage.getItem("isloggedin");
// console.log(a);
