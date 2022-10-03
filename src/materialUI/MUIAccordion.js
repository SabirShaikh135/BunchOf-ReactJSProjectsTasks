import React,{useState} from 'react';
import {Box,Accordion,AccordionDetails,AccordionSummary,Typography} from "@mui/material";
import { ExpandMore } from '@mui/icons-material';
function MUIAccordion() {
    const [expanded,setExpanded]=useState(false);
    const handleChange=(isExpanded,panel)=>{
        setExpanded(isExpanded?panel:false)
    }
  return (
    <Box>
    <Accordion expanded={expanded==="panel1"} 
    onChange={(e,isExpanded)=>handleChange(isExpanded,"panel1")}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt est expedita in, itaque illum autem asperiores dolore maiores, debitis assumenda aliquid eveniet beatae cupiditate eum tempore perferendis laboriosam nemo?
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded==="panel2"} 
    onChange={(e,isExpanded)=>handleChange(isExpanded,"panel2")}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt est expedita in, itaque illum autem asperiores dolore maiores, debitis assumenda aliquid eveniet beatae cupiditate eum tempore perferendis laboriosam nemo?
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded==="panel3"} 
    onChange={(e,isExpanded)=>handleChange(isExpanded,"panel3")}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt est expedita in, itaque illum autem asperiores dolore maiores, debitis assumenda aliquid eveniet beatae cupiditate eum tempore perferendis laboriosam nemo?
            </Typography>
        </AccordionDetails>
    </Accordion>

    </Box>
  )
}

export default MUIAccordion