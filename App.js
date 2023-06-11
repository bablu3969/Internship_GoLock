import {BrowserRouter,Routes,Route,NavLink, Navigate, useNavigate} from "react-router-dom"
import axios from "axios";
import './index.css';
import Loginapp from "./login/Loginapp";
import Manufracturerapp from "./manufracturer/Manufracturerapp";
import Placeorders from "./manufracturer/Placeorder";
import Viewmessages from "./manufracturer/Viewmessages";
import Home from "./Home";
import React,{ useState } from "react";
import Vieworders from "./transporter/Vieworders";
function App() {
  function worry(a){
    setLast(a);
  }
//   function randomStr(len, arr) {
//     let ans = '';
//     for (let i = len; i > 0; i--) {
//         ans +=
//             arr[(Math.floor(Math.random() * arr.length))];
//     }
//     return ans;
//     // console.log(ans);
// }
    const [last,setLast] = useState("");
    const [navi,setNavi] = useState("");
    const navigate = useNavigate();
   
     async function laugh(user,pass,stat,addr,role){
      // console.log("here");
      //  console.log(user,pass,stat,addr,role);
       const data={USERNAME:user,PASSWORD:pass,STATUS:stat,ADDRESS:addr,ROLE:role}
      //  console.log(typeof(data));
       const url = "http://localhost:5000/login"
       const url1 = "http://localhost:5000/signup"
 if(stat===1){
  try{
        const res = await axios.post(url1,data);
        console.log("request sent");
        console.log(res);

      }
      catch(error){
        console.log(error);
      }
    }
    
    else
 
    {    
      
     try
     {
       
      const res1= await axios.post(url,data);
      console.log(res1.data);
      var y = res1.data;
      if(y==="manufracturer"){
        setNavi("manufracturer");
        navigate("/manufracturer");
      }
      else{
        if(y==="Transporter"){
        setNavi("transporter");
        navigate("/transporter");
      }
    }
      }
     catch(error)
     {
      console.log("error occured");
      console.log(error);
      }  
  }

}
  return (
    <div style={{backgroundColor:"lightyellow",width:"100vph",height:"100vph"}}>
      <h1>Go Lock</h1>
    <header className="navbar">
      <nav>
        <NavLink className="class1 links" to="/">HOME</NavLink>
        <NavLink className="class1 links" to="/login">LOGIN</NavLink>
        {/* <NavLink  to="/manufracturer">Manufracturer</NavLink> */}
      </nav>
    </header>
    
     {/* {(navi==="manufracturer")?<Navigate to="/manufracturer"/>:(navi==="transporter")?<Navigate to="/home"/>:null} */}
    <Routes>
      <Route path="/login" element={<Loginapp fun={laugh} pre={worry}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/manufracturer" element={<Manufracturerapp/>}/>
      {/* {console.log("ney")} */}
      {/* {console.log(randomStr("A1BC2DE3F4GHI5JK6LM7NOP8QR9ST0UVWXYZ",5))} */}
      <Route path="/manufracturer/placeorders" element={<Placeorders />}/>
      <Route path="/manufracturer/viewmessages" element={<Viewmessages/>}/>
      <Route path="/transporter" element={<Vieworders var={last}/>}/>
    </Routes>
    </div>
  );
}

export default App;
 //      axios.post(url,data).then(response => {
        
  //       console.log('Response:', response.data);
  //       // Handle the response as needed
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // Handle the error as needed
  //     });