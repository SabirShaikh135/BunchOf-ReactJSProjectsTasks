import React,{useEffect, useState} from 'react';
import {Stack,TextField,Button} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {textField_UserName} from "../reduxExamplewithIncDec/action";
function EditTextField() {
    const getNameFromRedux=useSelector((state)=>state.editTextFieldWithRedux.initialTextValueState)
    const [userName,setUserName]=useState(getNameFromRedux);
    const dispatch=useDispatch()
    console.log("getNameFromRedux",getNameFromRedux)
    console.log("userName",userName);
    useEffect(()=>{
        dispatch(textField_UserName("shaikhsabir135@gmail.com"))
    },[])
    const handlechage=(e)=>{
      setUserName(dispatch(textField_UserName(e.target.value)))
    }
  return (
    <Stack spacing={4}>
    <Stack spacing={2}>
    
        <TextField
            label="User Name"
            variant='outlined'
            required 
            type="email" 
            value={userName}
            onChange={e=>setUserName(e.target.value)}
            error={!getNameFromRedux}
            helperText={!getNameFromRedux && "please fill user name"}
        />
        <Button variant='outlined' onClick={()=>dispatch(textField_UserName(userName))}>send</Button>
    </Stack>
    <h1>{getNameFromRedux}</h1>
    </Stack>
  )
}

export default EditTextField






///////////////////////////////////////


// import React,{useEffect, useState} from 'react';
// import {Stack,TextField,Button} from "@mui/material";
// import { useDispatch, useSelector } from 'react-redux';
// import {textField_UserName} from "../reduxExamplewithIncDec/action";
// function EditTextField() {
//     const getNameFromRedux=useSelector((state)=>state.editTextFieldWithRedux.initialTextValueState)
//     const [userName,setUserName]=useState();
//     const dispatch=useDispatch()
//     console.log("getNameFromRedux",getNameFromRedux)
//     console.log("userName",userName);
//     useEffect(()=>{
//         dispatch(textField_UserName("shaikhsabir135@gmail.com"))
//     },[])
//     const handlechage=(e)=>{
//       setUserName(dispatch(textField_UserName(e.target.value)))
//     }
//   return (
//     <Stack spacing={4}>
//     <Stack spacing={2}>
    
//         <TextField
//             label="User Name"
//             variant='outlined'
//             required 
//             type="email" 
//             value={getNameFromRedux}
//             onChange={handlechage}
//             error={!getNameFromRedux}
//             helperText={!getNameFromRedux && "please fill user name"}
//         />
//     </Stack>
//     <h1>{getNameFromRedux}</h1>
//     </Stack>
//   )
// }

// export default EditTextField