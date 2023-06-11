import React, { useState } from "react";
import '../index.css';
function Form(props){
    const [user,setUser] = useState("");
    const [pswd,setPswd] = useState("");
    const [addr,setAddr] = useState("");
    const [exp,setExp] = useState(0);
    const [role,setRole] = useState("manufracturer");
    function change(event){
        const {name} = event.target;
        if(name==="login"){
            setExp(0)
            props.fun(exp);
        
        }
        else{
            setExp(1)
            props.fun(exp);
      
        }
    }
    function handle_change(event){
        const {name,value} = event.target;
        if(name==="username"){
            setUser(value)
            console.log(value);
        }
        else if(name==="password"){
            setPswd(value);
            console.log(value);
        }
        else if(name==="address"){
            setAddr(value);
        }
        else{
            setRole(value);
        }
    }
    function handle_submit(event){
        event.preventDefault();
        if(exp===0){
            props.fun3(user);
            props.fun1(user,pswd,exp,"","");
    }
    else{
        console.log(role);
        props.fun1(user,pswd,exp,addr,role);
    }
}
    return(
    <div className="forms" style={{backgroundColor:"lightgrey",width:"30%",padding:"1%",borderRadius:"10%"}}>
        <form onSubmit={handle_submit}>
        <input className="inputs" name="username" type="text" placeholder="username" onChange={handle_change} autoComplete="off"  value={user}/>
        <br/>
        <br/>
        <input className="inputs" name="password" type="password" placeholder="password" onChange={handle_change} autoComplete="off" value={pswd}/>
        <br/>
        <br/>
        {exp?<input className="inputs" name="re-password" type="password" placeholder="password" onChange={handle_change} autoComplete="off" value={pswd}/>:null}
        <br/>
        <br/>
        {exp?<div><label for="role">Choose a role:</label>
        <select name="purpose" id="role" onChange={handle_change} value={role}>
            <option value="Manufracturer">Manufracturer</option>
            <option value="Transporter">Transporter</option>
        </select>
        <br/>
        <br/></div>:null}
        {exp?<div><input className="inputs" name="address" type="text" placeholder="address" onChange={handle_change} autoComplete="off" value={addr}/>
        <br/>
        <br/></div>:null}
        <button  style={{width:"18%",backgroundColor:"lightblue"}} type="submit" id="pass" >Submit</button>
        <br/>
        <br/>
        <button  style={{width:"16%"}} name="login"   onClick={change} >Login</button>
        <button  style={{width:"16%"}} name="signup"  onClick={change}>signup</button>
        </form>
        <h3>You will be redirected to Manufracturer or Transporter based on your role</h3>
    </div>
)
    

}
export default Form;
// export {tryit}