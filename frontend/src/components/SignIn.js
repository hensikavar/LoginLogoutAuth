import React , {useState} from 'react'
import "./signin.css"
import logo from "../images/logo.png"
import { Link ,useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"

const SignIn = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password , setPassword]= useState("");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Toast function
    const notifyA = (msg)=>toast.error(msg);
    const notifyB = (msg)=>toast.success(msg);

    const postData = ()=>{
        //checking email and password
        if(!emailRegex.test(email)){
            notifyA("Invalid Email");
            return
        }

        //sending data to server
        fetch("http://localhost:5000/user/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                notifyA(data.error);
                return
            }
            else{
                notifyB(data.message);
                navigate("/");
            }
            console.log(data);
        })
    }
  return (
    <div className='signin'>
        <div className='signinform'>
            <div className='form1'>
                <img src={logo} className='signinlogo' alt=''/>
                <div>
                    <input type='email' name='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email address'/>
                </div>
                <div>
                    <input type='password' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                </div>
                <input type='submit' onClick={()=>{postData()}} id='login-btn' value="Sign In"/>
            </div>
            <div className='form-2'>
                Don't have an account?
                <Link to="/signup"><span style={{color:"blue", cursor:"pointer"}}> Sign Up</span></Link> 
            </div>
        </div>
    </div>
  )
}

export default SignIn
