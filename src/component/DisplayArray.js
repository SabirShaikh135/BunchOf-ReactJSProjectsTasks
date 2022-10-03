import React from "react";
const DisplayArray=()=>{
    const arrayList=[{id:1,name:"burhanpur"},{id:2,name:"indore"},{id:3,name:"mumbai"},
    {id:4,name:"ahmedabad"},{id:5,name:"khandwa"},{id:6,name:"jalgoan"},{id:7,name:"hydrabaad"}];
    return(
     <div className="container-md border">
     <h1 className="mb-4">this is array list show</h1>
        <select className="form-select">
        <option selected>City</option>
        {
            arrayList.map((names)=>{
                const{id,name}=names;
                return(
             <option key={id}>
              {name}
            </option>
                )
            })
        }
        </select>
     </div>
    );
}

export default DisplayArray;