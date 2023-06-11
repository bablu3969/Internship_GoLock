import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
function Loginapp(props){
    const [head,setHead] = useState(1);
    function execute(val){
        setHead(val);
    }
    function idea(a,b,c,d,e){
        props.fun(a,b,c,d,e)
    }
    function climax(a){
        props.pre(a)
    }
    return(
        <div>
            <Heading
            val={head}
            />
            <Form
            fun1={idea}
            fun={execute}
            fun3={climax}
            />
        </div>
    )
}
export default Loginapp;