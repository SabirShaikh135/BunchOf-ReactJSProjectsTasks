import React, { useCallback } from 'react'
import { useState } from 'react'
import Child1 from './Child1';
function Parent({handlecolor}) {
console.log("hello from parent");
const [number,setNumber]=useState(0);
const handleNumber=(e)=>{
    console.log("change number")
    setNumber(e.target.value);
}


const handleClick=useCallback(()=>{
    console.log("you click me");
},[])

const handlebgcolor=()=>{
    handlecolor();
    console.log("handlecolor",handlecolor())
}



  return (
    <div className='Parent'>
        <input type="number"
        onChange={(e)=>handleNumber(e)}
        value={number}
         />
         <Child1 onClickFromParent={handleClick}/>
         <button
        onClick={handlebgcolor}>
        Click me
      </button>
      <input type="checkbox" onChange={handlebgcolor}/>
    </div>
  )
}

export default Parent