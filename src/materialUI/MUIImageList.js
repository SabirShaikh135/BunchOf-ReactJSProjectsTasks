import React from 'react';
import {ImageList,ImageListItem,Stack} from "@mui/material";

function MUIImageList() {
  return (
    <Stack spacing={4}>
        <ImageList sx={{width:500,height:500}} cols={3} rowHeight={164}>
            <ImageListItem>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png' alt='image1'
                    loading='lazy'
                />
            </ImageListItem>
        </ImageList>
    </Stack>
  )
}

export default MUIImageList