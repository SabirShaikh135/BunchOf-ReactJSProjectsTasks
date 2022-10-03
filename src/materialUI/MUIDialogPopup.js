import React,{useState} from 'react';
import {Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";

function MUIDialogPopup() {
    const [open,setOpen]=useState(false);
  return (
    <>
        <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>Submit the Test ?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to submit the task ? you will not able to eidt after submit
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cencel</Button>
                <Button onClick={()=>setOpen(false)}>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MUIDialogPopup