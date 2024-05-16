import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../constants/constants'

function Classes() {

    const [enrolls,setEnroll]=useState([])

    const getEnrolls=async()=>{
        try{
            var res=await axios.get(`${baseURL}get_enroll_data/`)
            console.log(res.data.success);
            setEnroll(res.data.success)
            
        }
        catch(err){
            console.log(err);
        }
        
      

    }
useEffect(()=>{
    getEnrolls()
},[])
console.log(enrolls);
  return (
    <div>
        <form >
            <input type="text" name='class' />
            <select name="qw" id="" >
                <option value="">select</option>
                {
                    enrolls.map((enroll)=>{
                       return(
                        <option value={enroll}>{enroll}</option>
                       )
                    })
                }
                
            </select>
        </form>
    </div>
  )
}

export default Classes