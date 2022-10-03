import React,{ useState,useEffect} from 'react';

function FetchDataFromAPI() {
  //   const [data,setData]=useState({});
  //   const [loading,setLoading]=useState(true);
  //   const [error,setError]=useState(null);
  //   const url="https://jsonplaceholder.typicode.com/users/1";
  //   useEffect(()=>{
  //     const getData= async ()=>
  //     {
  //   try{
  //       const response= await fetch(url);
  //       if(!response.ok){
  //         throw new Error(`Please check your internet${response.status}`);
  //       }
  //       const jsondata= await response.json();
  //       setData(jsondata);
  //       setError(null);
  //       setLoading(false);
  //       }
  //      catch(error){
  //           setError(error.message)
  //         }
  //         finally{
  //           setLoading(false)
  //         }
  //       }
  //         getData();
  //       },[])

    
  // return (  
  //   <div className='fetchDataFromAPI'> 
  //    <h1>API Posts</h1>
  //    {loading &&<div>Loading......</div>}
  //  {
  //   error &&(<div>{`problem to fetching data: { ${error} }`}</div>)
  //  }
 
  //       <p>{data.name}</p>
  //       <strong>{data.website}</strong>
  //       <p>{data.email}</p>
  //   </div>
   
  // )
  const [data,setData]=useState({});
  const [loading ,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const url="https://jsonplaceholder.typicode.com/users/1";
  // const url="";
  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const response= await fetch(url);
        console.log(response);
        if(!response.ok){
          throw new Error(`please check your internet ${response.status}`)
        }
        const result= await response.json();
        setData(result);
        setError(null);
        setLoading(false);
      }
      catch(e){
        setError(e.message);
      }
      finally{
        setLoading(false);
      }
      console.log("result",data);
  }
    fetchData();
  },[])
  
  return(
    <div className="container border">
    {loading && <span className='spinner-border'></span>}
    {error && <h1>{`problem to fetching data ${error}`}</h1>}
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Website</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {
    
      <tr>
        <td>{data.name}</td>
        <td>{data.website}</td>
        <td>{data.email}</td>
    </tr>
  }
  </tbody>
</table>
    </div>
  )


  
}

export default FetchDataFromAPI;