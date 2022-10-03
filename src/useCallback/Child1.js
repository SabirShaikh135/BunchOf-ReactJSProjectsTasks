import React from 'react'
import { useEffect } from 'react';
import { useState,memo} from 'react'

function Child1({onClickFromParent}) {
  console.log("hello from child") 
  const [clicked ,setClicked]=useState(false);

  const handleClickChild=()=>{
    setClicked(!clicked);
    onClickFromParent();
}  
  return (
    <div className='Child1'>
        <h3>Click:{clicked?"yes":"no"}</h3>
        <button onClick={handleClickChild}>click</button>
    </div>
  )
}

export default memo(Child1)