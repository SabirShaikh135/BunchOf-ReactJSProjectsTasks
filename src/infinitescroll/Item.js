import React from 'react';
function Item({title}) {
    
  return (
   
    <div>
        <h2 style={{width:"500px",textAlign:"center",padding:"1rem"}}>{title}</h2>
        <hr  />
    </div>
  )
}

export default Item