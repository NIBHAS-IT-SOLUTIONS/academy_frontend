import React, { useState } from 'react'
import './Enrolls.css'
import axios from 'axios'
import { baseURL } from '../../constants/constants'

function Enrolls() {

    const [enroll,setEnroll]=useState("")
    const handleSubmit=async(event)=>{
        event.preventDefault()
        console.log(enroll);
        try{
         var res=await axios.post(`${baseURL}addenroll/`,{enroll})
            console.log(res.data);
        }
        catch(err){
            console.log(err);
        }
     }
  return (
  <>
  div
       <form onSubmit={handleSubmit}>
            <input type='text' name='enroll'onChange={(e)=>{setEnroll(e.target.value)}} value={enroll} />
            <br />
            <button type='submit' >
							Add enroll
						</button>
       </form>
    
    </>
  )
}

export default Enrolls