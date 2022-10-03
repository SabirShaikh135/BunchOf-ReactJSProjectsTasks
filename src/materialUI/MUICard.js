import React from 'react';
import {Box,Card,CardContent,CardActions,CardMedia,Button,Typography} from "@mui/material"
function MUICard() {
  return (
    <Box width="300px">
        <Card>
        <CardMedia
          component="img"
          height="140"
          image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
          alt="image"
        />
          <CardContent>
                <Typography variant='h5' gutterBottom>React</Typography>
                <Typography variant='body2'>
                The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MUICard