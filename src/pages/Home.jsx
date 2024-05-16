import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { baseURL } from '../constants/constants'
import Enrolls from '../components/Enrolls/Enrolls'

function Home() {
  // eslint-disable-next-line
  const [formData, setFormData] = useState({
    name: 'gh',
    age: 'sd',
    city: 'sd'
  });
  // eslint-disable-next-line
  const handleSession=async()=>{
    var token=localStorage.getItem('name')
    const headers = {
      'Content-Type': 'application/json',
      'token':token
    };

    try{
      var res=await axios.post(`${baseURL}/session_auth/`,{formData},{headers})
      console.log(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
        <Navigation/>
       
        <br /><br /><br /> {/*
        <input type='button' value="authntictn" onClick={handleSession} /> */}
       <Enrolls/>
    </div>
  )
}

export default Home