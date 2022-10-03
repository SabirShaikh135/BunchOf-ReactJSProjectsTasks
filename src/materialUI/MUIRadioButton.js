import React from 'react';
import {Box,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup} from "@mui/material";
import { useState } from 'react';
function MUIRadioButton() {
    const [value,setValue]=useState("");
    console.log(value);
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-exp-group-lable'>
                Year of Experiance
            </FormLabel>
            <RadioGroup name='job-exp-group' 
                        value={value} 
                        onChange={(e)=>{setValue(e.target.value)}}
                        row
                        >
                <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
                <FormControlLabel control={<Radio/>} label="6-8" value="6-8"/>
                <FormControlLabel control={<Radio/>} label="9-12" value="9-12"/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MUIRadioButton