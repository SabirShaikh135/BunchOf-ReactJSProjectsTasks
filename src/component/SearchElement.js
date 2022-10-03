import React,{useState} from "react";
import "./SearchElement.css";
 function SearchElement() {
  const [search,setSearch]=useState("");
 const list=[
    "html",
    "css",
    "react.js",
    "angular",
    "vue.js",
    "java",
    "javascript",
    "python",
    "c++",
    "c",
 ];
const filterlist=list.filter(listitem=>{
    console.log(listitem.toLowerCase().includes(search.toLowerCase()))
return(
    search.length ? 
    listitem.toLowerCase().includes(search.toLowerCase())
    :true
    
  )
  
})
const listElement=filterlist.map((listItem)=>{
   return(
     <li onClick={()=>alert(listItem)} key={listItem}>{listItem}</li>
   )
 })
 
 return (
    <div className="App" >
    <div className="input">
    <input type="search" 
      placeholder="serach programing languge"
      onChange={(e)=>setSearch(e.target.value)}
      value={search}
      />
      <p>search for:   {search}</p>
    </div>

    <div className="display" style={{display:"flex",flexDirection:"column"}}>
    <ul style={{listStyle:"none"}}>
      {
        true?listElement:"does not match"
      }
    </ul>
    </div>

    </div>
  );
}
export default SearchElement;