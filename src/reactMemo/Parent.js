import React,{useState} from 'react';
import Child from './Child';

function Parent() {
    const [number,setNumber]=useState(0);
    const [name,setName]=useState("No name");
    const handelNumber=()=>{
        setNumber(Math.floor(Math.random()*101));
    }
    const handelName=(name)=>{
        setName(name);
    }
    console.log("i am parent",number,name)
  return (
    <div className='parent'>
    <h3>Parent</h3>
    <h4>Number: {number}</h4>
    <Child name={name}/>
    <button onClick={handelNumber}>set random number</button>
    <br />
    <button onClick={()=>handelName("sabir")}>set name as sabir</button>
    <button onClick={()=>handelName("imran")}>set name as Imran</button>
    </div>
  )
}

export default Parent