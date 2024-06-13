import './Login.css'
import {  useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../constants/constants'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleOAuthProvider,GoogleLogin } from "@react-oauth/google"
import LoginGoogle from './LoginwithGoogle/LoginGoogle'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function Login() {


  const navigate =useNavigate();
  const [userdata,setUserdata]=useState({
    username:"",
    password:""
   })
   const [ user, setUser ] = useState([]);
   const [ profile, setProfile ] = useState([]);
   const handleChange=(event)=>{
     const {name,value}=event.target
    setUserdata((prevProps) => ({
       ...prevProps,
       [name]: value
     }));
  }
  
  

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';

   
      if (value.trim() === '') {
        error = `${name} required`;
      }
    
    return error;
  };



  const handleSubmit =async (event) => {
    event.preventDefault();
    let valid = true;
    const newErrors = {};

    Object.keys(userdata).forEach((key) => {
      const error = validate(key, userdata[key]);
      if (error) {
        valid = false;
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    console.log(errors);

    if (valid) {
      console.log(userdata);
      try{
     

        var response= await axios.post(`${baseURL}admin_auth/`,{
         username:userdata.username,
         password:userdata.password
          })
        console.log(response);
        localStorage.setItem("name",response.data.name)
        console.log(localStorage.getItem("name"));
     
        navigate('/')
        } 
        catch(err){
         console.log(err,response);}
    }
    else{

    }
  };
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

  
  

  return (
    

    <>

       



       <div className="limiter">
        
		 <div className="container-login100" style={{ backgroundImage: "url("+"https://i.postimg.cc/LsQPpxMk/Copy-of-Untitled.png"+")"}}> 
			<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form id='myForm' onSubmit={handleSubmit} className="login100-form validate-form flex-sb flex-w" >
					<span className="login100-form-title p-b-53">
						Sign In With
					</span>

					<Link href="#" className="btn-face m-b-20">
          <i class="fa-brands fa-square-facebook"></i>Facebook
{/* <LoginGoogle/> */}
					</Link>

					<Link  href="#" className="btn-google m-b-20">
						{/* <img src="https://i.postimg.cc/jj9VZbgs/icon-google.png" alt="GOOGLE"/> */}
						<LoginGoogle/>
					</Link>
					
					<div className="p-t-31 p-b-9">
						<span className="txt1">
							Username
						</span>
					</div>
          
					<div className={`wrap-input100 validate-input ${errors.username ? 'alert-validate' : ''}`} data-validate = {`${errors.username}`}>
						<input className="input100" type="text" name="username" onChange={(e)=>handleChange(e)} value={userdata.username} placeholder='Enter Username' />
						<span className="focus-input100"></span>
					</div>
					
					<div className="p-t-13 p-b-9">
						<span className="txt1">
							Password
						</span>

						<Link to="#" className="txt2 bo1 m-l-5">
							Forgot?
						</Link>
					</div>
					<div className={`wrap-input100 validate-input ${errors.password ? 'alert-validate' : ''}`} data-validate = {`${errors.password}`}>
						<input className="input100" type="password" name='password' value={userdata.password} onChange={(e)=>{handleChange(e)}} placeholder='Enter Password' />
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn m-t-17">
						<button type='submit' className="login100-form-btn">
							Sign In
						</button>
					</div>

					<div className="w-full text-center p-t-55">
						<span className="txt2">
							Not a member?
						</span>

						<Link to="#" className="txt2 bo1">
							Sign up now
						</Link>
					</div>
				</form>
			</div>
	</div> 
	</div> 



  
    </>
  )
}


