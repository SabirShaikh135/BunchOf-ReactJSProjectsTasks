import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Question({title,info}) {
const [showAccor,setShowAccor]=useState(false);
    return (
    <article className="according-quetion">
        <header>
            <h4>{title}</h4>
            <button className='according-btn' onClick={()=>{setShowAccor(!showAccor)}}>
            {
                showAccor?<RemoveIcon/>:<AddIcon/>
            }
            </button>
        </header>
        {showAccor && <p>{info}</p> }
    </article>
  )
}

export default Question