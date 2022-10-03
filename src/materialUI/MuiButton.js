import React from 'react'
import {Stack,Button,IconButton ,ButtonGroup,ToggleButtonGroup,ToggleButton,CircularProgress} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

function MuiButton() {
    const [format,setFormat]=useState([null]);
    const handleFormatChange=(event,format)=>{
        setFormat(format);
        console.log(format);
    }
  return (
    // stack us for spacing and direction of element same div
    <Stack spacing={8}>
    <Stack spacing={2} direction="row">  
    <Button variant='text'>Click me</Button>
    <Button variant='contained'>Click me</Button>
    <Button variant='outlined' href='google.com'>Click me</Button>
    </Stack>
    <Stack spacing={2} direction="column">
    <Button variant='contained' color='error'>error</Button>
    <Button variant='contained' color='info'>info</Button>
    <Button variant='contained' color='primary'>primary</Button>
    <Button variant='contained' color='secondary'>secondary</Button>
    <Button variant='contained' color='success'>success</Button>
    <Button variant='contained' color='warning'>warning</Button>
    </Stack>

    <Stack display="block" spacing={2} direction="row">
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
    </Stack>

    <Stack spacing={2} direction="row">
        <Button variant='contained'
        startIcon={<CircularProgress color='error'/>}
        >
        Send
       </Button>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
        <IconButton color='success'>
            <SendIcon/>
        </IconButton>
    </Stack>

    <Stack direction="row">
        <ButtonGroup variant='contained' 
        color='warning' orientation='horizontal'
        size='small'>
            <Button onClick={()=>{alert("hello")}}>left</Button>
            <Button>center</Button>
            <Button>right</Button>
        </ButtonGroup>
    </Stack>

    <Stack spacing={2}>
    <ToggleButtonGroup value={format} onChange={handleFormatChange}>
        <ToggleButton value="FormatBold"><FormatBoldIcon/></ToggleButton>
        <ToggleButton value="FormatItalic"><FormatItalicIcon/></ToggleButton>
        <ToggleButton value="FormatUnderlined"><FormatUnderlinedIcon/></ToggleButton>
    </ToggleButtonGroup>

    </Stack>

    </Stack>
  )
}

export default MuiButton