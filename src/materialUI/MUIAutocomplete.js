import React,{useState} from 'react';
import {Stack,Autocomplete,TextField} from "@mui/material";
function MUIAutocomplete() {
const skill={
    id:"",
    label:""
}    
const skills=["HTML","CSS","JavaScript","React","MUI","Bootstrap","Redux"];
const skillsOption=skills.map((skill,index)=>({
    id:index+1,
    label:skill,
}))
const [values,setValues]=useState(null);
const [newskill,setNewSkill]=useState(null);
// console.log({values}); 
console.log({newskill}); 
const handleChange=(e)=>{
    setValues(e.target.values);
    // console.log(e.target.values); 
}
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete
            options={skills}
            renderInput={(params)=><TextField {...params} label="skills" />} 
            value={values}  
            // onChange={handleChange}  
            onChange={(e,newValue)=>setValues(newValue)}
            freeSolo  //use for enter any words
            />

        <Autocomplete
            options={skillsOption}
            renderInput={(params)=><TextField {...params} label="skills" />} 
            value={newskill}  
            // onChange={handleChange}  
            onChange={(e,skill)=>setNewSkill(skill)}
            freeSolo  //use for enter any words
            />
    </Stack>
    
  )
}

export default MUIAutocomplete