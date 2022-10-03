import React, { useEffect, useState } from 'react';
import "./EmployeeForm.css";

function EmployeeForm() {
    const initialValue={fullname:"",dob:"",paddress:"",laddress:"",
    city:"",state:"",pincode:"",pan:"",noffm:"",rwfb:"",gender:""};
    const [employeeDetails,setEmployeeDetails]=useState(initialValue);
    const [error,setError]=useState({});
    const [submit,Setsubmit]=useState(false);
const [fullname,setFullname]=useState();const [dob,setDob]=useState();
const [paddress,setpaddress]=useState();const [laddress,setladdress]=useState();
const [city,setCity]=useState();const [state,setState]=useState();
const [pincode,setPincode]=useState();const [pan,setpan]=useState();
const [noffm,setnoffm]=useState();const [rwfb,setrwfb]=useState();
const [gender,setGender]=useState();
const handleChange=(e)=>{
    const {name,value}=e.target;
    setEmployeeDetails({...employeeDetails,[name]:value})
    console.log(employeeDetails);
}
const EventHandle=(e)=>{
    e.preventDefault();
    setError(validate(employeeDetails));
    Setsubmit(true);
}

const validate=(employeeDetails)=>{
    const showMessage={};
    if(!employeeDetails.fullname ||Number(employeeDetails.fullname)){
        showMessage.fullname="please enter employee name"
    }
    else if(!employeeDetails.dob){
        showMessage.dob="please enter date of birth"
    }
    else if(!employeeDetails.paddress){
        showMessage.paddress="plase enter your permanent address"
    }
    return showMessage;
}

  return (
    <main>
        <form onSubmit={EventHandle}>
        <h1 className='Details'>Employee Details</h1>
        <div className='borderline'></div>
        <div className="container employee-details">

            
        <div className="containe-1">
        <div className="newfiled">
            <input type="text" placeholder='full name'
            name='fullname'
            onChange={handleChange}
            value={employeeDetails.fullname}
            // onChange={(e)=>setFullname(e.target.value)}
             /><br/>
             <p style={error.fullname?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>{error.fullname?error.fullname:"your name"}</p>
            {/* <p style={fullname===""||isNaN(fullname)===false?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}> */}
            {/* {fullname==""?"enter your name":"your name"}</p> */}
        </div>
        <div className="newfiled">
            <input type="date" placeholder='DOB'
            // onChange={(e)=>setDob(e.target.value)}
            name='dob'
            onChange={handleChange}
            value={employeeDetails.dob}
             /><br/>
             <p style={error.dob?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>{error.dob?error.dob:"your date of birth"}</p>
            {/* <p style={dob==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}> */}
            {/* {dob==""?"enter DOB":"your date of birth"}</p> */}
        </div>
        </div>

        <div className="containe-1">
        <div className="newfiled">
            <select className='gender'
             onChange={(e)=>setGender(e.target.value)}
              >
                <option value="gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br/>
            <p style={gender==="gender"?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {gender==="gender"?"select gender":"gender"}</p>
        </div>
       
        <div className="newfiled"> 
        {/* <fieldset><legend>Hobby</legend> */}
        <div className='container-gender'>
            <input type="checkbox" name="hobby" value="sports" id="sport" /><strong>Sports</strong>
            <input type="checkbox" name="hobby" value="sports" id="sport"/><strong>Music</strong>
            <input type="checkbox" name="hobby" value="sports" id="sport"/><strong>Reading</strong>
            </div>
            {/* </fieldset> */}
            {/* <p style={fullname==""?{borderBottom:""}:{borderBottom:"red",color:'lightgray'}}>
            {fullname==""?"enter your name":"your name"}</p> */}
        </div>
        </div>

        <div className="containe-1">
        <div className="newfiled">
            <input type="text" placeholder='Permanent Address'
            onChange={(e)=>setpaddress(e.target.value)}
             /><br/>
            <p style={paddress==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {paddress==""?"enter your Permanent Address":"yours permanent address is"}</p>
        </div>
        <div className="newfiled">
            <input type="text" placeholder='Local Address'
            onChange={(e)=>setladdress(e.target.value)}
             /><br/>
            <p style={laddress==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {laddress==""?"enter your Local Address ":"yours Local address is"}</p>
        </div>
        </div>


        <div className="containe-1">
        
        <div className="newfiled">
            <input type="text" placeholder='City'
            onChange={(e)=>setCity(e.target.value)}
             /><br/>
            <p style={city==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {city==""?"enter your city":"your city name is"}</p>
        </div>

        <div className="newfiled">
            <input type="text" placeholder='State'
            onChange={(e)=>setState(e.target.value)}
             /><br/>
            <p style={state==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {state==""?"enter your state":"your state is"}</p>
        </div>

        </div>


        <div className="containe-1">
        <div className="newfiled">
            <input type="number" placeholder='Pincode'
            onChange={(e)=>setPincode(e.target.value)}
             /><br/>
            <p style={pincode==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {pincode==""?"enter your Pincode":"your Pincode is"}</p>
        </div>
        <div className="newfiled">
            <input type="text" placeholder='Pancard'
            onChange={(e)=>setpan(e.target.value)}
             /><br/>
            <p style={pan==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {pan==""?"enter your Pancard Number":"your Pancard Number is"}</p>
        </div>
        </div>


        <div className="containe-1">
        <div className="newfiled">
            <input type="text" placeholder='Name Of Family Member'
            onChange={(e)=>setnoffm(e.target.value)}
             /><br/>
            <p style={noffm==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {noffm==""?"Enter your Family Member name":"Family Member name"}</p>
        </div>
        <div className="newfiled">
            <input type="date" placeholder='DOB'
            onChange={(e)=>setDob(e.target.value)}
             /><br/>
            <p style={dob==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {dob==""?"enter DOB":"date of birth"}</p>
        </div>
        </div>


        <div className="containe-1">
        <div className="newfiled">
        <select className='gender'
             onChange={(e)=>setGender(e.target.value)}
              >
                <option value="gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br/>
            <p style={gender=="gender"?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {gender=="gender"?"select gender":""}</p>
        </div>
        <div className="newfiled">
            <input type="text" placeholder='RelationShip with Family Member'
            onChange={(e)=>setrwfb(e.target.value)}
             /><br/>
            <p style={rwfb==""?{borderBottom:"1px solid red"}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {rwfb==""?"enter Family Member your name":" RelationShip is"}</p>
        </div>
        </div>




        <button className="button_submit">Submit</button>
         </div>
         
        </form>
        
    </main>
  )
}

export default EmployeeForm