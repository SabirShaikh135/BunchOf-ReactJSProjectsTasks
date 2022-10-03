import React from "react";
import { useState } from "react";
const TwoWayDataBinding=()=>{
    const [value ,setValue]=useState("");
    return(
        <>
            <input type="text" placeholder="Enter text"
                onChange={(e)=>{setValue(e.target.value)}}
                value={value}
            />
            <h2>{value}</h2>
        </>
    );
}
export default TwoWayDataBinding;