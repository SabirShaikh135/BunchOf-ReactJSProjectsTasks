import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {addData} from "../actions/index";
function Registration() {
    const [inputValue,setInputValue]=useState("");
    const dispatch=useDispatch();
   
  return (
    <div>
        <input type="text"
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
         />

        <Link to="showdata">
        <button type='Submit' onClick={()=>dispatch(addData(inputValue),setInputValue(""))}>Submit</button>
        </Link>
    </div>
  )
}

export default Registration
