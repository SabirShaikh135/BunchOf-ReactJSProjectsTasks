import React,{useState} from 'react';
import {Stack ,TextField} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns"
import { DatePicker } from '@mui/x-date-pickers';
function MUIDatePicker() {
    const [selectDate,setSelectDate]=useState(null);
    console.log({selectDate});
  return (
    <Stack spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker label="date picker"
                value={selectDate}  
                onChange={()=>{setSelectDate(selectDate)}}
                renderInput={(params)=><TextField {...params}/>}
            />
        </LocalizationProvider>
    </Stack>
  )
}

export default MUIDatePicker