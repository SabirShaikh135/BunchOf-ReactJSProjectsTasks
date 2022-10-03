import React,{memo} from 'react'

function Child({name}) {
    console.log("i am child",name);
  return (
    <div className='Child'>
        <h3>Child</h3>
        <h4>Name: {name}</h4>
    </div>
  )
}

export default memo(Child)

// before memo on click number or name button both compnent value call so 
// solve this problem by  use memo hook we use.