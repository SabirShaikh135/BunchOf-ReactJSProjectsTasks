import React, { useState } from 'react';
import {Box,FormControl,Select,MenuItem,TextField} from "@mui/material"
import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';

function SelectOptionPOC() {
    const intialValue={occupation:""}
    const [selectOption,setSelectOption]=useState(intialValue);
    const [isTrue,setIsTrue]=useState(false);
    const handleSelectOption=(e)=>{
        const { name, value } = e.target;
        setSelectOption({ ...selectOption, [name]: value });
        // setSelectOption(e.target.value);
        console.log(selectOption)
        if(e.target.value==="Other"){
            setIsTrue(true);
        }
        if(e.target.value===" "){
            setIsTrue(false);
        }
        
    }
    useEffect(()=>{console.log("useeffct")},[selectOption])
  return (
    <Box width={250}>
{/* <FormControl width={250} fullWidth> */}
{isTrue?(<TextField 
             label="occupation"
             value={selectOption.occupation}
             onChange={handleSelectOption}
             fullWidth
             required
            name='occupation'
            error={selectOption.occupation==="Other" || !isNaN(selectOption.occupation)}
            helperText={selectOption.occupation==="Other"&&"write your occupation" ||
            !isNaN(selectOption.occupation) && "not allow number and blank"}
            />


)
:(
    <TextField label="Select Occupation" 
             select 
             value={selectOption.occupation}
             onChange={handleSelectOption}
             fullWidth
             required
            name='occupation'
         >  
         <MenuItem value="Bissness">Bissness</MenuItem>
            <MenuItem value="Profishinal">Profishinal</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Doctor">Doctor</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
        </TextField>
        )}
        {/* </FormControl> */}<br/><br/><br/>
        <h1>{selectOption.occupation}</h1>
    </Box>
  )
}

export default SelectOptionPOC