import React, { useState } from 'react';
import {TextField,Stack,InputAdornment} from "@mui/material";

function MUITextField() {
    const [name,setName]=useState();
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <TextField label="Name" variant='filled'/>
            <TextField label="Name" variant='standard'/>
            <TextField label="Name" variant='outlined'/>
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField label="small secoundary" size='small' color='secondary'/>
        </Stack>

        <Stack spacing={2} direction="row">
            <TextField label="text required" required/>
        </Stack>

        <Stack spacing={2} direction="row">
            <TextField label="Password"
             type="password"
             helperText="Do not share your password"
             size='medium'
             />
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField label="read only" InputProps={{readOnly:true}}/>
        </Stack>

        <Stack spacing={2} direction="row">
        {/* InputAdornment add icon or sybole inside text field */}
            <TextField
                label="Amount"
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }}
            />
            <TextField
                label="Weight"
                InputProps={{
                    endAdornment: <InputAdornment position='end'>KG</InputAdornment>,
                }}  
            /> 
        </Stack>

        <Stack spacing={2} direction="row">
            <TextField label="Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                error={!name}
                helperText={!name && "user name is required"}
            />
        </Stack>
    </Stack>
  )
}

export default MUITextField