import React from 'react'
import { Link } from 'react-router-dom';
function BootstrapExample() {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
return (
        <div className="card userProfile-Card pt-5"
        style={{width:"750px",height:"350px",borderRadius:"10px"}}
         >
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="img-fluid"
                  style={{width:"200px",borderRadius:"50%"}}
                  />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">Danny McLoan</h5>
                <p className="mb-2 pb-1" 
                // style="color: #2b2a2a;"
                >Senior Journalist</p>
                 <p className="mb-2 pb-1" 
                // style="color: #2b2a2a;"
                >9589754322</p>

                <div className="d-flex pt-1">   
                  <button type="button" className="btn btn-primary flex-grow-1">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
  )
}

export default BootstrapExample