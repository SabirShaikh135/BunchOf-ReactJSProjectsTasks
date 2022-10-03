import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container,Button,Spinner } from 'react-bootstrap';
import PeopleList from './PeopleList';
// https://swapi.dev/api/people/
function FetchmoreDatafromAPI() {
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const [spinnerIsVisible,setSpinnerIsVisible]=useState(false);
    const [isDataEnd ,setIsDataEnd]=useState(false);
    const endPoint=`https://swapi.dev/api/people/?page=${page}`;
    // const endPoint="https://swapi.dev/api/people/";
    console.log("page",page);
    useEffect(()=>{
        fetchData();
    },[])
const fetchData= async()=>{
    setSpinnerIsVisible(true);
    try {
        // const response= await axios.get(endPoint);
        // const {result}=response.data;
        const response= await fetch(endPoint);
        const {result}= await response.json();
        if(response.status===200){
            setPage(page+1);
            setData([...data].concat(result))
        }
        
    } catch (error) {
        console.log(error);
        setIsDataEnd(true);
    }
    setSpinnerIsVisible(false);
}

  return (
    <Container className='mt-3 mb-3'>
        <PeopleList data={data}/>
        {spinnerIsVisible && <Spinner animation='border'/>}
        {
            !isDataEnd ? (!spinnerIsVisible && <Button onClick={fetchData}>Load more</Button>)
            : <h3 style={{color:"red"}}>no more data</h3>
        }
    </Container>
  )
}

export default FetchmoreDatafromAPI

