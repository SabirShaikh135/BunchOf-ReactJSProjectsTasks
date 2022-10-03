import React,{ useState,useEffect } from 'react';

function APIdatafetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(()=>{
        const getData= async ()=>{
            try {
                const response= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
                if(!response.ok){
                    throw new Error(`This is an HTTP error: The status is ${response.status}`)
                }
                console.log(response);
                let jsonData= await response.json();
                setData(jsonData);
                setError(null);
                console.log(jsonData);
            } catch (error) {
                setError(error.message);
                // setData(null);
            }
            finally{
                setLoading(false);
            }
           
        }
        getData();
    },[])
    let reuslt= data.map((val)=>{
        let {id,title,body}=val;
        return(
            <li key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </li>
        )
    })
  return (
    <div className='APIdatafetching'>
         <h1>API Posts</h1>
         { loading && <div>please wait....</div>}
         {
            error && (
            <div>
            {`There is a problem fetching the post data - ${error}`}
            </div>
            )}
            <ul>
           
                {  data &&
                  reuslt
                }
            </ul>
    </div>
  )
}

export default APIdatafetching