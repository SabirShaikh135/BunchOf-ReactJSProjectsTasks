import React,{useState} from 'react'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Delete } from '@mui/icons-material';
import { EditRoadTwoTone } from '@mui/icons-material';
import ButtonGroup  from '@mui/material/ButtonGroup';
import CheckBox from '@mui/material/Checkbox';
import { Favorite,FavoriteBorder } from '@mui/icons-material';
import { TextField,Select,MenuItem, Radio } from '@mui/material';
import Slider from '@mui/material/Slider';

// import Select from '@mui/material/Select';
const mark=[{value:0,lable:"start"},{value:100,lable:"middle"},]
function MaterialUI() {
  const [color,setColor]=useState("primary");
  const [disable,setDisable]=useState(false);
  const [checkboxValue,setCheckboxValue]=useState([])
  const [gender,setGender]=useState();
  const [sliderValue,setSliderValue]=useState([40,50])
  const [selectOption,setSelectOption]=useState();
  const [textField,setTextField]=useState();
  const handleTextField=(e)=>{
    setTextField(e.target.value);
  }
  
  const customColor=()=>{
    setColor("error");
    setDisable(true);
  }
  const getValue=(e)=>{
    const data=checkboxValue;
    data.push(e.target.value)
  console.log(data)
  }

  const handleRadioButton=(e)=>{
    setGender(e.target.value);
    console.log(e.target.value)
  }
  const getSliderValue=(e,value)=>{
    console.warn(value)
  }
  const handleSlider=(e,slideritem)=>{
    setSliderValue(slideritem)
  }
  return (
    <div>
        <h1>React Material UI Example</h1>
        <Button endIcon={<Delete/>} variant='contained'  onClick={()=>{alert("hello MUI")}}>Click Me</Button>
        <Button variant='outlined' disabled={disable} color={color} onClick={()=>{customColor()}}>change Color</Button>
        <Button color='success' variant='text'>Click Me</Button>
        <Button startIcon={<EditRoadTwoTone/>} color='error' variant='contained' href='#sabir'>Click Me</Button>
        <Button variant='contained' component="label">
        upload
        <input hidden accept='image/*' multiple type="file"/>
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" multiple type="file" />
        <PhotoCamera />
      </IconButton>
        <br/><br/><br/>
        <h1>button group</h1>
        <ButtonGroup variant="contained" color='secondary' orientation='vertical'>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>

      <h5>Reactjs material ui checkbox</h5>
      <CheckBox color='success' value="sabir" onChange={(e)=>{getValue(e)}}/>
      <CheckBox color='success' value="imarn" onChange={(e)=>{getValue(e)}}/>
      <CheckBox color='success' value="azhar" 
      icon={<Favorite/>}
      checkedIcon=<FavoriteBorder/>
      onChange={(e)=>{getValue(e)}}/>

      <h5>Reactjs material ui radio button</h5>
      <div>
        <span>male</span>
        <Radio value="male" checked={gender==="male"} onChange={handleRadioButton} color='secondary'/>
        <span>female</span>
        <Radio value="female" checked={gender==="female"} onChange={handleRadioButton}/>
      </div>

      <h5>Reactjs material ui Slider</h5>
        <Slider
          color='secondary'
          defaultValue={100}
          max={200}
          step={10}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={getSliderValue}
          // orientation="vertical"
        />

      <h5>Reactjs material ui Range Slider</h5>

      <Slider
        value={sliderValue}
        onChange={handleSlider}
        valueLabelDisplay="auto"
      />
        <br/><br/><br/><br/>
      <h5>Reactjs material ui Select option</h5>
      <br/><br/>
        <Select>
          <MenuItem value={0}>Select Course</MenuItem>
          <MenuItem value={1}>javaScript</MenuItem>
          <MenuItem value={2}>React</MenuItem>
          <MenuItem value={3}>HTML</MenuItem>
          <MenuItem value={4}>CSS</MenuItem>
        </Select>

        <br/><br/><br/><br/>
        <h5>Reactjs material ui Text field</h5>
        
        <TextField
          label="enter user name"
          // variant='filled'
          variant='outlined'
          fullWidth
          onChange={handleTextField}
          value={textField}
          // defaultValue="Hello World"
          error
          helperText="please enter user name"
        />


    </div>
  )
}

export default MaterialUI