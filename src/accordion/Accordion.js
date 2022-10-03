import React from 'react'
import "./Accordion.css";
import accorData from "./accorData";
import { useState } from 'react';
import Question from './Question';
function Accordion() {
    const [data,setData]=useState(accorData);
  return (
    <div className='main-according'>
    <div className='accordion-container'>
        <h3>Quetion and Answer About Login</h3>
            <section className='section-info'>
            {
                data.map((data)=>{
                    return(
                        <Question key={data.id} {...data}/>
                    )
                })
            }
            </section>
    </div>
    </div>
  )
}

export default Accordion