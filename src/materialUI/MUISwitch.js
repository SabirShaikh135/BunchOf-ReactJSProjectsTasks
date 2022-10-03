import React, { useState } from 'react';
import {Box,FormControlLabel,Switch} from "@mui/material"
function MUISwitch() {
    const [checked,setChecked]=useState(false);
    console.log(checked);
    const handleSwitchEvent=(e)=>{
        setChecked(e.target.checked);
    }
  return (
    <Box style={{backgroundColor:checked?"gray":"white"}}>
        <FormControlLabel 
            label="Dark mode"
            control={<Switch
                checked={checked}
                onChange={handleSwitchEvent}
            />}
        />
    </Box>
  )
}

export default MUISwitch