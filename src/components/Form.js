import { userRef } from "./Firebase";
import "./FormStyles.css"
import React ,{useState} from 'react'
import {addDoc} from '@firebase/firestore';

const Form = () => {

  const [user ,setUser]=useState({
    name:" ",
    email:" ",
    subject: " ",
    message:" ",
  });

  const addName=(e)=>{
    return setUser({...user,name:e.target.value});
  }
  const addEmail=(e)=>{
    return setUser({...user,email:e.target.value});
  }
  const addSubject=(e)=>{
    return setUser({...user,subject:e.target.value});
  }
  const addMessage=(e)=>{
    return setUser({...user,message:e.target.value});
  }

  const submitHandler=async (e)=>{
      e.preventDefault();
      await addDoc(userRef,{
        name:user.name,
        email:user.email,
        subject:user.subject,
        message:user.message,
      });
      setUser({
          name:"",
          email:"",
          subject:"",
          message:"",
      });
      console.log(user.name);
      alert("Your Request is Sucessfully Transfer to D&K");
  }
  
  return (
    <div className="form">
        <form>
            <label>Your Name </label>
            <input type="text" onChange={addName} value={user.name} required></input>
 
            <label>Email </label>
            <input type="email" onChange={addEmail}  value={user.email} required></input>

            <label>Subject </label>
            <input type="text" onChange={addSubject}value={user.subject} required></input>

            <label>Message </label>
            <textarea rows="6" placeholder="Type your message here" onChange={addMessage} value={user.message} required/>

            <button className="btn" onClick={submitHandler}>Submit</button>
        </form>

    </div>
  )
}

export default Form