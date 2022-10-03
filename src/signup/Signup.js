import React, { useEffect } from "react";
import { useState } from "react";
import "./Signup.css";

const Signup=()=>{
const initialValue={userName:"",userEmail:"",userPassword:""}
const [userValues,setUserValues]=useState(initialValue);
const [error ,setError]=useState({});
const [submit ,setSubmit]=useState(false);
const [message,setMessage]=useState(false);

const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserValues({...userValues,[name]:value})
    console.log(userValues);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    setError(validate(userValues));
    setSubmit(true);
    setMessage(false);
}   



const validate=(userValues)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errorMessage={};
    if(!userValues.userName){
        errorMessage.userName="please enter user name";
    }
    else if(Number(userValues.userName)||userValues.userName===""){
        errorMessage.userName="please enter valid user name"
    }
    else if(!userValues.userEmail){
        errorMessage.userEmail="please enter user email";
    }
    else if(!regex.test(userValues.userEmail)){
        errorMessage.userEmail="please enter valid email";
    }
    else if(!userValues.userPassword){
        errorMessage.userPassword="please enter user password"
    }
    else if(userValues.userPassword.length<4){
        errorMessage.userPassword="enter min 5 digit password";
    }
    else if(userValues.userPassword.length>10){
        errorMessage.userPassword="enter max 10 digit password";
    }
    
    return errorMessage;
}

useEffect(()=>{
    console.log("error",error);
    if(Object.keys(error).length===0 && submit){
        console.log(userValues);
    }
},[error])

    return(
        <div className="mycontainer">
            {
                Object.keys(error).length===0 && submit?0
                (<div className="showMessgae"><p>Login successfully</p></div>):
                (<div className="showMessgae">{error.userValues}</div>)
            }
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="myfield">
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="enter your name"
                           name="userName"
                           onChange={handleChange}
                           value={userValues.userName}
                    />
                    <p>{error.userName}</p>
                </div>

                <div className="myfield">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="enter your email"
                           name="userEmail"
                           onChange={handleChange}
                           value={userValues.userEmail}
                    />
                     <p>{error.userEmail}</p>
                </div>

                <div className="myfield">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="enter your password"
                        name="userPassword"
                        onChange={handleChange}
                        value={userValues.userPassword}
                    />
                    <p>{error.userPassword}</p>
                </div>
                    <button className="signup">Signup</button>

            </form>
        </div>
    );
}
export default Signup;