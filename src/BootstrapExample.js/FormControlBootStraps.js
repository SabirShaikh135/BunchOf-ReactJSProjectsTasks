import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react';
import "./FormControlBootStraps.css";
function FormControlBootStraps() {
const initialValue={fullname:"",dob:"",gender:"",hobbies:"",paddress:"",
                    laddress:"",city:"",state:"",pincode:"",pancard:"",
                    familyMemberName:"",fdob:"",Releationship:"",fgender:""};
const [employeeDetails,setEmployeeDetails]=useState(initialValue); 
const [error ,setError]=useState({});
const [submit,setSubmit]=useState(false)
const handleChange=(e)=>{
const {name,value}=e.target;
setEmployeeDetails({...employeeDetails,[name]:value});
console.log(employeeDetails)
}
const handleEvent=(e)=>{
    e.preventDefault();
    setError(validate(employeeDetails));
    setSubmit(true)
}
const validate=(employeeDetails)=>{
    const showMessage={};
    if(!employeeDetails.fullname ||Number(employeeDetails.fullname)){
        showMessage.fullname="please enter employee name"
    }
    else if(!employeeDetails.dob){
        showMessage.dob="please enter date of birth"
    }
    else if(!employeeDetails.gender||employeeDetails.gender=="Gender"){
        showMessage.gender="please enter correct gender"
    }

    else if(!employeeDetails.hobbies){
        showMessage.hobbies="please enter minimum one hobby"
    }

    else if(!employeeDetails.paddress){
        showMessage.paddress="plase enter your permanent address"
    }
    else if(!employeeDetails.laddress){
        showMessage.laddress="please enter your Local Address"
    }
    else if(!employeeDetails.city){
        showMessage.city="please enter your city name"
    }
    else if(!employeeDetails.state){
        showMessage.state="please enter your state name"
    }
    else if(!employeeDetails.pincode){
        showMessage.pincode="please enter your pincode"
    }
    else if(!employeeDetails.pancard){
        showMessage.pancard="please enter your pancard number"
    }
    else if(!employeeDetails.familyMemberName){
        showMessage.familyMemberName="please enter your family member name"
    }
    else if(!employeeDetails.fdob){
        showMessage.fdob="please enter date of birth"
    }
    else if(!employeeDetails.Releationship){
        showMessage.Releationship="please enter your relationship with family member"
    }
    else if(!employeeDetails.fgender||employeeDetails.fgender=="Gender"){
        showMessage.fgender="please enter correct gender"
    }
    return showMessage;
}
  return (
    <div className="container border p-5 m-5 bg-secondary bg-gradient">
    <form onSubmit={handleEvent}>
        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control"
             placeholder='Full name' name='fullname'
             onChange={handleChange}
            //  value={employeeDetails.fullname}
             />
            <p className='danger'>{error.fullname}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">Date OF Birth</label>
            <input type="date" className="form-control" placeholder='Full name'
                name='dob'
                onChange={handleChange}
            />
            <p>{error.dob}</p>
            </div>
        </div>

        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">Gender</label>
            <select className="form-select" name='gender'
            onChange={handleChange}
            >
                <option selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <p>{error.gender}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">hobbies</label>
                <div className="row">
                <div className="col">
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                    name='hobbies' value="Blogging"
                    onChange={handleChange}
                />
                <label className="form-check-label">
                Blogging
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                    name='hobbies' value="Reading"
                    onChange={handleChange}
                />
                <label className="form-check-label">
                Reading
                </label>
            </div>
            
            </div>
            <div className="col">
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                    name='hobbies' value="Learning"
                    onChange={handleChange}
                />
                <label className="form-check-label">
                Learning
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                    name='hobbies' value="Gardening"
                    onChange={handleChange}
                />
                <label className="form-check-label">
                Gardening
                </label>
            </div>
            </div>
            </div>
            <p>{error.hobbies}</p>
            </div>
        </div>

        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">Permanent address</label>
            <input type="text" className="form-control" placeholder='permanent address'
                name='paddress'
                onChange={handleChange}
            />
            <p>{error.paddress}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">Local address</label>
            <input type="text" className="form-control" placeholder='Local address'
                name='laddress' onChange={handleChange}
            />
            <p>{error.laddress}</p>
            </div>
            
        </div>

        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">City</label>
            <input type="text" className="form-control" placeholder='City'
                name='city' onChange={handleChange}
            />
            <p>{error.city}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">State</label>
            <input type="text" className="form-control" placeholder='State'
                name='state' onChange={handleChange}
            />
            <p>{error.state}</p>
            </div>
        </div>


        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">Pincode</label>
            <input type="Number" className="form-control" placeholder='Pincode'
                name='pincode' onChange={handleChange}
            />
            <p>{error.pincode}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">Pancard Number</label>
            <input type="Number" className="form-control" placeholder='Pancard Number'
                name='pancard' onChange={handleChange}
            />
            <p>{error.pancard}</p>
            </div>
        </div>


        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">Family Member Name</label>
            <input type="text" className="form-control" placeholder='Full name'
                 name='familyMemberName' onChange={handleChange}
            />
            <p>{error.familyMemberName}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">Date OF Birth</label>
            <input type="date" className="form-control" placeholder='Date Of Birth'
                name='fdob' onChange={handleChange}
            />
            <p>{error.fdob}</p>
            </div>
        </div>


        <div className="row justify-content-md-center mb-4">
            <div className="col-md-4">
            <label className="form-label">Releationship</label>
            <input type="text" className="form-control" placeholder='Releationship'
                name='Releationship' onChange={handleChange}
            />
            <p>{error.Releationship}</p>
            </div>
            <div className="col-md-4">
            <label className="form-label">Gender</label>
            <select className="form-select" name='fgender'
            onChange={handleChange}
            >
                <option selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <p>{error.fgender}</p>
            </div>
        </div>
        
            <div className="d-grid col-2 mx-auto">
                <button className="btn btn-primary" type="submit">Submit</button> 
            </div>
            </form>
    </div>
  )
}

export default FormControlBootStraps