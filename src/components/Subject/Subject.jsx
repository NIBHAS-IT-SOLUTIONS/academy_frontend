import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { baseURL } from '../../constants/constants'

function Subject() {

    const [enrolls, setEnroll] = useState([])
    const [classes,setclasses]=useState([])
    const [subject,setSubj]=useState({
        subject:"",
        enroll:"",
        classes:""
    })
    //get_classes_data
    //addsubject

    const getEnrolls = async () => {
        try {
            var res = await axios.get(`${baseURL}get_enroll_data/`)
            console.log(res.data.success);
            setEnroll(res.data.success)

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getEnrolls()
    }, [])
    const handleSubmit= async(event)=>{
        event.preventDefault()
        console.log(subject);
        try {
            var res = await axios.post(`${baseURL}addsubject/`, {
                subject:subject.subject,
                enroll:subject.enroll,
                classes:subject.classes
                
            })
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleChange=(event)=>{
        const {name,value}=event.target
        setSubj((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
     }
     const handleselect=async(e)=>{
        
        const {name,value}=e.target
        setSubj((prevProps) => ({
           ...prevProps,
           [name]: value
         }));
         //console.log(e.target.value);
        try {
            var res = await axios.post(`${baseURL}get_classes_data/`,{
                enroll:e.target.value
            })
            console.log(res.data.success);
            setclasses(res.data.success)

        }
        catch (err) {
            console.log(err);
        }

     }

  return (
    <div> <form onSubmit={handleSubmit}  >
    <input required type="text" onChange={(e)=>handleChange(e)}  name='subject' />
    <select required name="enroll" onChange={(e)=>handleselect(e)} id="" >
        <option  value="">select</option>
        {
            enrolls.map((enroll) => {
                return (
                    <option value={enroll}>{enroll}</option>
                )
            })
        }

    </select>
    <select required name="classes"  onChange={(e)=>handleChange(e)}  id="" >
        <option  value="">select</option>
        {
            classes.map((classes) => {
                return (
                    <option value={classes}>{classes}</option>
                )
            })
        }

    </select>
    <button type='submit' >
        Add Subject
    </button>
</form></div>
  )
}

export default Subject