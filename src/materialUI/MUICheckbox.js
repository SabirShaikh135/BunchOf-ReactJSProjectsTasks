import React from 'react';
import {FormControl,FormLabel,FormGroup, FormControlLabel,Box,Checkbox,FormHelperText} from "@mui/material";
import { BookmarkBorder,Bookmark } from '@mui/icons-material';
import { useState } from 'react';

function MUICheckbox() {
    const [acceptTnC,setAcceptTnC]=useState(false);
    const [skills,setSkills]=useState([]);
    // console.log(acceptTnC);
    console.log(skills);
    const handleChangeCheckbox=(e)=>{
        setAcceptTnC(e.target.checked);
    }
    const handleSkillsChange=(e)=>{
        const index=skills.indexOf(e.target.value);
        if(index===-1){
            setSkills([...skills,e.target.value])
        }
        else{
            setSkills(skills.filter((skill)=>skill !==e.target.value))
        }
    }
  return (
    <Box>
        <Box>
        <FormControlLabel label="I accept terms and condtions"
            control={<Checkbox/>}
            value={acceptTnC}
            onChange={handleChangeCheckbox}
        />
        </Box>
        <Box>
            <Checkbox
                icon={<BookmarkBorder/>}
                checkedIcon={<Bookmark/>}
                checked={acceptTnC}
                onChange={handleChangeCheckbox}
            />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        label="HTML"
                        value="html"
                        control={<Checkbox checked={skills.includes("html")}
                        onChange={handleSkillsChange}/>}
                    />
                    <FormControlLabel
                        label="CSS"
                        value="css"
                        control={<Checkbox checked={skills.includes("css")} 
                        onChange={handleSkillsChange}/>}
                    />
                    <FormControlLabel
                        label="JavaScript"
                        value="JavaScript"
                        control={<Checkbox checked={skills.includes("JavaScript")}
                        onChange={handleSkillsChange}/>}
                    />
                </FormGroup>
                {
                    skills.length===0 &&<FormHelperText error>please select atleast one</FormHelperText>
                }
                    
            </FormControl>
        </Box>
    </Box>
  )
}

export default MUICheckbox