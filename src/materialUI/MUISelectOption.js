import React, { useState } from 'react';
// same as div tag
import {Box, TextField,MenuItem} from "@mui/material";

export default function MUISelectOption() {
    const [country,setCountry]=useState("");
    // const [countries,setCountries]=useState([]);    
    const handleSelectOption=(e)=>{
        setCountry(e.target.value);
        // const values=e.target.vlaue;
        // setCountries(typeof values==="string"? values.split(","):values);
        console.log(country)
    }
  return (
    <Box width="250px">
        <TextField label="Select Country" 
             select 
             value={country}
            //  value={countries}
             onChange={handleSelectOption}
             fullWidth
            //  SelectProps={{multiple:true,}}
         />

            <MenuItem value="in">India</MenuItem>
            <MenuItem value="eg">England</MenuItem>
            <MenuItem value="au">Australia</MenuItem>
            <MenuItem value="us">USA</MenuItem>
        {/* </TextField> */}
    </Box>
  )
}
