import './Login.css'
import loginimg from '../../images/FreepikExport202404290722035Axc1.png'
import { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../constants/constants'


export default function Login() {

  const [userdata,setUserdata]=useState({
    username:null,
    password:null
  })
  const handleChange=(event)=>{
    const {name,value}=event.target
    setUserdata((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(userdata);
   
   try{
   var response= await axios.post(`${baseURL}/admin_login`,{userdata})
   console.log(response);
   } 
   catch(err){
    console.log(err);
   }
    


  }

  return (

    <>
      <div className="login-background">
        <div className="outer-formdiv">
          <form onSubmit={handleSubmit}>
          <div className="login-form">
            <h1>LOGIN</h1>
            <input type="text" onChange={(e)=>handleChange(e)} value={userdata.username} name='username' placeholder='Username' /> <br />
            <input type="password" name='password' value={userdata.password} onChange={(e)=>{handleChange(e)}} placeholder='Password' />
            <button type='submit'  className='login-btn'>Login</button> <br />
            <button className='loginw-google'>Login with google</button>
          </div>
          </form>
          <div className="form-design">
            <div>
              <img src={loginimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
