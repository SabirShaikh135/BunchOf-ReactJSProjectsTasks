import React from 'react'
import {Stack,CircularProgress,LinearProgress} from "@mui/material"
function MUIProgress() {
  return ( 
    <Stack spacing={2}>
        <LinearProgress/>
        <CircularProgress/>
    </Stack>
  )
}

export default MUIProgress