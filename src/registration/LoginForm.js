import React,{useState,useEffect} from "react";
import "./LoginForm.css";
const LoginForm=()=>{
    
    return( 
        <><h1>Employee Detials</h1>
<div class="card" style={{width:"80rem",padding:"10rem",background:"pink"}}>
<form className="was-validated">

<div class="col-md">
  <div class="row g-2">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Name</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a input
    </div>
  </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">DOB</label>
    <input  type="date" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter date of birth
    </div>
  </div>
  </div>

<div class="row g-2">
  <div className="mb-3">
    <select className="form-select" required aria-label="select example">
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
    <div className="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required/>
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div className="invalid-feedback">Example invalid feedback text</div>
  </div>
  <div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required/>
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    {/* <div className="invalid-feedback">Example invalid feedback text</div> */}
  </div>
  <div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required/>
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    {/* <div className="invalid-feedback">Example invalid feedback text</div> */}
  </div>
  </div>
  <div class="row g-2">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Permanent Address</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Local Addrees</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  </div>

  <div class="row g-2">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">City</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">State</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  </div>

  <div class="row g-2">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Pincode</label>
    <input type="Number" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Pancard</label>
    <input type="Number" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  </div>

  <div class="row g-2">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Name Of Family Member</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">DOB</label>
    <input  type="date" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  </div>

  <div class="row g-2">
  <div className="mb-3">
    <select className="form-select" required aria-label="select example">
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
    <div className="invalid-feedback">Example invalid select feedback</div>
  </div>


  <div className="mb-3">
    <label for="validationTextarea" className="form-label">RelationShip with Family Member</label>
    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  </div>
  </div>
  


  <div className="mb-3">
    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
  
</form>
</div>
</>
    );
}

export default LoginForm;