import React,{useState,useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './Item';
import { data } from './data';
const Limit=20;
function List() {
const [Data,setData]=useState(data.slice(0,Limit));
const [visible,Setvisible]=useState(Limit);
const [hashMore,SethashMore]=useState(true);
// console.log(Data)
const fetchData=()=>{
    const newLimit=visible+Limit;
    const dataToAdd=data.slice(visible,newLimit);
    if(data.length>Data.length){
        setTimeout(() => {
            setData([...Data].concat(dataToAdd))
        }, 2000);

        Setvisible(newLimit);
    }
    else{
        SethashMore(false);
    }
}
  return (
    <div className='List'>
        <InfiniteScroll
        dataLength={Data.length}
        next={fetchData}
        hasMore={hashMore}
        loader={<h4>Loading...</h4>}>
        {
            Data.map((item)=>{
                return <Item key={item.id} title={item.title}/>
            })
        }
        </InfiniteScroll>
    </div>
  )
}

export default List