import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import log1 from "./images/l1.jpg";
import axios from "axios";


const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const[username,setUsername]=useState(" ");
    const[password,setPassword]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault(); 
         axios.post('http://localhost:8082/test',username,password)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      {login(username);navigate("/", { replace: true });}
        
    }
    return ( 
        <div className="log">
            <div className="log-img">
                <img src={log1} alt=""/>
            </div>
            <div className="log-a">
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <label>UserName</label>
                <input type="text" name="username"  id="name" value={username} placeholder="enter username"onChange={(e) => setUsername(e.target.value)}/><br/>
                {/* <label>Password</label>
                <input type="password" name="password"  id="password" value={password} onChange={(e) => setPassword(e.target.value)}/> */}
                <br/>
                <button  >Login</button>
            </form>
            </div>
        </div>
     );
}
 
export default Login;