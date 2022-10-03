import React,{ useState }from "react";
const ShowHideElement=()=>{
const [show, setShow]=useState(true);
    return(
        <>
        <h1>Show and hide content with toggle buttton</h1><br/>
        <button className="btn btn-primary mb-4" onClick={()=>setShow(!show)}>{show?"Hide Content":"Show Content" }</button>
        {
            show?(<div className="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
         odio rerum in tempore corrupti, dolor sunt eius id nihil sapiente voluptatibus
         vitae, explicabo repellendus nam necessitatibus atque veniam voluptate quia!
        </div>):("")
        
        }
        </>
    );
}

export default ShowHideElement;