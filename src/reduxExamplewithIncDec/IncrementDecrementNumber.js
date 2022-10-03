import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import { incNumber,decNumber } from './action';
import { useDispatch,useSelector } from 'react-redux';
function IncrementDecrementNumber() {
    const dispatch=useDispatch();
    const getNumberFromRedux=useSelector((state)=>state.IncDecReducer);
  return (
   <div className="container">
    <h1>Increment and Decrement Counter</h1>
    <h2>Using Redux</h2>
        <div className="container d-flex justify-content-center align-items-center">
        <button onClick={()=>{dispatch(decNumber(1))}} className="px-3 mx-3">
        <RemoveIcon />
        </button>
         <h1 className='px-3'>{getNumberFromRedux}</h1>
         <button onClick={()=>{dispatch(incNumber(1))}} className="px-3 mx-3">   
         <AddIcon/>
         </button>
        </div>
   </div>
  )
}

export default IncrementDecrementNumber