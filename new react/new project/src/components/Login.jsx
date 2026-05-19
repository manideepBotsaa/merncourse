import React,{useState,useRef} from "react";
import "./login.css";
function Login()
{
    const [name,setName]=useState("");
    const [pwd,setPwd]=useState("");
    const h3ref=useRef();

    function handler(e){
        e.preventDefault();
        var data={"username":name,
            "password":pwd};
        if (name!="laxman")
            h3ref.current.innerHTML="invalid username"; 
    }
    return(
        <div className="login">
            <h1>Login form</h1>
            <h3 ref={h3ref}></h3>
            <form onSubmit={handler}>
            <label>Username</label>
            <input type="text"
            value={name}
            required={true}
            onChange={(e)=>setName(e.target.value)}/>
            <label >password</label>
            <input type="password"
            value={pwd}
            required={true}
            onChange={(e)=>setPwd(e.target.value)}/>
            < input type="submit" value="signin"/>
            < input type="reset"/>

            
            </form>
        </div>
    )
}
export default Login;