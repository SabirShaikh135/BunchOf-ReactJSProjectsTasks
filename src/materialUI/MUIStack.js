import React from 'react';
import {Stack ,Box,Divider,Typography,Grid,Paper} from "@mui/material"

function MUIStack() {
  return (
    //Paper use for In Material Design, the physical properties of paper are translated to the screen. box shadow like
    <Paper sx={{padding:"32px",backgroundColor:"gray"}}>
    <Stack border="1px solid" direction="column" 
           spacing={4} 
           divider={<Divider orientation='horizontal' flexItem/>}
    >
        <Box><Typography variant='h1'>Sabir</Typography></Box>
        <Box><Typography variant='h1'>Shaikh</Typography></Box>
    </Stack>

    <Grid container my={4} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={6}>
        <Box bgcolor="primary.light" p={2}>Item1</Box>
      </Grid>
      <Grid item xs={6}>
      <Box bgcolor="primary.light" p={2}>Item2</Box>
      </Grid>
      <Grid item xs={6}>
      <Box bgcolor="primary.light" p={2}>Item3</Box>
      </Grid>
      <Grid item xs={6}>
      <Box bgcolor="primary.light" p={2}>Item4</Box>
      </Grid>
    </Grid>
    </Paper>
  )
}

export default MUIStack