import React,{useEffect, useState} from 'react'
import logo from '../images/logo.png'
import "./SignUp.css"
import { Link , useNavigate} from 'react-router-dom'
import {toast} from "react-toastify"


const SignUp = () => {
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [username , setUsername]= useState("");
    const [password , setPassword]= useState("");

    //Toast function
    const notifyA = (msg)=>toast.error(msg);
    const notifyB = (msg)=>toast.success(msg);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const postData = ()=>{
        //checking email and password
        if(!emailRegex.test(email)){
            notifyA("Invalid Email");
            return
        }
        else if (!passRegex.test(password) && password){
            notifyA("Enter a strong password");
            return
        }
        
        //sending data to server
        fetch("http://localhost:5000/user/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                username:username,
                email:email,
                password:password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                notifyA(data.error);
            }else{
                notifyB(data.message);
                navigate("/signin");
            }
            
            console.log(data)})  
    }

  return (
    <div className='signup'>
        <div className='form-container'>
            <div className='form'>
                <img src={logo} className='signuplogo' alt=''/>
                <p className='loginpara'>
                    Sign Up to see photos and videos <br/> from your friends
                </p>
                <div>
                    <input type='email' name='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                </div>
                <div>
                    <input type='text' name='name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Full Name'/>
                </div>
                <div>
                    <input type='text' name='username' id='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'/>
                </div>
                <div>
                    <input type='password' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>    
                    <div style={{color:"red",fontSize:"12px"}}>* atleast 8 characters including A-Z , a-z , #!? , 0-9</div>
                </div>
                <p className='loginpara' style={{fontSize:"12px", margin:" 3px 0px"}}>By signing up, you agree to our Terms, <br/> privacy policy and cookies policy</p>
                <input type='submit' onClick={()=>{postData()}} id='submit-btn' value="Sign Up"/>
            </div>
            <div className='form2'>
                Already have an account ? 
                <Link to="/signin" ><span style={{color:"blue" , cursor:"pointer"}}> Sign In</span></Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp
