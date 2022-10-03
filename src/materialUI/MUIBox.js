import React from 'react';
import {Box} from "@mui/material"

function MUIBox() {
  return (
    <>
   <Box 
        sx={{
            backgroundColor:"primary.main",
            color:"white",
            height:"100px",
            width:"100px",
            padding:"16px",
            "&:hover":{
                backgroundColor:"primary.light"
            },
        }}
   >
    Box Example
   </Box>

   <Box display="flex" height="100px" width="100px" bgcolor="success.light">
        
   </Box>
   </>
  )
}

export default MUIBox