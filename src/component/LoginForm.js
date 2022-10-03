import React,{useState,useEffect} from "react";
import "./LoginForm.css";
const LoginForm=()=>{
    const initialValue={user:"",email:"",password:""}
    const [values,setValues]=useState(initialValue);
    const [error,setError]=useState({});
    const [submit,setSubmit]=useState(false);
    const [message,setMessage]=useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
        console.log(values)
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        setError(validate(values));
        setSubmit(true);
        setMessage(false)
    }

    useEffect(()=>{
        console.log("error",error);
        if(Object.keys(error).length===0 && submit){
            console.log(values);
        }
    },[error])

    const clearHandle=()=>{
        
    const initialValue={user:"",email:"",password:""}
        setValues(initialValue);
    }

    const validate=(valuese)=>{
        const errorMessage={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.user){
            errorMessage.user="please enter user name";
        }
        else if(Number(values.user) || values.user===""){
            errorMessage.user="please enter valid user name";
        }
        else if(!values.email){
            errorMessage.user="please enter email";
        }
        else if(!regex.test(values.email)){
            errorMessage.user="please enter valid email";
        }
        else if(!values.password){
            errorMessage.user="please enter password";
        }
        else if(values.password.length<4 || values.password.length >10){
            errorMessage.user="please enter min 5 or max 10 digit password";
        }
        
        return errorMessage;
    }

    return( 
        <div className="container">
        {
        Object.keys(error).length===0 && submit ? 
        (<div style={{color:"green",fontSize:"2rem"}}>login successfull</div>):
        (<div style={{color:"red",fontSize:"1.2rem"}}>{error.user}</div>)
        }
            <form onSubmit={handelSubmit}>
                <h1>Login Form</h1>
                        <div className="field">
                            <label htmlFor="">User Name</label>
                            <input type="text"
                             name="user"
                             onChange={handleChange}
                             value={values.user}
                             placeholder="user name"
                             />
                            {/* <p>{error.user}</p> */}
                        </div>
                        <div className="field">
                            <label htmlFor="">Email</label>
                            <input type="Email"
                             name="email"
                             onChange={handleChange}
                             value={values.email}
                             placeholder="email"

                             />
                            {/* <p>{error.email}</p> */}
                        </div>

                        <div className="field">
                            <label htmlFor="">Password</label>
                            <input type="Password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                placeholder="password"
                            />
                            {/* <p>{error.password}</p> */}
                        </div>
                        <button className="button_submit">Submit</button>
                        <button className="clear" onClick={clearHandle}>clear</button>
                
            </form>
        </div>
    );
}

export default LoginForm;