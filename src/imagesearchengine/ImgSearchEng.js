import React from 'react'
import { useState } from 'react'

function ImgSearchEng() {
    const [userInput,setUserInput]=useState();
    const [showImageResult,setShowImageResult]=useState([]);
    const imageSearchUrl=`https://api.unsplash.com/search/photos?page=1&query=${userInput}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`;
    
    const handleImageShow= async()=>{
        // const response= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${userInput}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`);
        const response= await fetch(imageSearchUrl);
        console.log("response",response);
        const getJsonData= await response.json();
        console.log("getJsonData",getJsonData);
        setShowImageResult(getJsonData.results);
        console.log("showImageResult",showImageResult);
        console.log("userInput",userInput);
    }
  return (
    ////my-5 class set for margin top and bottom
   <div className="container my-5 mh-100"> 
        <div className="input-group mb-3">
             <input type="serach" className="form-control" placeholder="serach image" 
                onChange={(e)=>{setUserInput(e.target.value)}}
                value={userInput}
             />
            <button className="btn btn-outline-secondary" type="button" onClick={handleImageShow}>
               Search
            </button>
         </div>
         <div className="container">
            <div className="row">
                {
                    showImageResult.map((images)=>{
                        return(
                            <div className="col-lg-3 col-md-4 col-6">
                                <img className='img-fluid img-thumbnail d-block mb-4 h-100'
                                src={images.urls.small} alt="search-images" />
                            </div>
                        )
                    })
                }
            </div>
         </div>
    </div>
  )
}

export default ImgSearchEng