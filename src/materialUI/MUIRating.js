import React,{useState} from 'react';
import {Stack,Rating} from "@mui/material";
import { Favorite,FavoriteBorder } from '@mui/icons-material';

function MUIRating() {
    const [rating,setRating]=useState(null);
    console.log(rating);
    const handleChangeRating=(e)=>{
        setRating(e.target.value);
    }
  return (
    <Stack>
        <Rating
            value={rating}
            onChange={handleChangeRating}
            // precision={0.5}
            size="large"
            icon={<Favorite color='error'/>}
            emptyIcon={<FavoriteBorder/>}
        />
    </Stack>
  )
}

export default MUIRating